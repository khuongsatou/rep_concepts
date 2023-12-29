const UIComponentMixin = {
  render() {
    console.log("Rendering UI component");
  },
  show() {
    console.log("Showing UI component");
  },
};

// Sử dụng mixin
class Button {
  // ...()
}

Object.assign(Button.prototype, UIComponentMixin);

const myButton = new Button();
(myButton as any).render();
(myButton as any).show();
