import {useState} from 'react';
/**
 * 
 * formatUserName: Función que recibe un string y devuelve otro string (se pasa una funcion por parametro y se ejecuta dentro del componente)
 * userName: String
 * name: String (reemplazado por children)
 * children: objeto que contiene todo el contenido que se pasa dentro del componente (incluso pueden ser otros componentes)
 * isFollowing: Boolean
 */
export function TwitterFollow({children, formatUserName, userName = 'unknown', initialIsFollowing}){

    /*Maneja el estado del boton (siguiendo o no)
    * el useState se maneja con un arreglo, donde el primer elemento es el valor del estado y el segundo es una funcion que se encarga de modificar el estado
    */
   const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
   
   //Funcion que se ejecuta al hacer click en el boton (cambia al estado opuesto)
   const handleClick = (e) => {
       setIsFollowing(!isFollowing)
    }
    
    let text = isFollowing ? 'Following' : 'Follow';
    let textUnfollow = 'Unfollow'


    return (
        <article className='container'>
        <header>
            <div className='image-container'>
                <img src={`./imgs/${userName}.jpeg`} alt="" />
            </div>
            <div className='user-name'>
                <strong>{children}</strong>
                <span>{formatUserName(userName)}</span> 
            </div>
        </header>

        <aside>
            <button className={isFollowing ? 'following' : ''} onClick={handleClick}>
                <span className='text-follow'>{text}</span>
                <span className='text-unfollow'>{textUnfollow}</span>
            </button>
        </aside>
        </article>
    )
}
