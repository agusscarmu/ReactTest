import { useEffect, useState, useRef } from "react"

export const useSearch =()=>{
    const [search, updateSearch] = useState('')
    const [error, setError] = useState('')
    const isFirstInput = useRef(true) // useRef() crea un objeto mutable que persiste durante toda la vida útil del componente.

    useEffect(()=>{
        if(search.startsWith(' ')) return

        if(isFirstInput.current){
            isFirstInput.current = search === ''
            return
        }

        updateSearch(search)
        if(search.length < 3 ) {
          setError("La busqueda debe tener al menos 3 caracteres")
        }else{
          setError(false)
        }
    }, [search])


    return {search, updateSearch, error}
}
