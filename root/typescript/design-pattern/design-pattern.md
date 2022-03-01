# Design Pattern

Install typescript
`$ npm install typescript -g `  
 
Go to project's root folder
`$ cd project_root` 

Create tsconfig.json in project's root folder
`$ tsc --init`
---
- Will be creating our first TS project
  - Will randomly generate...
    - a user (name, last name, etc,)
    - a company (name, location)
  - then use the company location to be displayed on a map

## Create new TS file for Web

- Install [Parcel](https://www.npmjs.com/package/parcel) 
  `npm install --save-dev parcel`
- Create a new `index.html`.
  - create basic html doc with a script.
  - add `type="module"` to the script tag.
```html
<html>
  <body>
    <script type="module" src="./src/index.ts"></script>
  </body>
</html>
```

- create folder called "src" and inside of this folder, "index.ts"
- inside your project folder, run `npx parcel index.html`
  - this will run a server at 'http://localhost:1234'

---

In the 'src' folder...
- will create classes `Map.ts`, `User.ts` and `Company.ts`.
  - by convention, any **class** we are going to export will be **capitalized**
- then get all these classes to communicate with our `index.ts` file by importing them.
  - not capitalized because we are not exporting any classes. 

---

# Faker Installation

In the upcoming lecture, we will be installing the Faker library. You may notice that the Github repository for Faker is empty or is displaying some confusing messaging. The library currently no longer exists and is not being maintained. However, as of today, it [still exists in the NPM registry](https://www.npmjs.com/package/faker/v/5.5.3) and we are able to install and use it in our projects by specifying the last known good version.

[Faker-js](https://github.com/faker-js/faker)

If you wish to use this library instead, you can install it by running:

`npm install @faker-js/faker --save-dev`

You'll then need to update your imports: Place at the top of your TS project file.

`import faker from '@faker-js/faker';`

As of their v6 release, TS support is now native and **does not require installing the @types declarations**.

[Faker-js API](https://github.com/faker-js/faker#api)

**A community fork of Faker was made to save the project and they are actively working on some fixes and a fresh v6 release:**
 
`npm install faker@5.5.3`

`npm install @types/faker@5.5.9`


#### Type Definition Files
- may get a warning "could not find a declaration file for module "___"."
- act as an adapter between JS libraries and TypeScript code. 
- some JS libraries includes a type definition file for us. 
  - if it is not included for us, we must manually add it.

[Type Search](https://www.typescriptlang.org/dt/search?search=)

## Using Type Definitions

You can hover over the package you included in your TS project, and while holding **command** and click on the package name, you still be able to view the type definitions file. 
`import faker from '@faker-js/faker';`
> hover and command-click "faker".

## Export Statements
- In order to make a class available in another file (such as index.ts) you must **export it** by adding the `export` keyword in front of the class.
```typescript
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
}
```
- must also **import** this class into the desired document. 
  - in `{}` add the class name.
  - add the file path to this class.
- We do this so we can safely export multiple classes from the file.
- Can import multiple classes from the same file by adding the name in `{}`.
```typescript
import { User, red } from './User';
```

> can choose to also use the **default** keyword. But these default statements are not used often. 
> No `{}` needed.
```typescript
// srv file
export default 'red';

//index.ts file
import red from './User';
```