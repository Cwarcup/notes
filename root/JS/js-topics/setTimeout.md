# setTimeout

```js
    setTimeout(() => {
      if (term) {
        search();
      }
    }, 500);
```

How to cancel a timer:

```js
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    // out timeout after 500ms
    const timeoutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 500);

  // cleanup function gets invoked
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);
  ```