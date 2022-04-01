[React Snippets](https://github.com/dsznajder/vscode-react-javascript-snippets/blob/master/docs/Snippets.md)

---

imr→	import React from 'react'

imrd→	import ReactDOM from 'react-dom'

---

**import react, class component**
rcc
```
import React, { Component } from 'react'

export default class FileName extends Component {
  render() {
    return <div>$2</div>
  }
}
```
**rafcee - React arrow Functional Component export**
rafce
```
import React from 'react'

const $1 = () => {
  return <div>$0</div>
}

export default $1
```

**rdc - react 18 index.js react dom container**
https://github.com/reactwg/react-18/discussions/5
```js
import * as ReactDOMClient from 'react-dom/client';
import App from './components/App';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(<App />);
```

**rce - react class export**

```js
import React, { Component } from 'react'

export class FileName extends Component {
  render() {
    return <div>$2</div>
  }
}

export default $1 
```

**rcredux - react class redux**
```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class FileName extends Component {
  static propTypes = {
    $2: $3,
  }

  render() {
    return <div>$4</div>
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FileName)
```

**rdcredux - react functional component redux**
```js
import React, { Component } from 'react'
import { connect } from 'react-redux'

export const FileName = () => {
  return <div>$4</div>
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FileName)
```