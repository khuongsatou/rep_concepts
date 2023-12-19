export class RoomRentCalculator {
    private areaPrices: Record<string, number> = {
      'small': 1500000,
      'medium': 1200000,
      'large': 1000000,
    };
  
    private amenitiesPrices: Record<string, number> = {
      'airConditioner': 500000,
      'tv': 300000,
      'kitchen': 400000,
    };
  
    private locationPrices: Record<string, number> = {
      'cityCenter': 700000,
      'suburb': 300000,
    };
  
    calculateRoomRent(area: string, amenities: string[], location: string): number {
      const basePrice = this.areaPrices[area] || 0;
      const amenitiesPrice = amenities.reduce((acc, amenity) => acc + (this.amenitiesPrices[amenity] || 0), 0);
      const locationPrice = this.locationPrices[location] || 0;
  
      return basePrice + amenitiesPrice + locationPrice;
    }
  }
  
  // Test
  const roomCalculator = new RoomRentCalculator();
  
  // Test case 1
  const room1Area = 'small';
  const room1Amenities = ['airConditioner', 'tv'];
  const room1Location = 'cityCenter';
  const room1Rent = roomCalculator.calculateRoomRent(room1Area, room1Amenities, room1Location);
  console.log(`Room 1 rent: ${room1Rent} VND`); // Expected result: 3,100,000 VND
  
  // Test case 2
  const room2Area = 'medium';
  const room2Amenities = ['tv', 'kitchen'];
  const room2Location = 'suburb';
  const room2Rent = roomCalculator.calculateRoomRent(room2Area, room2Amenities, room2Location);
  console.log(`Room 2 rent: ${room2Rent} VND`); // Expected result: 1,900,000 VND
  