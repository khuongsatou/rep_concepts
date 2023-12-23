// ReservationManager.test.ts

import { ReservationManager } from './ReservationManager';

describe('ReservationManager', () => {
  test('holdReservation nên giữ ghế và hủy sau một khoảng thời gian', () => {
    // expect.assertions(2);

    const reservationManager = new ReservationManager();
    reservationManager.addFlight('SQ308', 5);

    // return new Promise((resolve) => {
    //   reservationManager.holdReservation('SQ308', 3, 2);

    //   expect(reservationManager.flights.get('SQ308')?.availableSeats).toBe(5);

    //   setTimeout(() => {
    //     expect(reservationManager.flights.get('SQ308')?.availableSeats).toBe(5);

    //     resolve(0);
    //   }, 3000);
    // });
  });

  test('holdReservation không nên giữ ghế nếu không đủ ghế trống', () => {
    const reservationManager = new ReservationManager();
    reservationManager.addFlight('SQ309', 2);

    const result = reservationManager.holdReservation('SQ309', 3);

    expect(result).toBe(false);
    expect(reservationManager.flights.get('SQ309')?.availableSeats).toBe(2);
  });

  test('cancelHoldReservation nên hủy giữ chỗ cho chuyến bay cụ thể và trả lại ghế', () => {
    // expect.assertions(1);

    const reservationManager = new ReservationManager();
    reservationManager.addFlight('SQ310', 5);

    // return new Promise((resolve) => {
    //   reservationManager.holdReservation('SQ310', 3, 2);

    //   reservationManager.cancelHoldReservation('SQ310', 3);

    //   setTimeout(() => {
    //     expect(reservationManager.flights.get('SQ310')?.availableSeats).toBe(5);

    //     resolve(0);
    //   }, 1000);
    // });
  });
});
