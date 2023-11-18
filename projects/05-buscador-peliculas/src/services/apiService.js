const API_KEY = 'eb47832c'

export const searchMovies = async ({ search }) => {
    if (search === '') return null
    const URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    try {
      const response = await fetch(URL)
      const json = await response.json()
  
      const movies = json.Search
  
      return movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
      }))
    } catch (e) {
      throw new Error('Error searching movies')
    }
  }