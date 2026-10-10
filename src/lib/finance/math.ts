/**
 * Real return using the exact Fisher equation:
 *   (1 + r_real) = (1 + r_nominal) / (1 + inflation)
 *   r_real = (1 + r_nominal) / (1 + inflation) - 1
 */
export function calculateRealReturn(nominalRate: number, inflationRate: number): number {
  if (inflationRate <= -1) throw new Error('Inflation rate cannot be <= -100%');
  return (1 + nominalRate) / (1 + inflationRate) - 1;
}

/**
 * Future value of a single lump sum: FV = PV * (1 + r)^n
 */
export function futureValueLumpSum(principal: number, annualRate: number, years: number): number {
  return principal * Math.pow(1 + annualRate, years);
}

/**
 * Present value of a future lump sum: PV = FV / (1 + r)^n
 */
export function presentValueLumpSum(futureValue: number, annualRate: number, years: number): number {
  return futureValue / Math.pow(1 + annualRate, years);
}

/**
 * Future value of recurring annual contributions made at the beginning of each year (annuity due).
 */
export function futureValueAnnualAnnuityDue(annualPayment: number, annualRate: number, years: number): number {
  if (years <= 0) return 0;
  if (Math.abs(annualRate) < 1e-9) return annualPayment * years;
  return annualPayment * ((Math.pow(1 + annualRate, years) - 1) / annualRate) * (1 + annualRate);
}

/**
 * Purchasing power of a future nominal amount eroded by inflation:
 *   Real Purchasing Power = Amount / (1 + inflation)^years
 */
export function calculatePurchasingPower(nominalAmount: number, annualInflationRate: number, years: number): number {
  if (annualInflationRate <= -1) throw new Error('Inflation cannot be <= -100%');
  return nominalAmount / Math.pow(1 + annualInflationRate, years);
}

export interface LifeCoverInputs {
  annualHouseholdExpenses: number;
  yearsOfExpenseReplacement: number; // typically 15–25 years or until dependants are financially independent
  outstandingLiabilities: number; // home loans, car loans, personal debts
  futureMajorGoals: number; // children's higher education, marriage, healthcare reserves
  existingLiquidAssets: number; // mutual funds, PF, fixed deposits available to dependants
  existingLifeInsuranceCover: number; // existing active term policies
  inflationRate?: number; // default 0.06
  postTaxSafeReturnRate?: number; // default 0.07
}

export interface LifeCoverResult {
  expenseFundNeeded: number;
  grossCoverRequired: number;
  netCoverRecommended: number;
  breakdown: {
    expenseReplacement: number;
    debtsAndLiabilities: number;
    futureGoals: number;
    totalNeeds: number;
    lessExistingAssets: number;
    lessExistingCover: number;
  };
}

/**
 * Comprehensive Life Cover Estimator based on expense replacement and liability coverage.
 * Avoids double-counting existing assets and cover.
 */
export function calculateRecommendedCover(inputs: LifeCoverInputs): LifeCoverResult {
  const inflation = inputs.inflationRate ?? 0.06;
  const safeReturn = inputs.postTaxSafeReturnRate ?? 0.07;
  const years = Math.max(1, inputs.yearsOfExpenseReplacement);

  // Real discount rate for expense annuity
  const realDiscountRate = (1 + safeReturn) / (1 + inflation) - 1;

  let expenseFundNeeded: number;
  if (Math.abs(realDiscountRate) < 1e-4) {
    expenseFundNeeded = inputs.annualHouseholdExpenses * years;
  } else {
    // PV of growing annuity
    expenseFundNeeded =
      inputs.annualHouseholdExpenses * ((1 - Math.pow(1 + realDiscountRate, -years)) / realDiscountRate);
  }

  const debts = Math.max(0, inputs.outstandingLiabilities);
  const goals = Math.max(0, inputs.futureMajorGoals);
  const totalNeeds = expenseFundNeeded + debts + goals;

  const existingAssets = Math.max(0, inputs.existingLiquidAssets);
  const existingCover = Math.max(0, inputs.existingLifeInsuranceCover);

  const grossCoverRequired = Math.max(0, totalNeeds);
  const netCoverRecommended = Math.max(0, totalNeeds - existingAssets - existingCover);

  return {
    expenseFundNeeded,
    grossCoverRequired,
    netCoverRecommended,
    breakdown: {
      expenseReplacement: expenseFundNeeded,
      debtsAndLiabilities: debts,
      futureGoals: goals,
      totalNeeds,
      lessExistingAssets: existingAssets,
      lessExistingCover: existingCover,
    },
  };
}
