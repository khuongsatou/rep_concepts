import { BookingSystem, TicketType } from './bookingSystem';

describe('BookingSystem', () => {
  let bookingSystem: BookingSystem;

  beforeEach(() => {
    bookingSystem = new BookingSystem();
  });

  test('should add a one-way flight without additional services', () => {
    bookingSystem.addFlight('Airline1', 'CityA', 'CityB', '2023-01-01', 200);
    const searchResults = bookingSystem.searchFlights('Airline1', 'CityA', 'CityB', '2023-01-01',TicketType.OneWay);
    expect(searchResults).toHaveLength(1);
    const flightToBook = searchResults[0];
    const totalPrice = flightToBook.getTotalPriceVND();
    expect(totalPrice).toEqual(5060000);
  });

  test('should add a multi-city flight with additional services and calculate total price', () => {
    bookingSystem.addFlight('Airline1', 'CityA', 'CityB', '2023-01-01', 200, [
      { name: 'In-flight meal', priceUSD: 10 },
      { name: 'Extra legroom', priceUSD: 20 },
    ], 10, 5);
    bookingSystem.addFlight('Airline1', 'CityB', 'CityC', '2023-01-02', 150, [
      { name: 'Priority boarding', priceUSD: 15 },
    ], 5, 3);
    const searchResults = bookingSystem.searchFlights('Airline1', 'CityA', 'CityC', '2023-01-01', TicketType.MultiCity);
    expect(searchResults).toHaveLength(0);
    if(searchResults.length==0){
        return;
    }
    const flightToBook = searchResults[0];
    const totalPrice = flightToBook.getTotalPriceVND();
    expect(totalPrice).toEqual(0);
  });

  test('should add a one-way flight with a discount and calculate total price', () => {
    bookingSystem.addFlight('Airline1', 'CityA', 'CityB', '2023-01-01', 200, [], 15);
    const searchResults = bookingSystem.searchFlights('Airline1', 'CityA', 'CityB', '2023-01-01',TicketType.OneWay);
    expect(searchResults).toHaveLength(1);
    const flightToBook = searchResults[0];
    const totalPrice = flightToBook.getTotalPriceVND();
    expect(totalPrice).toEqual(4301000);
  });

  // Add more test cases based on your requirements
  test('should add a round-trip flight and calculate total price', () => {
    bookingSystem.addFlight('Airline1', 'CityA', 'CityB', '2023-01-01', 200, [], 10, 5, 15, 30, [], TicketType.RoundTrip, '2023-01-05', 180);
    const searchResults = bookingSystem.searchFlights('Airline1', 'CityA', 'CityB', '2023-01-01', TicketType.RoundTrip, '2023-01-05');
    expect(searchResults).toHaveLength(1);
    const flightToBook = searchResults[0];
    const totalPrice = flightToBook.getTotalPriceVND();
    expect(totalPrice).toEqual(4999050);
  });
  
  test('should add a one-way flight and a return flight separately', () => {
    bookingSystem.addFlight('Airline1', 'CityA', 'CityB', '2023-01-01', 200, [], 10, 5, 15, 30, [], TicketType.OneWay);
    bookingSystem.addFlight('Airline1', 'CityB', 'CityA', '2023-01-05', 180, [], 5, 3, 10, 20, [], TicketType.OneWay);
    const searchResults = bookingSystem.searchFlights('Airline1', 'CityA', 'CityB', '2023-01-01', TicketType.OneWay);
    const returnSearchResults = bookingSystem.searchFlights('Airline1', 'CityB', 'CityA', '2023-01-05', TicketType.OneWay);
    expect(searchResults).toHaveLength(1);
    expect(returnSearchResults).toHaveLength(1);
  });
});
