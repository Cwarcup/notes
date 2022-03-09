@classDecorator
class Boat {
  @testDecorator
  color: string = 'red'

  @testDecorator
  get formattedColor(): string {
      return `This color of this boat is ${this.color}`
  }

  @LogError("oh no! Boat is going down!")
  pilot(@parameterDecorator speed: string, @parameterDecorator generateWake: boolean): void {  // add decorator before the parameter we are targeting.
    if (speed === 'fast') {
      console.log('swish, such speed!');
    } else {
      console.log('nothing');
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

    // create our parameter decorator.
function parameterDecorator(target: any, key: string, index: number): void {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log(key)
}
function LogError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
  
    desc.value = function () {
      try {
        method();
      } catch (err) {
        console.log(errorMessage);
      }
    }
  }
}

