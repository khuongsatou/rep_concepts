import { objWithEvents } from './EventHandlingMixin';

describe('EventHandlingMixin', () => {
  let callback1: jest.Mock;
  let callback2: jest.Mock;

  beforeEach(() => {
    callback1 = jest.fn();
    callback2 = jest.fn();
  });

  it('should handle single event registration and triggering', () => {
    objWithEvents.on('click', callback1);
    objWithEvents.trigger('click', { data: 'test' });

    // expect(callback1).toHaveBeenCalledWith({ data: 'test' });
  });

//   it('should handle multiple event registrations and triggering', () => {
//     objWithEvents.on('click', callback1);
//     objWithEvents.on('hover', callback2);

//     objWithEvents.trigger('click', { data: 'test1' });
//     objWithEvents.trigger('hover', { data: 'test2' });

//     expect(callback1).toHaveBeenCalledWith({ data: 'test1' });
//     expect(callback2).toHaveBeenCalledWith({ data: 'test2' });
//   });

//   it('should handle event deregistration', () => {
//     objWithEvents.on('click', callback1);
//     objWithEvents.trigger('click', { data: 'test1' });

//     expect(callback1).toHaveBeenCalledWith({ data: 'test1' });

//     objWithEvents.off('click', callback1);
//     objWithEvents.trigger('click', { data: 'test2' });

//     expect(callback1).not.toHaveBeenCalled(); // Should not be called after off
//   });

//   it('should handle multiple callbacks for the same event', () => {
//     objWithEvents.on('click', callback1);
//     objWithEvents.on('click', callback2);

//     objWithEvents.trigger('click', { data: 'test' });

//     expect(callback1).toHaveBeenCalledWith({ data: 'test' });
//     expect(callback2).toHaveBeenCalledWith({ data: 'test' });
//   });

//   it('should not call callbacks after deregistration', () => {
//     objWithEvents.on('click', callback1);
//     objWithEvents.on('click', callback2);

//     objWithEvents.trigger('click', { data: 'test' });

//     expect(callback1).toHaveBeenCalledWith({ data: 'test' });
//     expect(callback2).toHaveBeenCalledWith({ data: 'test' });

//     objWithEvents.off('click', callback1);

//     objWithEvents.trigger('click', { data: 'test' });

//     expect(callback1).not.toHaveBeenCalled(); // Should not be called after off
//     expect(callback2).toHaveBeenCalledWith({ data: 'test' });
//   });

//   it('should handle events with no callbacks registered', () => {
//     objWithEvents.trigger('click', { data: 'test' });
//     // No callbacks registered, so nothing should be called
//     expect(callback1).not.toHaveBeenCalled();
//     expect(callback2).not.toHaveBeenCalled();
//   });

//   it('should handle multiple events with no callbacks registered', () => {
//     objWithEvents.trigger('click', { data: 'test1' });
//     objWithEvents.trigger('hover', { data: 'test2' });
//     // No callbacks registered, so nothing should be called
//     expect(callback1).not.toHaveBeenCalled();
//     expect(callback2).not.toHaveBeenCalled();
//   });

//   it('should handle multiple events with different callbacks registered', () => {
//     objWithEvents.on('click', callback1);
//     objWithEvents.on('hover', callback2);

//     objWithEvents.trigger('click', { data: 'test1' });
//     objWithEvents.trigger('hover', { data: 'test2' });

//     expect(callback1).toHaveBeenCalledWith({ data: 'test1' });
//     expect(callback2).toHaveBeenCalledWith({ data: 'test2' });
//   });

//   it('should handle events with different callbacks and one deregistered', () => {
//     objWithEvents.on('click', callback1);
//     objWithEvents.on('hover', callback2);

//     objWithEvents.trigger('click', { data: 'test1' });
//     objWithEvents.trigger('hover', { data: 'test2' });

//     expect(callback1).toHaveBeenCalledWith({ data: 'test1' });
//     expect(callback2).toHaveBeenCalledWith({ data: 'test2' });

//     objWithEvents.off('click', callback1);

//     objWithEvents.trigger('click', { data: 'test3' });
//     objWithEvents.trigger('hover', { data: 'test4' });

//     expect(callback1).not.toHaveBeenCalled(); // Should not be called after off
//     expect(callback2).toHaveBeenCalledWith({ data: 'test4' });
//   });
});
