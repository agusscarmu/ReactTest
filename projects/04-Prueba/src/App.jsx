import './App.css'
import {useCatImage} from './hooks/UseCatImage.js'
import {catFact} from './hooks/CatFact.js'
import {useState} from 'react'

export function App() {
    const { fact, refreshFact } = catFact();
    const [input, setInput] = useState(''); // Usando useState para input
    const [inputChange, setInputChange] = useState(false); // Usando useState para input
    const { imgUrl } = useCatImage({ fact } || {input});

    const handleClick = async () => {
        setInputChange(false); // Actualiza el estado 'inputChange' a false
        refreshFact();
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        setInputChange(true); // Actualiza el estado 'inputChange' a true
        refreshFact(input); // Llama a la función refreshFact con el valor del input
    };

    const handleInputChange = (event) => {
        setInput(event.target.value); // Actualiza el estado 'input' con el valor del input
    };

    return (
        <main>
            <h1>Aplicacion Gatos</h1>
            <section>
                {!inputChange && <p>{fact}</p>}
                <img src={imgUrl} alt={fact} />
            </section>
            <div className='control-panel'>
                <section className='input-section'>
                    <p>Ingresa un texto</p>
                    <form onSubmit={handleSubmit}> {/* Envuelve el input y botón en un formulario */}
                        <input value={input} onChange={handleInputChange} type="text" />
                        <button className='submit' type='submit'>Submit</button>
                    </form>
                </section>
                <button className='change-random' onClick={handleClick}>Cambiar texto e imagen - Random</button>
            </div>
        </main>
    );
}