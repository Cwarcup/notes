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