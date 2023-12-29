import { CustomDate } from './FormatRelative'; // Thay đường dẫn đến file CustomDate của bạn

describe('CustomDate', () => {
  test('formatRelative - 1 giây trước', () => {
    const now = new Date();
    const oneSecondAgo = new CustomDate(new Date(now.getTime() - 1000));
    expect(oneSecondAgo.formatRelative()).toBe('1 giây trước');
  });

  test('formatRelative - 1 phút trước', () => {
    const now = new Date();
    const oneMinuteAgo = new CustomDate(new Date(now.getTime() - 60000));
    expect(oneMinuteAgo.formatRelative()).toBe('1 phút trước');
  });

  test('formatRelative - 1 giờ trước', () => {
    const now = new Date();
    const oneHourAgo = new CustomDate(new Date(now.getTime() - 3600000));
    expect(oneHourAgo.formatRelative()).toBe('1 giờ trước');
  });

  test('formatRelative - 1 ngày trước', () => {
    const now = new Date();
    const oneDayAgo = new CustomDate(new Date(now.getTime() - 86400000));
    expect(oneDayAgo.formatRelative()).toBe('1 ngày trước');
  });

  test('formatRelative - 1 năm trước', () => {
    const now = new Date();
    const oneYearAgo = new CustomDate(new Date(now.getTime() - 31536000000));
    expect(oneYearAgo.formatRelative()).toBe('1 năm trước');
  });
});
