/**
 * Formats a number into Indian Rupee notation (e.g. ₹1,25,000, ₹1.50 Cr)
 */
export function formatINR(amount: number, compact: boolean = false): string {
  if (isNaN(amount) || amount === null || amount === undefined) return '₹0';

  const isNegative = amount < 0;
  const abs = Math.abs(amount);

  if (compact) {
    if (abs >= 10000000) {
      return `${isNegative ? '-' : ''}₹${(abs / 10000000).toFixed(2)} Cr`;
    }
    if (abs >= 100000) {
      return `${isNegative ? '-' : ''}₹${(abs / 100000).toFixed(2)} Lakh`;
    }
  }

  // Standard Indian comma separator format
  const rounded = Math.round(abs);
  const str = rounded.toString();
  let result = '';

  if (str.length > 3) {
    const lastThree = str.substring(str.length - 3);
    const rest = str.substring(0, str.length - 3);
    const withCommas = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
    result = `${withCommas},${lastThree}`;
  } else {
    result = str;
  }

  return `${isNegative ? '-' : ''}₹${result}`;
}

/**
 * Formats a decimal as percentage (e.g. 0.0715 -> "7.15%")
 */
export function formatPercent(rate: number | null, decimals: number = 2): string {
  if (rate === null || isNaN(rate)) return 'N/A';
  return `${(rate * 100).toFixed(decimals)}%`;
}
