# Quick Start

From React documentation: [Quick Start](https://react.dev/learn).


## creating and nesting components (MyButton.js)

with react snippets (`rfce`) and self-closing component tags (`<MyButton />`)

## writing markup with jsx

a stricter HTML

## adding styles (App.css)

replacing `class` with `className` attribute

## displaying data (Profile.js)

with curly braces (`{'Photo of ' + user.name}`)

## conditional rendering

conditional/ternary (`?`) operator without `else` branch (`{isLoggedIn && <AdminPanel />}`)

## rendering lists (ShoppingList.js)

with JS array method `map()`

```
const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);
```

## responding to events (MyButton.js)

with `function` inside component

## updating the screen (MyButton.js)

with React hook `useState()`

## sharing data between components

by moving the state up to the shared component (e.g. **App.js**)
