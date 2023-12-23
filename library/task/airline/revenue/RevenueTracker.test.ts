// RevenueTracker.test.ts

import { RevenueTracker } from './RevenueTracker';

describe('RevenueTracker', () => {
  test('recordRevenue should update flight and group revenues correctly', () => {
    const tracker = new RevenueTracker();

    tracker.recordRevenue('SQ308', 5000, 'GroupA');
    tracker.recordRevenue('TR123', 3000, 'GroupB');
    tracker.recordRevenue('SQ309', 4000, 'GroupA');
    tracker.recordRevenue('TR124', 2000, 'GroupB');

    // Check individual flight revenues
    expect(tracker.getFlightRevenue('SQ308')).toBe(5000);
    expect(tracker.getFlightRevenue('TR123')).toBe(3000);
    expect(tracker.getFlightRevenue('SQ309')).toBe(4000);
    expect(tracker.getFlightRevenue('TR124')).toBe(2000);

    // Check group revenues
    expect(tracker.getGroupRevenue('GroupA')).toBe(9000);
    expect(tracker.getGroupRevenue('GroupB')).toBe(5000);
  });

  test('getFlightRevenue should return undefined for non-existent flight', () => {
    const tracker = new RevenueTracker();
    expect(tracker.getFlightRevenue('NonExistentFlight')).toBeUndefined();
  });

  test('getGroupRevenue should return undefined for non-existent group', () => {
    const tracker = new RevenueTracker();
    expect(tracker.getGroupRevenue('NonExistentGroup')).toBeUndefined();
  });

  test('getTotalRevenue should return the sum of all revenues', () => {
    const tracker = new RevenueTracker();

    tracker.recordRevenue('SQ308', 5000, 'GroupA');
    tracker.recordRevenue('TR123', 3000, 'GroupB');
    tracker.recordRevenue('SQ309', 4000, 'GroupA');
    tracker.recordRevenue('TR124', 2000, 'GroupB');

    expect(tracker.getTotalRevenue()).toBe(14000);
  });
});
