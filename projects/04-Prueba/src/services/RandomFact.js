
const URL_API = 'https://catfact.ninja/fact' //URL Que trae un JSON random con un fact

/*
 * En React, una función asincrónica se refiere a una función que utiliza la palabra 
 * clave async antes de su declaración para indicar que su ejecución podría involucrar 
 * operaciones asincrónicas, como peticiones de red, acceso a bases de datos, o cualquier 
 * operación que pueda tardar un tiempo en completarse.
 */
export const getFact = async () => {
    const res = await fetch(URL_API) //Son promesas (puede hacerse con await o puede hacerse con .then)
    const data = await res.json()
    const {fact} = data
    return fact
}