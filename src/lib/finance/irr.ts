/**
 * Internal Rate of Return (IRR) using the Newton-Raphson method.
 *
 * The IRR is the discount rate r that satisfies:
 *   NPV(r) = sum_{t=0}^n (CF_t / (1 + r)^t) = 0
 *
 * @param cashFlows Array of numbers representing cash flows at equal time intervals.
 *                  Must contain at least one positive and one negative value.
 * @param guess Initial discount rate guess (default 0.1 for 10%).
 * @param maxIterations Maximum iterations for convergence (default 100).
 * @param tolerance Precision tolerance (default 1e-7).
 * @returns Rate as a decimal (e.g. 0.065 for 6.5%), or null if non-convergent.
 */
export function calculateIRR(
  cashFlows: number[],
  guess: number = 0.1,
  maxIterations: number = 100,
  tolerance: number = 1e-7
): number | null {
  if (!cashFlows || cashFlows.length < 2) return null;

  const hasPositive = cashFlows.some((cf) => cf > 0);
  const hasNegative = cashFlows.some((cf) => cf < 0);
  if (!hasPositive || !hasNegative) {
    return null; // An IRR cannot exist without at least one inflow and one outflow
  }

  let rate = guess;

  for (let i = 0; i < maxIterations; i++) {
    // Avoid singularity when rate <= -1
    if (rate <= -0.999999) {
      rate = -0.99;
    }

    let npv = 0;
    let dNpv = 0;

    for (let t = 0; t < cashFlows.length; t++) {
      const cf = cashFlows[t];
      const factor = Math.pow(1 + rate, t);
      npv += cf / factor;
      if (t > 0) {
        dNpv -= (t * cf) / Math.pow(1 + rate, t + 1);
      }
    }

    if (Math.abs(npv) < tolerance) {
      return rate;
    }

    if (Math.abs(dNpv) < 1e-12) {
      // Derivative is near zero; try perturbing rate
      rate += 0.05;
      continue;
    }

    const nextRate = rate - npv / dNpv;

    // Check for convergence
    if (Math.abs(nextRate - rate) < tolerance) {
      return nextRate;
    }

    rate = nextRate;
  }

  return null; // Did not converge within tolerance
}
