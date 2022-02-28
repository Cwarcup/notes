//define a new class

class Vehicle {
  constructor(public color: string) {
  }

  protected honk(): void {
    console.log("beep beep!");
  }
}

const vehicle = new Vehicle('orange');

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  drive(): void {
    console.log('vroom!');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk()
  }
}

const car = new Car(4, 'red');
console.log(car);