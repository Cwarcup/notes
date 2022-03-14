# Heroku 

- [Dev Center](https://devcenter.heroku.com/)
- [Deploying](https://devcenter.heroku.com/articles/git)

Logging in to Heroku with CLI
```
heroku login
```

# Deploying Nodejs on Heroku

In the root file of our project...
```
heroku create < name of project>
```

Need to tell Heroku what to do what it gets our code:
1. Update `package.json` script.
```json

{
  //...
  "scripts": {
    "start": "node app.js" // of where ever your main js file is located.
  //...
}
```
Can actually run our project by using `npm run start` in terminal now. This is because we have specified the run `node app.js` when we **start** the script.

2. Change `app.js`. We are currently using port 3000, however, heroku will be running on a different port. `process.env.PORT` is provided by Heroku.
```js
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

3. Need to change any URLs running in your client side javascript. 
For example:
```js
weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const locationSearch = search.value;

  const weatherURl = `http://localhost:3000/weather?address=${locationSearch}`;

  topPara.textContent = 'Loading...';

  fetch(weatherURl).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        topPara.innerHTML = data.error;
        bottomPara.innerHTML = '';
      } else {
        topPara.innerHTML = data.location;
        bottomPara.innerHTML = data.forecast;
      }
    });
  });
});
```
> Here we are using the url to query our search results. However, on Heroku this will change.

We want to remove the domain completely. If we are on **local host**, we want to run from local host. If we are on Heroku app URl, we want to make the request to the Heroku URL.

Change it to:
```
const weatherURl = `/weather?address=${locationSearch}`
```
> Remove the `http://localhost:3000` portion.
