# Grid CSS

[MDM docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)

```css
.image-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 10px;
}

.image-list img {
  width: 250px;
}
```

grid-template-columns
- creates a set number of columns
- auto-fill means it will decide on its own how many to make

---

How can we get images to get close to each other?