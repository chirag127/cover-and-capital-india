import { describe, it, expect } from 'vitest';
import { calculateIRR } from '../src/lib/finance/irr';
import { calculateXIRR, type DatedCashFlow } from '../src/lib/finance/xirr';
import {
  calculateRealReturn,
  futureValueLumpSum,
  presentValueLumpSum,
  calculatePurchasingPower,
  calculateRecommendedCover,
} from '../src/lib/finance/math';
import { formatINR, formatPercent } from '../src/lib/finance/formatters';

describe('Financial Mathematics — IRR Engine', () => {
  it('calculates IRR accurately for standard annual cash flows', () => {
    // 10-year regular endowment-style cash flow:
    // Invest ₹1,00,000/yr for 5 years (t=0 to 4), receive ₹7,50,000 at t=10
    const cashFlows = [-100000, -100000, -100000, -100000, -100000, 0, 0, 0, 0, 0, 750000];
    const irr = calculateIRR(cashFlows);
    expect(irr).not.toBeNull();
    // Known mathematical solution is ~5.4%
    expect(irr!).toBeGreaterThan(0.05);
    expect(irr!).toBeLessThan(0.06);
  });

  it('calculates simple 1-year investment return', () => {
    // Pay 100, receive 110 after 1 year -> 10%
    const irr = calculateIRR([-100, 110]);
    expect(irr).not.toBeNull();
    expect(irr!).toBeCloseTo(0.1, 4);
  });

  it('returns null when cash flows have no sign changes', () => {
    expect(calculateIRR([100, 200, 300])).toBeNull();
    expect(calculateIRR([-100, -200, -300])).toBeNull();
    expect(calculateIRR([])).toBeNull();
    expect(calculateIRR([100])).toBeNull();
  });

  it('handles zero net returns correctly', () => {
    // Pay 100, receive 100 after 1 year -> 0%
    const irr = calculateIRR([-100, 100]);
    expect(irr).not.toBeNull();
    expect(irr!).toBeCloseTo(0.0, 4);
  });
});

describe('Financial Mathematics — XIRR Engine with Calendar Dates', () => {
  it('calculates XIRR for exact 1-year gap', () => {
    const transactions: DatedCashFlow[] = [
      { date: '2025-01-01', amount: -100000 },
      { date: '2026-01-01', amount: 110000 },
    ];
    const xirr = calculateXIRR(transactions);
    expect(xirr).not.toBeNull();
    expect(xirr!).toBeCloseTo(0.1, 3);
  });

  it('handles multi-year periodic premiums with a leap year', () => {
    const transactions: DatedCashFlow[] = [
      { date: '2024-01-01', amount: -50000 }, // Leap year 2024
      { date: '2025-01-01', amount: -50000 },
      { date: '2026-01-01', amount: -50000 },
      { date: '2027-01-01', amount: 180000 },
    ];
    const xirr = calculateXIRR(transactions);
    expect(xirr).not.toBeNull();
    expect(xirr!).toBeCloseTo(0.0939, 3);
  });

  it('rejects invalid or monotonic cash flows', () => {
    expect(calculateXIRR([{ date: '2025-01-01', amount: 100 }])).toBeNull();
    expect(
      calculateXIRR([
        { date: '2025-01-01', amount: 100 },
        { date: '2026-01-01', amount: 200 },
      ])
    ).toBeNull();
  });
});

describe('Financial Mathematics — Fisher Real Return & Purchasing Power', () => {
  it('calculates real return correctly using Fisher equation', () => {
    // Nominal 10%, Inflation 6%
    // (1 + 0.10) / (1 + 0.06) - 1 = 1.10 / 1.06 - 1 = 0.0377358...
    const realRate = calculateRealReturn(0.1, 0.06);
    expect(realRate).toBeCloseTo(0.0377358, 5);
  });

  it('calculates purchasing power erosion over 20 years at 6% inflation', () => {
    // ₹1 Crore (10,000,000) eroded over 20 years at 6%
    // 10,000,000 / (1.06^20) ≈ 3,118,047 (loses ~69% purchasing power)
    const realPower = calculatePurchasingPower(10000000, 0.06, 20);
    expect(realPower).toBeGreaterThan(3100000);
    expect(realPower).toBeLessThan(3150000);
  });

  it('calculates future value and present value symmetry', () => {
    const principal = 500000;
    const rate = 0.08;
    const years = 10;
    const fv = futureValueLumpSum(principal, rate, years);
    const pv = presentValueLumpSum(fv, rate, years);
    expect(pv).toBeCloseTo(principal, 2);
  });
});

describe('Life Cover Calculation Engine', () => {
  it('calculates net cover without double counting existing cover and assets', () => {
    const result = calculateRecommendedCover({
      annualHouseholdExpenses: 600000, // ₹6L/yr
      yearsOfExpenseReplacement: 20,
      outstandingLiabilities: 3000000, // ₹30L home loan
      futureMajorGoals: 2500000, // ₹25L education fund
      existingLiquidAssets: 2000000, // ₹20L MF/PF
      existingLifeInsuranceCover: 5000000, // ₹50L existing term cover
      inflationRate: 0.06,
      postTaxSafeReturnRate: 0.07,
    });

    expect(result.expenseFundNeeded).toBeGreaterThan(0);
    expect(result.grossCoverRequired).toBeGreaterThan(result.expenseFundNeeded);
    // Net cover must subtract existing assets (20L) and existing cover (50L)
    expect(result.netCoverRecommended).toBe(
      Math.max(0, result.grossCoverRequired - 2000000 - 5000000)
    );
  });
});

describe('Formatters', () => {
  it('formats Indian Rupee numbers with appropriate comma placement', () => {
    expect(formatINR(125000)).toBe('₹1,25,000');
    expect(formatINR(10000000)).toBe('₹1,00,00,000');
    expect(formatINR(500)).toBe('₹500');
    expect(formatINR(-50000)).toBe('-₹50,000');
  });

  it('formats compact INR for Lakhs and Crores', () => {
    expect(formatINR(15000000, true)).toBe('₹1.50 Cr');
    expect(formatINR(550000, true)).toBe('₹5.50 Lakh');
  });

  it('formats percentages accurately', () => {
    expect(formatPercent(0.065)).toBe('6.50%');
    expect(formatPercent(null)).toBe('N/A');
  });
});
