const EventMixin:any = {
  on(event, callback) {
    this.events = this.events || {};
    this.events[event] = this.events[event] || [];
    this.events[event].push(callback);
  },
  trigger(event, data) {
    if (this.events && this.events[event]) {
      this.events[event].forEach((callback) => callback(data));
    }
  },
};

// Sử dụng mixin
const objectWithEvents = {};
Object.assign(objectWithEvents, EventMixin);

(objectWithEvents as any).on("click", (data) => {
  console.log("Click event triggered with data:", data);
});

(objectWithEvents as any).trigger("click", { message: "Hello, mixin event!" });
