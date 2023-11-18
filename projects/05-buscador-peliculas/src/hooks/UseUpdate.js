import { useMovie } from './UseMovie'
import { useSearch } from './UseSearch'
import { useEffect } from 'react'

export function useUpdate(){
    const {search, updateSearch, error} = useSearch()
    const {movies, loading, getMovies} = useMovie({search})


    useEffect(() => {
        getMovies()
      },[search])

    const update = (search) =>{
        updateSearch(search)
    }
    
    return {movies, search, update, error, movies, loading}
}