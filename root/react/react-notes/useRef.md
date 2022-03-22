# useRef

Allows you to get a reference to a **direct** **DOM element.**

Create a reference to a specific DOM element by...

1. declare the variable like so: `const ref = useRef();`
2. In the DOM element you want to reference, add: `ref={ref}`.
  - `<div ref={ref} className="ui form">`
3. Can access the DOM element by using `ref.current`

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });
 
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);