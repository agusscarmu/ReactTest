import { useState, useRef } from 'react'
import { searchMovies } from '../services/apiService'


export function useMovie({search}){

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previouseSearch = useRef(search)
    const getMovies = async()=>{
        try{
            setLoading(true)
            setError(null)
            previouseSearch.current = search
            const mappedMovies = await searchMovies({search})
            setMovies(mappedMovies)
        }catch(e){
            setError(e.message)
        }finally{
            setTimeout(()=>setLoading(false), 300)
        }
    }
    return {movies , loading, error, getMovies}
    
}