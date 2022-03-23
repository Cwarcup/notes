# Debounce

Debouncing ensures that a function will not be executed until after a certain amount of time has passed since it was last called. 

React docs on [debounce](https://reactjs.org/docs/faq-functions.html#debounce) - uses `lodash` to resolve issue.

```js
// from 6-widgets in react with redux course 

const Search = () => {
  const [term, setTerm] = useState('Programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  // useEffect for term
  // runs anytime term is changed, when user types into the input
  useEffect(() => {
    const timerId = setTimeout(() => {
      // will only get triggered if user stops typing for 1000ms
      // causes the debouncedTerm to update
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  // useEffect for debouncedTerm
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };
    search();
  }, [debouncedTerm]);
```

## How to add feature

![debounce](react-images/debounce.png)

- Add in second piece of **state** called 'debounceText'.
- `useEffect #1` will only run when the `text` prop changes.
  - triggers whenever a user types into the text input, causing the `setTimeout()` to start.
  - if the user types into the text input again, it will execute the **cleanup function**, canceling the `setTimeout()`.
  - as soon as the text is NOT changed for 500ms, it will cause the `useEffect #2` to start.
    - causing the `debouncedText` to be updated.
- `useEffect #2` will only run when `debouncedText` prop changes. 
  - will make a request to the API with the `debouncedText`.

Example:
```js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// accept language and text as prop
// use state to store language and text
// use effect to fetch translation
// return translation

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');

  // debounce, default value is the text prop
  const [debouncedText, setDebouncedText] = useState(text);

  //useEffect#1
  // useEffect for the text prop
  // will run anytime a user types into the search input
  // timeout will execute setDebouncedText after 500ms
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  //useEffect#2
  // useEffect for debouncedText
  // will run anytime debouncedText is changed
  useEffect(() => {
    const translate = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };
    translate();
  }, [debouncedText, language]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
```


Original Code with no solution for debounce
```js
  // previous single useEffect
  // did NOT resolve debounce issue
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, text]);
```