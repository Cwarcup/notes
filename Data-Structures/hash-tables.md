# Hash Tables

In JavaScript, hash tables are known as Objects.
Get to set a key and value.
Key is used as the index to find the value.

## Hash Functions

Have many types of hash functions. You give it an input, and generates a value of fixed length.

It is **idempotent**: given an input, the output will always be the same.
`Hello` --> MD5 Hash --> `8b1a9953c4611296a827abf8c47804d7`

![hash](/images/hash.png)
Because it is not ordered, we do not need to rearrange indexes.

```
let user = {
  age: 28,
  name: 'Curtis',
  magic: true,
  scream: function() {
    console.log('aaaaaahhhhhhh!');
  }
}

console.log(user.age) // O(1)
user.spell = 'abra kadabra'; // O(1)
console.log(user)
<!-- {
  age: 28,
  name: 'Curtis',
  magic: true,
  scream: [Function: scream],
  spell: 'abra kadabra'
} -->

## Hash Collisions

## Implementing A Hash Table

## keys()
```
