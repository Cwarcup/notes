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