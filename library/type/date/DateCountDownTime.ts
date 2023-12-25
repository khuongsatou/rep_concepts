// Đếm ngược thời gian.
class CountdownTimer {
    private countdown: number;
    private intervalId: NodeJS.Timeout | null;
    private onTickCallback: (remainingTime: number) => void;
    private onTimeoutCallback: () => void;
  
    constructor(countdown: number, onTick: (remainingTime: number) => void, onTimeout: () => void) {
      this.countdown = countdown;
      this.intervalId = null;
      this.onTickCallback = onTick;
      this.onTimeoutCallback = onTimeout;
    }
  
    tick() {
      this.countdown -= 1;
      this.onTickCallback(this.countdown);
  
      if (this.countdown <= 0) {
        this.stop();
        this.onTimeoutCallback();
      }
    }
  
    start() {
      if (!this.intervalId) {
        this.intervalId = setInterval(this.tick.bind(this), 1000);
      }
    }
  
    stop() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }
  }
  
  export { CountdownTimer };
  