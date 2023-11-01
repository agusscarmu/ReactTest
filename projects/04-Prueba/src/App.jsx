import './App.css'
import {useCatImage} from './hooks/UseCatImage.js'
import {catFact} from './hooks/CatFact.js'


export function App(){
    const {fact, refreshFact} = catFact()
    const {imgUrl} = useCatImage({fact}) //Lo importo de UseCatImage.js
    
    const handleClick = async ()=>{
        refreshFact()
    }

    return(
        <>
        <main>
            <h1>Aplicacion Gatos</h1>
            <section>
                {fact && <p>{fact}</p>} {/* Renderizado condicional */}
                <img src={imgUrl} alt={fact} />
            </section>
            <button onClick={handleClick}>Cambiar texto e imagen</button>
        </main>
        </>
    )
}