# Modals

## Traditional Modal

Made with vanilla JS.

Can use z-index to control which elements are on top. The higher the elements z-index, the higher it will be. 

```js
<head>
  <style>
    .sidebar {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 300px;
      background-color: green;
    }

    .content {
      margin-left: 300px;
    }

    .modal {
      height: 100%;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 10;
    }

    .modal-body {
      background-color: white;
      margin: auto;
      height: 30%;
      width: 30%;
    }
  </style>
</head>
<body>
  <dic class="modal">
    <div class="modal-body">
      <h1>I am a modal</h1>
    </div>
  </dic>
  <div class="sidebar">I am a sidebar</div>
  <div class="content">
    <h1>I am some content</h1>
  </div>
</body>
```


# React Modals and Portals

A modal is a dialog box/popup window that is displayed on top of the current page.

Are challenging to implement in React. We can use a Portal.

[**Portals docs**](https://reactjs.org/docs/portals.html#gatsby-focus-wrapper).
```js
ReactDOM.createPortal(child, container)
```
> The first argument (child) is any renderable React child, such as an element, string, or fragment. The second argument (container) is a DOM element.

Done by making the modal a child of the body, NOT some route. This allows us to get around the z-index issue.

Over in the main `index.html`, we add the following underneath the `<body>` tag:
```html
<div id="modal"></div>
```

Create a new component called `Modal` that renders a `div` with the class `modal`.

```js
import React from 'react';
import ReactDOM from 'react-dom';

// create a portal to render the modal in
// need these divs to be rendered directly from the body element.

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">dsfgsdfgsdfg</div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
```

Can now import the modal into a component that needs it:
```js
import React from 'react';
import Modal from '../Modal';

const StreamDelete = () => {
  return (
    <div>
      Delete Stream
      <Modal />
    </div>
  );
};

export default StreamDelete;
```