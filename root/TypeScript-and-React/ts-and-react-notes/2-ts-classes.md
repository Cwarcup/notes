# Classes in TypeScript and React

## TypeScript and Props

Need to create an interface for the props.

```ts
interface UserSearchProps {
  users: {
    name: string;
    age: number;
  }[]
}
```

Within our class, we can tell TypeScript that we want to use the props.

```ts
class UserSearch extends Component<UserSearchProps> {
  render() {
    this.props.users
  }
}

export default UserSearch
```
> this.props.users returns the correct type, defined in our interface.

## TypeScript and State in a Class

  
```ts 
class UserSearch extends Component<UserSearchProps> {
  state = {
    name: '' // <--- this is the state. TS knows this is a string.
  }

  render() {
    this.state.name
  }
}
```

or could create a separate interface for the state.

```ts
interface UserSearchState {
  name: string;
  user: { name: string, age: number } | undefined; 
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined
  }

  render() {
    this.state.name
    this.state.user
  }
}
```

All together with a render() method:
```ts
// can compare this with the state in src/state/UserSearch.tsx file

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });

    this.setState({ user: foundUser });
  };

  render() {
    const { name, user } = this.state;
    return (
      <div>
        User Search
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>
        <div>
          {user && user.name}
          {user && user.age}
        </div>
      </div>
    );
  }
}
```