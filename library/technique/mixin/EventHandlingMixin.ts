interface EventHandling {
  events: { [key: string]: (() => void)[] };
  on(event: string, callback: () => void): void;
  off(event: string, callback: () => void): void;
}

const EventHandlingMixin: EventHandling = {
    events: {},
    on(event, callback) {
        this.events[event] = this.events[event] || [];
        this.events[event].push(callback);
    },

    off(event, callback) {
        if (this.events && this.events[event]) {
            this.events[event] = this.events[event].filter((cb) => cb !== callback);
        }
    },
  
};

// Sử dụng mixin
class EventObject implements EventHandling {
  trigger(arg0: string, arg1: { data: string; }) {
    //   throw new Error('Method not implemented.');
  }
  events: { [key: string]: (() => void)[] } = {};

  on = EventHandlingMixin.on;
  off = EventHandlingMixin.off;

  // Other class members...
}

export const objWithEvents = new EventObject();
objWithEvents.on("click", () => {
  console.log("Click event triggered.");
});
objWithEvents.off("click", () => {
  console.log("Click event handler removed.");
});
