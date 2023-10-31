import { useState , useEffect } from 'react'
import './App.css'

const MouseMove = () => {
  const[enabled, setEnabled] = useState(false);
  const[position, setPosition] = useState({x:0, y:0});


  //Efecto de seguimiento de mouse
  useEffect(() => {

    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    if(enabled) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return()=>{//Esto hace que limpie el useEffect
      window.removeEventListener('mousemove', handleMouseMove); 
    }
    
  }, [enabled])

  //Efecto de ocultar mouse
  useEffect(()=>{
      document.body.style.cursor = enabled?'none':'default';

      return()=>{
        document.body.style.cursor = 'default';
    }
  }, [enabled])

  // [] -> Se ejecuta solo una vez
  // [enabled] -> Se ejecuta cuando enabled cambia
  // [enabled, position] -> Se ejecuta cuando enabled o position cambian
  // undefined -> Se ejecuta siempre que se renderiza el componente
  
  return (
    <>
      <main>
        <div style={{
          position: 'absolute',
          width: 50,
          height: 50,
          top: -25,
          left: -25,
          opacity: 0.8,
          borderRadius: '50%',
          pointerEvents: 'none',
          backgroundColor: '#09f',
          transform: `translate(${position.x}px, ${position.y}px)`,
          display: enabled ? 'block' : 'none'
        }}/>
        <button onClick={()=>setEnabled(!enabled)}>
          {enabled?'Desactivar':'Activar'}
        </button>
      </main>
    </>
  )
}

function App() {
  const[enabled, setEnabled] = useState(true);

  
  return (
    <>
      {/* Esto es un if ternario */}
      {enabled && <MouseMove/>}
      <button onClick={()=>setEnabled(!enabled)}>{enabled? 'Disable' : 'Enable'} MouseMove</button>
    </>
    )
}

export default App
