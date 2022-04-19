# Apply Types to Refs

```ts
import { useState, useRef } from 'react'; // <--- add the useRef hook

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef() // <---------------- create a ref for the input
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} /> 
            // ^ get an error on the ref
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
```

Here we need to add an **interface to the useRef()** 

There is a very long list of interface used to define the type of the ref. Can see them all by hovering over the `HTMLElement` interface and holding command.

```ts
const inputRef = useRef<HTMLInputElement>()

// need to also provide a default type and an option to allow null if no ref is provided.
const inputRef = useRef<HTMLInputElement | null>(null);
```

# Adding a focus effect to an input

We want to have our input focused when the component is rendered. Specifically on the input box to search for a user. 

We use the `useEffect()` hook to add a focus effect to the input.

```ts
  useEffect(() => {
    // type guard
    if(!inputRef.current) return;
    inputRef.current.focus()
  }, [])
  ```
  > Need to add a type guard to the `inputRef` to make sure it is not null

All together:
```ts
import { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    // type guard
    if(!inputRef.current) return;
    inputRef.current.focus()
  }, [])

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
```