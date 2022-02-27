const profile = {
  name: 'Alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void { 
    this.age = age;
  }
};

//destructuring setAge
const { age }: {age: number} = profile;

//destructuring lat and lng
const { coords: { lat, lng } }: { coords: { lat: number; lng: number}} = profile;
