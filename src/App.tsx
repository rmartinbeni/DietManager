import { useEffect, useRef, useState } from 'react'
import './App.css'
import { searchProducts } from './services/foodService'

function App() {
  const [query, setQuery] = useState('')
  const [products, setProducts] = useState([])
  const timeoutRef = useRef(0)
  
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      if (query === '') return
      searchProducts(query).then((data) => {
        console.log(data)
        setProducts(data)
      })
    }, 500)
    
  }, [query])

  return (
    <>
      <div id="header">
        <h1>Control de dieta</h1>
        <input type="search" placeholder="Producto" onChange={e => setQuery(e.target.value)} />
      </div>
      <div>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products && products.map((product) => (
          // TODO: Move to custom component
          <div key={product.code} style={{ margin: '10px' }}>
            {product.product_name}
            <img src={product.image_thumb_url} alt={product.product_name} />
          </div>
        ))}
        </div>
      </div>      
    </>
  )
}

export default App
