// Updated ReservationManager.ts

// Flight.ts

class Flight {
    flightNumber: string;
    availableSeats: number;
  
    constructor(flightNumber: string, availableSeats: number) {
      this.flightNumber = flightNumber;
      this.availableSeats = availableSeats;
    }
  
    // Phương thức giảm số lượng ghế còn trống khi đặt vé
    bookSeats(numSeats: number): boolean {
      if (this.availableSeats >= numSeats) {
        this.availableSeats -= numSeats;
        return true;
      } else {
        return false;
      }
    }
  
    // Phương thức tăng số lượng ghế còn trống khi hủy vé
    cancelBooking(numSeats: number): void {
      this.availableSeats += numSeats;
    }
  }
  
  export { Flight };
  

class ReservationManager {
  flights: Map<string, Flight>;
  holdTimers: Map<string, NodeJS.Timeout>; // Map để lưu đồng hồ đếm cho từng chuyến bay

  constructor() {
    this.flights = new Map();
    this.holdTimers = new Map();
  }

  addFlight(flightNumber: string, availableSeats: number): void {
    const flight = new Flight(flightNumber, availableSeats);
    this.flights.set(flightNumber, flight);
  }

  bookFlight(flightNumber: string, numSeats: number): boolean {
    const flight = this.flights.get(flightNumber);

    if (flight && flight.availableSeats >= numSeats) {
      flight.availableSeats -= numSeats;
      console.log(`Booking successful for ${numSeats} seats on flight ${flightNumber}.`);
      return true;
    } else {
      console.log(`Booking failed for ${numSeats} seats on flight ${flightNumber}.`);
      return false;
    }
  }

  holdReservation(flightNumber: string, numSeats: number, holdTimeInSeconds: number = 60): boolean {
    const flight = this.flights.get(flightNumber);

    if (flight && flight.availableSeats >= numSeats) {
      console.log(`Reservation on hold for ${numSeats} seats on flight ${flightNumber}.`);

      // Tạo đồng hồ đếm và lưu vào Map
      const holdTimer = setTimeout(() => {
        this.cancelHoldReservation(flightNumber, numSeats);
      }, holdTimeInSeconds * 1000);
      this.holdTimers.set(flightNumber, holdTimer);

      return true;
    } else {
      console.log(`Reservation hold failed for ${numSeats} seats on flight ${flightNumber}.`);
      return false;
    }
  }

  // Hủy giữ chỗ và xóa đồng hồ đếm từ Map
   cancelHoldReservation(flightNumber: string, numSeats: number): void {
    console.log(`Hold reservation canceled for ${numSeats} seats on flight ${flightNumber}.`);
    this.holdTimers.delete(flightNumber);
  }
}

export { ReservationManager };
