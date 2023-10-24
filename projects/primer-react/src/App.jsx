import React from 'react';
import './App.css'
import { TwitterFollow } from './TwitterFollow';

const users = [
    {initialIsFollowing:false, userName: 'Astarion', name: 'Astarion'},
    {initialIsFollowing:false, userName: 'Shadowheart', name: 'Shadowheart'},
    {initialIsFollowing:true, userName: 'Lae\'zel', name: 'Lae\'zel'}
]

const formatUserName = (userName) => {
    return `@${userName}`
}

const astarion = {userName:"Astarion"} //Objeto que contiene las propiedades que se pasan al componente (se envian como props '{...astarion}')
//NO es muy buena practica pasar objetos como props, ya que si se modifica el objeto, se vuelve a renderizar el componente

export function App() {

    return (
        // <> </> -> Esto reemplaza el React.Fragment
        <section className='App'>  
            <TwitterFollow formatUserName={formatUserName} {...astarion}>
                Astarion
            </TwitterFollow>
            {/* initialIsFollowing para que inicie siguiento */}
            <TwitterFollow formatUserName={formatUserName} initialIsFollowing userName="Shadowheart">
                ShadowHeart
            </TwitterFollow>
            <TwitterFollow formatUserName={formatUserName} userName="Lae'zel">
                Lae'Zel 
            </TwitterFollow>

          
            {
            /* Se puede pasar un array de objetos como props.
            * Hay que pasar siempre una key para que react sepa que elemento esta modificando.
            * La key debe ser unica para cada elemento (puede ser una key del propio map, o simplemente un atributo del objeto (como userName))
            */
            users.map((user, key) => ( //key por defecto en el map
                <TwitterFollow key={key} formatUserName={formatUserName} {...user}>
                    {user.name}
                </TwitterFollow>
            ))
            
            }
        </section>
    )
}
