import { useEffect, useState } from 'react'
import { searchProducts } from '../services/foodService'

interface ProductType {
  code: string
  product_name: string
  image_thumb_url: string
}

const useProductSearch = (query: string) => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState<ProductType[]>([])
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (query === '') return
    setLoading(true)
    searchProducts(query)
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [query])

  return { loading, products, error }
}

export default useProductSearch
