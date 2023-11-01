import {useState, useEffect} from 'react'

// Hook personalizado (CustomHook) -> Se usa para reutilizar logica y es necesario llamarlo como useNombreHook (sin el use no permite agregar otros hooks)
// Al pasar un objeto ({fact}) estamos mandando un parametro nombrado, si o si nos van a tener que enviar un objeto con esa propiedad
export function useCatImage({fact}){

    const [imgUrl, setImgUrl] = useState('')

    //Efecto se ejecuta cuando cambia fact
    useEffect(()=>{ 
        
    if(!fact) return // Si no hay fact no hace nada

    const firstWord = fact.split(' ')[0] // Separa el string en un array de strings y traigo la primer palabra
    const firstThreeWords = fact.split(' ',5).join(' ')[0] // Separa el string en un array de strings y traigo las primeras 5 palabras y las uno con un espacio

    //Setea la imagen con la primer palabra
    setImgUrl(`https://cataas.com/cat/says/${firstWord}`)

    return()=>{
        console.log('Componente ontado')
    }



}, [fact])

    return {imgUrl}
}
