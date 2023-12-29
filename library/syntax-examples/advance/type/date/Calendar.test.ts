// Calendar.test.ts

import {Calendar} from './Calendar';

describe('Calendar', () => {
  let calendar: Calendar;

  beforeEach(() => {
    calendar = new Calendar();
  });

  it('should correctly identify a leap year', () => {
    expect(calendar.isLeapYear(2020)).toBe(true);
    expect(calendar.isLeapYear(2024)).toBe(true);
    expect(calendar.isLeapYear(2100)).toBe(false);
    expect(calendar.isLeapYear(2000)).toBe(true);
  });

  it('should return the correct month name', () => {
    expect(calendar.getMonthName(0)).toBe('January');
    expect(calendar.getMonthName(5)).toBe('June');
    expect(calendar.getMonthName(11)).toBe('December');
  });
});
