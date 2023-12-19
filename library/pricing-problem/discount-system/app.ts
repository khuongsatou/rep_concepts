
import { EligibilityChecker } from './services/EligibilityChecker';
import { DiscountService } from './services/discountService';

const discountService = new DiscountService();
const eligibilityChecker = new EligibilityChecker();

const discountA = { code: 'SUMMER2023', percentage: 0.1 };
discountService.addDiscount(discountA);

const customerTotalAmount = 120;

const customerDiscountCode = 'SUMMER2023';
const appliedDiscount = discountService.getDiscountByCode(customerDiscountCode);

if (appliedDiscount && eligibilityChecker.isEligibleForDiscount(appliedDiscount, customerTotalAmount)) {
  const discountedAmount = customerTotalAmount * (1 - appliedDiscount.percentage);
  console.log(`Customer is eligible for a ${appliedDiscount.percentage * 100}% discount. Total amount after discount: $${discountedAmount}`);
} else {
  console.log('No eligible discount applied.');
}
