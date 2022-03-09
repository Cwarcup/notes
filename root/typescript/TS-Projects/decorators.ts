class Boat {
  color: string = 'red'

  get formattedColor(): string {
      return `This color of this boat is ${this.color}`
  }

  @testDecorator
  pilot(): void {
    throw new Error();
      console.log('swish')
  }
}

function testDecorator(target: any, key: string, desc: PropertyDescriptor): void {
  console.log('Target:', target)
  console.log('Key:', key )
}