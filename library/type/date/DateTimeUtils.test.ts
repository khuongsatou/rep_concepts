// DateTimeUtils.test.ts
import {DateTimeUtils} from './DateTimeUtils';

describe('DateTimeUtils', () => {
  // Test chuyển đổi từ Date sang chuỗi thời gian
  test('dateToString converts Date to string', () => {
    const currentDate = new Date();
    const result = DateTimeUtils.dateToString(currentDate);
    expect(result).toBeDefined();
    expect(typeof result).toBe('string');
  });

  // Test chuyển đổi từ chuỗi thời gian sang Date
  test('stringToDate converts string to Date', () => {
    const dateTimeString = '2023-12-31T23:59:59.999Z';
    const result = DateTimeUtils.stringToDate(dateTimeString);
    expect(result).toBeDefined();
    expect(result instanceof Date).toBe(true);
  });

  // Test định dạng thời gian
  test('formatDateTime formats Date correctly', () => {
    const currentDate = new Date();
    const result = DateTimeUtils.formatDateTime(currentDate);
    const expectedFormat = /\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2}/;
    expect(result).toBeDefined();
    expect(expectedFormat.test(result)).toBe(true);
  });
});
