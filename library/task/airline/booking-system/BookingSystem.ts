export enum TicketType {
    OneWay = 'One Way',
    RoundTrip = 'Round Trip',
    MultiCity = 'Multi City',
  }
  
  class Service {
    constructor(public name: string, public priceVND: number) {}
  }
  
  class Luggage {
    constructor(public weight: number, public priceVND: number) {}
  }
  
  class Seat {
    constructor(public classType: string, public seatNumber: string, public priceVND: number) {}
  }
  
  class Flight {
    constructor(
      public airline: string,
      public departure: string,
      public destination: string,
      public date: string,
      public basePriceVND: number,
      public services: Service[] = [],
      public discountPercentage: number = 0,
      public taxPercentage: number = 10, // Assume a default tax rate of 10%
      public luggage: Luggage | null = null,
      public seats: Seat[] = [],
      public ticketType: TicketType = TicketType.OneWay,
      public returnDate: string | null = null, // Thêm trường ngày chuyến về (null nếu là chuyến đi một chiều)
      public returnBasePriceVND: number = 0, // Thêm giá cơ bản cho chuyến về
    ) {}
  
    getTotalPriceVND(): number {
      // Tính tổng các dịch vụ
      const servicesPrice = this.services.reduce((total, service) => total + service.priceVND, 0);
      // Tính giá hành lý
      const luggagePrice = this.luggage ? this.luggage.priceVND : 0;
      // Tính tổng các chỗ ngồi
      const seatsPrice = this.seats.reduce((total, seat) => total + seat.priceVND, 0);
      // Tính tổng các khuyến mãi và tổng hợp các giá khác
      const discountedPrice = (this.basePriceVND + servicesPrice + luggagePrice + seatsPrice) * (1 - this.discountPercentage / 100);
      const totalPriceBeforeTax = Math.round(discountedPrice);
      // Thêm thuế
      const taxAmount = totalPriceBeforeTax * (this.taxPercentage / 100);
      // Tổng kết
      const totalPriceWithTax = totalPriceBeforeTax + taxAmount;
      return Math.round(totalPriceWithTax);
    }
  }
  
export  class BookingSystem {
    private flights: Flight[] = [];
  
    addFlight(
      airline: string,
      departure: string,
      destination: string,
      date: string,
      basePriceUSD: number,
      services: { name: string; priceUSD: number }[] = [],
      discountPercentage: number = 0,
      taxPercentage: number = 10,
      luggageWeight: number | null = null,
      luggagePriceUSD: number | null = null,
      seats: { classType: string; seatNumber: string; priceUSD: number }[] = [],
      ticketType: TicketType = TicketType.OneWay,
      returnDate: string | null = null,
      returnBasePriceUSD: number = 0
    ): void {
      // Assume an exchange rate of 23000 VND to 1 USD
      const basePriceVND = basePriceUSD * 23000;
      const returnBasePriceVND = returnBasePriceUSD * 23000;
      const serviceObjects = services.map((service) => new Service(service.name, service.priceUSD * 23000));
      const luggage =
        luggageWeight !== null && luggagePriceUSD !== null ? new Luggage(luggageWeight, luggagePriceUSD * 23000) : null;
      const seatObjects = seats.map((seat) => new Seat(seat.classType, seat.seatNumber, seat.priceUSD * 23000));
      const flight = new Flight(
        airline,
        departure,
        destination,
        date,
        basePriceVND,
        serviceObjects,
        discountPercentage,
        taxPercentage,
        luggage,
        seatObjects,
        ticketType
      );

      flight.returnDate = returnDate;
        flight.returnBasePriceVND = returnBasePriceVND;
      this.flights.push(flight);
    }
  
    searchFlights(airline: string, departure: string, destination: string, date: string, ticketType: TicketType, returnDate: string | null = null): Flight[] {
      // Perform search logic based on user input, including the ticket type
      const filteredFlights = this.flights.filter(
        (flight) =>
          flight.airline === airline &&
          flight.departure === departure &&
          flight.destination === destination &&
          flight.date === date &&
          flight.ticketType === ticketType&&
          (flight.returnDate === returnDate || ticketType !== TicketType.RoundTrip)
      );
      return filteredFlights;
    }
  
    bookFlight(flight: Flight, passengerName: string): string {
      // Perform booking logic and return confirmation message
      const servicesString =
        flight.services.length > 0
          ? `. Services: ${flight.services.map((service) => `${service.name} ($${service.priceVND} VND)`).join(', ')}`
          : '';
      const discountString = flight.discountPercentage > 0 ? ` Discount: ${flight.discountPercentage}%` : '';
      const taxString = flight.taxPercentage > 0 ? ` Tax: ${flight.taxPercentage}%` : '';
      const luggageString =
        flight.luggage ? `. Luggage: ${flight.luggage.weight} kg ($${flight.luggage.priceVND} VND)` : '. No additional luggage.';
      const seatsString =
        flight.seats.length > 0
          ? `. Seats: ${flight.seats.map((seat) => `${seat.classType} ${seat.seatNumber} ($${seat.priceVND} VND)`).join(', ')}`
          : '';
      const ticketTypeString = ` Ticket Type: ${flight.ticketType}`;
      const confirmationMessage = `Booking confirmed for ${passengerName} on ${flight.airline} flight from ${flight.departure} to ${flight.destination} on ${flight.date}.${ticketTypeString} Total cost: ${flight.getTotalPriceVND()} VND${servicesString}${discountString}${taxString}${luggageString}${seatsString}.`;
      return confirmationMessage;
    }
  }
  
  // Example usage:
  const bookingSystem = new BookingSystem();
  
  bookingSystem.addFlight("Airline1", "CityA", "CityB", "2023-01-01", 200, [
    { name: "In-flight meal", priceUSD: 10 },
    { name: "Extra legroom", priceUSD: 20 },
  ], 10, 5, 15, 30, [], TicketType.RoundTrip); // 10% discount, 5% tax, 15kg luggage for $30, round trip
  bookingSystem.addFlight("Airline2", "CityA", "CityC", "2023-01-02", 250, [{ name: "Priority boarding", priceUSD: 15 }]);
  
  const searchResults = bookingSystem.searchFlights("Airline1", "CityA", "CityB", "2023-01-01", TicketType.RoundTrip);
  console.log("Search Results:", searchResults);
  
  const flightToBook = searchResults[0]; // Assuming there's at least one search result
  const bookingConfirmation = bookingSystem.bookFlight(flightToBook, "John Doe");
  console.log(bookingConfirmation);
  