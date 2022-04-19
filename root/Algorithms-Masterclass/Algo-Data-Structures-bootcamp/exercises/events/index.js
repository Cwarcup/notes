// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    if (this.events[eventName]) {
      // adding the callback to the eventsName array
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback]; // first time seeing the event
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      // cb = callback
      // if there is an event name, iterate over the array and call the callback
      for (let cb of this.events[eventName]) {
        cb();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName];
  }
}

// const events = new Events();

// events.on('click', () => {
//   console.log('Test');
// });
// events.on('click', () => {
//   console.log('Another Test');
// });
// events.trigger('click');
// events.off('click');

module.exports = Events;

