# Eventing

Directions:
Create an 'eventing' library out of the Events class.  The Events class should have methods 'on', 'trigger', and 'off'.
```js
class Events {
  // Register an event handler
  on(eventName, callback) {}

  // Trigger all callbacks associated with a given eventName
  trigger(eventName) {}

  // Remove all event handlers associated with the given eventName
  off(eventName) {}
}
```

```js
    $('button').on('click', () => {
      // triggers an event when the button is clicked, callback function is executed
      console.log('hello');
    });
        $('button').on('click', () => {
      // triggers an event when the button is clicked, callback function is executed
      console.log('there');
    });

    $('button').trigger('click'); // can also be used to manually trigger events

    $('button').off('click'); // remove event listener
    // results in the callback function not being executed
    // however the manual `trigger` event still works, resulting in BOTH console.logs
```

An eventing library should be able to...
- register an event with a given event name, such as 'click'
- register multiple different event handlers with one event handlers name
- trigger an event manually by calling `trigger`
- disable an event handler by calling `off`

## Tips for this exercise

Whenever we call the `on` method it takes in an `eventName` and a `callback` function. We need a way of relating the event name to the callback function. Can be done by implementing a constructor that keeps track of the event name and callback function.

Make an object:
- keys are event names ('click', 'mouseover', 'hover' etc.)
- values are arrays of callback functions

```js
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

// no comments
class Events {
  constructor() {
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      for (let cb of this.events[eventName]) {
        cb();
      }
    }
  }

  // Remove all event handlers associate with the given eventName
  off(eventName) {
    delete this.events[eventName];
  }
}

// test it out
const events = new Events();

events.on('click', () => {
  console.log('Test');
});
events.on('click', () => {
  console.log('Another Test');
});
events.trigger('click');
events.off('click');
```