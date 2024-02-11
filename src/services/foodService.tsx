import packageInfo from '../../package.json'

const baseApiUrl = 'https://es.openfoodfacts.org'
const searchUrl = new URL(`${baseApiUrl}/cgi/search.pl`)
searchUrl.searchParams.set('json', 'true')
searchUrl.searchParams.set('action', 'process')

const headers = {
    'User-Agent': `${packageInfo.name} - Version ${packageInfo.version}`
}

export const searchProducts = async (search_term: string) => {
    searchUrl.searchParams.set('search_terms', search_term);
    const response = await fetch(searchUrl.toString(), {
        headers: headers,
    })
    return await response.json().then((data) => {
        return data.products
    })
}