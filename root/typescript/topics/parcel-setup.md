# Parcel Setup

Install
```
npm install -g parcel-bundler
```

Make new `index.html` file:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <script src="./src/index.ts"></script>
  </body>
</html>
```

Create `src` folder and inside add `index.ts`. Add `console.log('Hello there');` in the ts file to test it out. 

In terminal, run:
```
parcel index.html
```
> This will start a server running on http://localhost:1234.
