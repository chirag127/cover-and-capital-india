export interface DatedCashFlow {
  date: Date | string;
  amount: number;
}

/**
 * Extended Internal Rate of Return (XIRR) using actual calendar dates.
 *
 * Solves:
 *   sum_{i=0}^n (amount_i / (1 + r)^((date_i - date_0) / 365.0)) = 0
 *
 * Uses ACT/365 date fraction convention.
 */
export function calculateXIRR(
  transactions: DatedCashFlow[],
  guess: number = 0.1,
  maxIterations: number = 100,
  tolerance: number = 1e-7
): number | null {
  if (!transactions || transactions.length < 2) return null;

  const parsed = transactions
    .map((t) => ({
      amount: t.amount,
      date: typeof t.date === 'string' ? new Date(t.date) : t.date,
    }))
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  // Validate dates
  if (parsed.some((p) => isNaN(p.date.getTime()))) return null;

  const hasPositive = parsed.some((t) => t.amount > 0);
  const hasNegative = parsed.some((t) => t.amount < 0);
  if (!hasPositive || !hasNegative) return null;

  const t0 = parsed[0].date.getTime();
  const MS_PER_DAY = 1000 * 60 * 60 * 24;

  const items = parsed.map((p) => {
    const days = (p.date.getTime() - t0) / MS_PER_DAY;
    return {
      amount: p.amount,
      years: days / 365.0,
    };
  });

  let rate = guess;

  for (let i = 0; i < maxIterations; i++) {
    if (rate <= -0.999999) {
      rate = -0.99;
    }

    let fValue = 0;
    let fPrime = 0;

    for (const item of items) {
      const exp = item.years;
      const base = 1 + rate;

      // Base cannot be negative for fractional powers
      if (base <= 0) {
        rate = 0.05;
        break;
      }

      const discount = Math.pow(base, exp);
      fValue += item.amount / discount;
      if (exp !== 0) {
        fPrime -= (exp * item.amount) / Math.pow(base, exp + 1);
      }
    }

    if (Math.abs(fValue) < tolerance) {
      return rate;
    }

    if (Math.abs(fPrime) < 1e-12) {
      rate += 0.05;
      continue;
    }

    const nextRate = rate - fValue / fPrime;
    if (Math.abs(nextRate - rate) < tolerance) {
      return nextRate;
    }

    rate = nextRate;
  }

  return null;
}
