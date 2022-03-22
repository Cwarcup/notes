# Bubbling

[Video from udemy React with redux](https://www.udemy.com/course/react-redux/learn/lecture/20787832#content)

  useEffect(() => {
    document.body.addEventListener(
      "click",
      () => {
        setOpen(false);
      },
      { capture: true }
    );
  }, []);