import { useState, useEffect } from 'react'
import {getFact} from '../services/RandomFact'

export function catFact(){
    const [fact, setFact] = useState()
    //Efecto se ejecuta cuando se monta el componente
    
    
    /*
    * getFact() es una función que devuelve una promesa. Al llamar a getFact(), 
    * se inicia una operación asíncrona para obtener algún dato (posiblemente un "hecho" o información).
    * 
    * El método then() es utilizado en la promesa devuelta por getFact(). Cuando getFact() resuelve la promesa exitosamente, 
    * se pasa el resultado (llamado newFact en este caso) 
    * a la función dentro de then. Esta función toma newFact y actualiza el estado con setFact(newFact).
    */


    function refreshFact(input){
        if(input === undefined){
            getFact().then((newFact)=> setFact(newFact))
        }else{
            getFact(input).then(input => setFact(input))
        }
    }

    
    useEffect( refreshFact , [])

    return {fact, refreshFact}
}
