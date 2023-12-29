interface NotificationMixin {
  notify(message: string): void;
  log(message: string): void;
}

const NotificationMixin: NotificationMixin = {
  notify(message) {
    alert(message);
  },
  log(message) {
    console.log(message);
  },
};

// Sử dụng mixin
class NotifiableObject implements NotificationMixin {
  notify = NotificationMixin.notify;
  log = NotificationMixin.log;

  // Other class members...
}

const myObjectMixin = new NotifiableObject();
myObjectMixin.notify("Hello, mixin notification!");
myObjectMixin.log("Logged message.");
