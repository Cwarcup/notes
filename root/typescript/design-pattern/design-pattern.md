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
  - create basic html doc with a script
```html
<html>
  <body>
    <script src="./src/index.ts"></script>
  </body>
</html>
```

- create folder called "src" and inside of this folder, "index.ts"
- inside your project folder, run `parcel index.html`
  - this will run a server at 'http://localhost:1234'

---

In the 'src' folder...
- will create classes `Map.ts`, `User.ts` and `Company.ts`.
  - by convention, any **class** we are going to export will be **capitalized**
- then get all these classes to communicate with our `index.ts` file by importing them.
  - not capitalized because we are not exporting any classes. 

# Faker Installation

In the upcoming lecture, we will be installing the Faker library. You may notice that the Github repository for Faker is empty or is displaying some confusing messaging. The library currently no longer exists and is not being maintained. However, as of today, it [still exists in the NPM registry](https://www.npmjs.com/package/faker/v/5.5.3) and we are able to install and use it in our projects by specifying the last known good version.

Please do the following prior to starting the next lecture:

`npm install faker@5.5.3`

`npm install @types/faker@5.5.9`

**A community fork of Faker was made to save the project and they are actively working on some fixes and a fresh v6 release:**

https://github.com/faker-js/faker

If you wish to use this library instead, you can install it by running:

`npm install @faker-js/faker`

You'll then need to update your imports:

`import faker from '@faker-js/faker';`

As of their v6 release, TS support is now native and **does not require installing the @types declarations**.