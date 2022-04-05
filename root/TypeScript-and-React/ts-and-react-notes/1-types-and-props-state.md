# Types around Props and State

Need to define an **interface** of the props the component will receive.

> Remember, an interface forces your class to have the same properties as the interface.

We use the interface to define what props a component will receive.
- Is the parent providing the correct props to the child?
- Are we using the correctly named props in the child?
  
```ts
// child component
interface ChildProps {      // <----- interface
  color: string;
}

export const Child = ({color}: ChildProps) => {    // <----- implement interface on the prop
  return <div> {color}</div>
}

////////////////////////////////////////////////////////////

// parent component
import { Child } from './child';

const Parent = () => {
  return (
    <div>
      <Child color={'some string'}/>   // <---- need to pass in a string, as we defined in the childs interface
    </div>
  );
};

export default Parent;
```

## Explicit Component Type Annotations

```ts
interface ChildProps {
  color: string;
}

// traditional way, but ts does not know anything about the type of Child
export const Child = ({color}: ChildProps) => {
  return <div> {color}</div>
}

// better way!
export const ChildAsFunctionalComponent: React.FC<ChildProps> = ({color}) => {
  return <div> {color}</div>
}
```

The `React.FC<ChildProps>` is much better because:
- the component will be a React component.
- the component might have properties assigned to it like `propTypes` and `contextTypes`. 
- the component will receive props of a type that matches the interface.

## Annotations with Children

Maybe we want to communicate additional props such as a callback function to the child.

```ts
interface ChildProps {
  color: string;
  onClick: () => void; 

}

export const Child = ({color, onClick}: ChildProps) => {
  
  return <div> {color}
  <button onClick={onClick}>Click me!</button>
  </div>
}

export const ChildAsFunctionalComponent: React.FC<ChildProps> = ({color, onClick}) => {
  return <div> {color}
  <button onClick={onClick}>Click me!</button>
  </div>
}

// parent component now must pas the onClick prop to the child
import { Child } from './child';

const Parent = () => {
  return (
    <div>
      <Child color={'some string'} onClick={() => console.log('click')}/>
    </div>
  );
};
```
export default Parent;

---

When using a child as a functional component, we also get access to the `children` prop.

This gets passed as the information between the opening and closing tag components. 

```tsx
const Parent = () => {
  return (
    <div>
      <ChildAsFunctionalComponent color={'some string'} onClick={() => console.log('click')}>
        text as a children prop
      </ChildAsFunctionalComponent>
    </div>
  );
};


// child as a functional component
interface ChildProps {
  color: string;
  onClick: () => void; 
}


export const ChildAsFunctionalComponent: React.FC<ChildProps> = ({color, onClick, children}) => {
  return <div> {color}
  <button onClick={onClick}>Click me!</button>
  console.log(children);
  </div>
}
```

# State with TypeScript

Still need to import `{ useState } from 'react';`

```tsx
import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');

  return (
  <div> 
    <h3> Guest List</h3>
    <input value={name} onChange={e => setName(e.target.value)}/>
    <button>Add Guest</button>
  </div>
  )
}

export default GuestList;
```

## Type inference with state

Whenever you define a new state using the `useState` hook, you provide a default value for that piece of state (e.g., `useState('')`). TypeScript infers the type of the state variable. For this example, the type of `name` is `string`. 

However, in the case of `guests`, TypesScript infers the type of the state variable as 'never[]`. This is not what we want. 

Example:
```tsx
import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState(''); // <-- inferred type of name is string
  const [guests, setGuests] = useState([]);   // <--- TS infers the type as `never[]`. NOT GOOD. 

  const onClick = () => {
    setName('');
    setGuests([...guests, name]);  // <--- get an error here
  }

  return (
  <div> 
    <h3> Guest List</h3>
    <input value={name} onChange={e => setName(e.target.value)}/>
    <button>Add Guest</button>
  </div>
  )
}

export default GuestList;
```

We can tell TypeScript that the type of `guests` is `string[]` by adding a type annotation.

```tsx
const [guests, setGuests] = useState<string[]>([]);
```
## More on State with TS

### Type unions with state

```tsx
import { useState } from "react";

const users = [
  { name: 'Jill', age: 20 },
  { name: 'Curtis', age: 25 },
  { name: 'Gilly', age: 45 },

]

export default function UserSearch() {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string, age: number} | undefined >();  // <-- type union. 
  // can tell ts that the type of user is either a user object or undefined.

  const onClick = () => {
    setName('');
    const foundUser = users.find(user => user.name === name);
    setUser(foundUser)
  }

  return (
    <div>
      User Search
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  )
}
```

# Types around Event Handlers

If we did this: 
```tsx
<input onChange={e => console.log(e)} />
```
We do not see an error when the event occurs inline. 

However, we get an error on the event when we create a **standalone function**:
```tsx
const EventComponent: React.FC = () => {

  const onChange = e => {   // <--- error on 'e' "Parameter 'e' implicitly has an 'any' type."
    console.log(e)
  }
  return <div>
    
    <input onChange={onChange} />
  </div>
}
```
> We get this error because of type inference. Remember, TS is always trying to figure out the type of the event handler.

