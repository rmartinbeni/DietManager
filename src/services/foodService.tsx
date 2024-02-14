import packageInfo from '../../package.json'

const baseApiUrl = 'https://es.openfoodfacts.org'

const headers = {
  'User-Agent': `${packageInfo.name} - Version ${packageInfo.version}`,
}

export const searchProducts = async (search_term: string) => {
  const searchUrl = new URL(`${baseApiUrl}/cgi/search.pl`)
  searchUrl.searchParams.set('json', 'true')
  searchUrl.searchParams.set('action', 'process')
  searchUrl.searchParams.set('search_terms', search_term)

  try {
    const response = await fetch(searchUrl.toString(), {
      headers: headers,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data.products
  } catch (error) {
    console.error('Error fetching data', error)
    return []
  }
}
