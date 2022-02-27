# Tuples

- are an **array-like structure** where each element represents some **property of a record**.
  - looks VERY similar to an array.
  - usually contains multiple properties to represent one single thing.
  - will usually contain multiple types.

Example: How do we use an object to present a 'drink'?
```
{
color -> brown
carbonated -> true
sugar -> 40
}
```
Lets take this object and represent it as an array `[]`
` [brown, true, 40]` But we have alost a lot of information about the object. We would need to memorize the order of properties.
**Ordering is critical**. 