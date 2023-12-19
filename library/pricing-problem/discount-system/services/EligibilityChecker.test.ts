import { EligibilityChecker } from './EligibilityChecker';
import { Discount } from '../models/Discount';

describe('EligibilityChecker', () => {
  test('should check eligibility for discount', () => {
    const eligibilityChecker = new EligibilityChecker();
    const discount = new Discount('SUMMER2023', 0.1);

    // Eligibility condition: Total amount > 100
    expect(eligibilityChecker.isEligibleForDiscount(discount, 120)).toBe(true);
    expect(eligibilityChecker.isEligibleForDiscount(discount, 80)).toBe(false);
  });
});
