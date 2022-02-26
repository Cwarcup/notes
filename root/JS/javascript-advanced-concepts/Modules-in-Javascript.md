# Modules In JavaScript

## ES6 Modules

Looks like this:

```
import module1 from 'module1';
import module2 from 'module2';

export function jump() {
}
```

Have the native keyword `import` that imports a module from the file we want.
Any time we want to export a function, we use the keywrod `export`.

Harry Potter Example:

```
const harry = 'potter'
const voldemort = 'He who must not be named'

export function fight(char1, char2) {
  const attack1 = Math.floor(Math.random() * char1.length);
  const attack2 = Math.floor(Math.random() * char2.length);
  return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
}

///html
<script>
  import { fight } from 'script';
</script>
```

As long as have `export fight()` then we get access to the `fight()` function on the global scope. All the other variables can not be accessed. You can export as many functions as you'd like.
In the script HTML, need to put the functions between { }.

You can also create a **default function** by adding the keyword `default`. Do not need to have { } around the function because it's the default function from that module.

```
export default function fight(char1, char2) {
  const attack1 = Math.floor(Math.random() * char1.length);
  const attack2 = Math.floor(Math.random() * char2.length);
  return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
}
//html
<script>
  import fight from 'script';
</script>
```

Need to define the script as `type="module"` to tell the browser it is not a regular script. Make sure you are running this from a server or it will not work. Can use [live-server](https://www.npmjs.com/package/live-server) to do this.

```
<script type='module'>
  import fight from 'script';
</script>
```

Ways of **importing** modules: [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

ways of **exporting** modules: [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
