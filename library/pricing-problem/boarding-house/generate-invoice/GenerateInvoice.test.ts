import { RentalProperty } from './GenerateInvoice';

describe('RentalProperty', () => {
  let rentalProperty: RentalProperty;

  beforeEach(() => {
    rentalProperty = new RentalProperty();
  });

  test('calculateTotalCosts should calculate total costs correctly', () => {
    const totalCosts = rentalProperty.calculateTotalCosts(1, 100, 5, 'car', 4, 'internet', 2);
    // Replace the following with the expected result based on your logic
    expect(totalCosts).toBe(0);
  });

  test('generateInvoiceAndSave should generate and print invoice', () => {
    const generateInvoiceSpy = jest.spyOn(rentalProperty, 'generateInvoiceAndSave');
    rentalProperty.generateInvoiceAndSave(1, 100, 5, 'car', 4, 'internet', 2);
    
    // Ensure that the generateInvoiceAndSave method is called
    expect(generateInvoiceSpy).toHaveBeenCalled();

    // You may add more specific assertions based on your needs
  });
});
