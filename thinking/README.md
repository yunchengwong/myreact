# Thinking in React

From React documentation: [Thinking in React](https://react.dev/learn/thinking-in-react)

## material from desginer

JSON API (original data):
```
const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]
```

mockup (sample drawing of UI):
![image](https://github.com/yunchengwong/myreact/assets/48376163/99bb5085-4f8e-48b8-adc1-2b236b1c22fc)

## step 1: create components and their hierarchy

- App (contains `<SearchBar />` and `<ProductTable />`)
  - SearchBar
  - ProductTable (contains `<ProductCategoryRow />` and `<ProductRow />`)
    - ProductCategoryRow
    - ProductRow

## step 2: pass the original data through prop

- App (pass `products`)
  - SearchBar (need `products`)
  - ProductTable (need products for iteration, to pass `product`)
    - ProductCategoryRow (need products `category`)
    - ProductRow (need `product.price`, `product.stocked`, `product.name`)

tips: add key attribute when rendering listItem (`product`)

## step 3: create React state

1. think of all of the pieces of data
   - products (original data)
   - search input
   - checkbox input
   - filtered products
  
2. identify state
   - state change ovetime
   - state cannot be computed by existing data
   - state: search input, checkbox input
     
3. identify components that use state
   - components: **SearchBar**, **ProductTable**
  
4. decide where the state live
   - common parent: **App**

5. pass state as props

## step 4: add inverse data flow

- pass set function through prop
- add event handler to call function (using an arrow function)

```
function SearchBar({ filterText, onFilterTextChange }) {
  return (
    <form>
      <input type='text' value={filterText} onChange={(e) => onFilterTextChange(e.target.value)} />
    </form>
  )
}
```
