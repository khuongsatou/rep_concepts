import { InventoryManager } from './InventoryManager';

describe('InventoryManager', () => {
  test('should calculate inventory value correctly', () => {
    const inventoryManager = new InventoryManager();
    inventoryManager.addItem('Product A', 10, 5);
    inventoryManager.addItem('Product B', 15, 3);

    // Inventory value = (10 * 5) + (15 * 3) = 50 + 45 = 95
    const inventoryValue = inventoryManager.calculateInventoryValue(10);
    expect(inventoryValue).toBe(80);
  });

  test('should handle empty inventory', () => {
    const inventoryManager = new InventoryManager();

    // Inventory value for empty inventory should be 0
    const inventoryValue = inventoryManager.calculateInventoryValue(10);
    expect(inventoryValue).toBe(0);
  });
});
