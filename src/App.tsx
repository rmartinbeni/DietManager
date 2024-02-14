import { useState } from 'react'
import './App.css'
import Product from './components/Product'
import useProductSearch from './hooks/useProductSearch'

function App() {
  const [query, setQuery] = useState('')
  const { loading, products, error } = useProductSearch(query)

  if (error) {
    return <p>Error: {error.message}</p>
  }

  return (
    <>
      <div id="header">
        <h1>Control de dieta</h1>
        <input
          type="search"
          placeholder="Producto"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div>
        <div id="product-list">
          {loading ? (
            <p>Loading... </p>
          ) : (
            products.map((product) => (
              <Product key={product.code} product={product} />
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default App
