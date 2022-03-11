
Within the head:
```html
<link rel="stylesheet" href="/css/styles.css" />
```


# Adding CSS

**Body:**
`margin: 0 auto;` Evenly distribute space on the left and right. 0 is the margin for top and bottom. Auto will evenly distribute left and right. 

`padding: 0 16px;` Putting 16px between our body content and our user window. Prevents things from getting jammed against the edge.

**Footer:**
Remember, padding will put space inside the box and margin will put space between the box and other items.

```css
footer {
  color: #888888;
  border-top: 1px solid #eeeeee;
  margin-top: 16px;
  padding: 16px 0;
}

// only targeting links in the header
header a {
  //...
}
```

# Sticky Footer
Want footer at the bottom of every page.

# Favicon
Must be below title element. 
```html
    <title>{{title}}</title>
    <link rel="icon" type="image/x-icon" href="/img/imageName"/>
    ```