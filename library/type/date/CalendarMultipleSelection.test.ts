// __tests__/Calendar.test.ts

import { Calendar } from './CalendarMultipleSelection';

describe('Calendar', () => {
  let calendar: Calendar;

  beforeEach(() => {
    calendar = new Calendar();
  });

  it('should select and retrieve dates', () => {
    calendar.selectDate({ year: 2023, month: 11, day: 28 });
    calendar.selectDate({ year: 2023, month: 11, day: 31 });

    const selectedDates = calendar.getSelectedDates();
    expect(selectedDates).toHaveLength(2);
    expect(selectedDates).toContainEqual({ year: 2023, month: 11, day: 28 });
    expect(selectedDates).toContainEqual({ year: 2023, month: 11, day: 31 });
  });

  it('should get dates in range', () => {
    calendar.selectDate({ year: 2023, month: 11, day: 28 });
    calendar.selectDate({ year: 2023, month: 11, day: 31 });

    const startDate = { year: 2023, month: 11, day: 28 };
    const endDate = { year: 2023, month: 11, day: 31 };

    const datesInRange = calendar.getDatesInRange(startDate, endDate);
    expect(datesInRange).toHaveLength(4);
    expect(datesInRange).toContainEqual({ year: 2023, month: 11, day: 28 });
    expect(datesInRange).toContainEqual({ year: 2023, month: 11, day: 29 });
    expect(datesInRange).toContainEqual({ year: 2023, month: 11, day: 30 });
    expect(datesInRange).toContainEqual({ year: 2023, month: 11, day: 31 });
  });
});
