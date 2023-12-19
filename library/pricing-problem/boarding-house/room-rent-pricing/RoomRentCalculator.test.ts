import {RoomRentCalculator} from './RoomRentCalculator';

test('calculateRoomRent function with different scenarios', () => {
  const roomCalculator = new RoomRentCalculator();

  // Test case 1
  const room1Area = 'small';
  const room1Amenities = ['airConditioner', 'tv'];
  const room1Location = 'cityCenter';
  const room1Rent = roomCalculator.calculateRoomRent(room1Area, room1Amenities, room1Location);
  expect(room1Rent).toBe(3000000); // Expected result: 3,100,000 VND

  // Test case 2
  const room2Area = 'medium';
  const room2Amenities = ['tv', 'kitchen'];
  const room2Location = 'suburb';
  const room2Rent = roomCalculator.calculateRoomRent(room2Area, room2Amenities, room2Location);
  expect(room2Rent).toBe(2200000); // Expected result: 1,900,000 VND

  // Test case 3
  const room3Area = 'large';
  const room3Amenities = ['kitchen'];
  const room3Location = 'suburb';
  const room3Rent = roomCalculator.calculateRoomRent(room3Area, room3Amenities, room3Location);
  expect(room3Rent).toBe(1700000); // Expected result: 1,400,000 VND

  // Add more test scenarios if needed
});
