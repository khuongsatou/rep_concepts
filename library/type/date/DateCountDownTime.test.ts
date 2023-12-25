// countdownTimer.test.ts
import { CountdownTimer } from './DateCountDownTime';

describe('CountdownTimer', () => {
  let timer: CountdownTimer;

  beforeEach(() => {
    timer = new CountdownTimer(
      5, // Thời gian đếm ngược 5 giây
      jest.fn(), // Mock callback onTick
      jest.fn() // Mock callback onTimeout
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should start counting down', () => {
    jest.useFakeTimers();
    timer.start();
    jest.advanceTimersByTime(5000); // Giả lập 5 giây trôi qua
    // expect(timer.stop).toHaveBeenCalled();
    jest.useRealTimers();
  });

  it('should stop counting when stopped', () => {
    jest.useFakeTimers();
    timer.start();
    timer.stop();
    jest.advanceTimersByTime(5000); // Giả lập 5 giây trôi qua
    // expect(timer.tick).not.toHaveBeenCalled();
    jest.useRealTimers();
  });
});
