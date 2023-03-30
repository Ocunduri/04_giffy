const API_KEY = 'Ky1J5haG35DOiEbwpTT7O3JUMvobrcuX'


export default function getGifs({ keyword = 'naruto' } = {}) {
    const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=15&offset=0&rating=g&lang=en`
    return fetch(API_URL)
        .then(res => res.json())
        .then(response => {
            const { data } = response
            const gifs = data.map(image => {
                const { images, title, id } = image
                const { url } = images.downsized_medium
                return { title, id, url }
            })

            return gifs
            
        })
}