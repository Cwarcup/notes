interface Reportable {
  summary(): string;
}
//new object
const drink = {
  color: 'brown', 
  carbonated: true, 
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name is ${this.name}`
  }
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
}

printSummary(oldCivic)
printSummary(drink)