import './App.css'
import {Movies} from './components/Movies'
import {useUpdate} from './hooks/UseUpdate'

function App() {
  const {movies, search, update, error, loading} = useUpdate()


  const handleSubmit = (event) => {
    event.preventDefault()
    update(search)
  }
  const handleInputChange = async (event) => {
    const newSearch = event.target.value
    update(newSearch)
  }
  

  return (
    <>
    <div className='busqueda'>
      <form onSubmit={handleSubmit} className="form">
        <input style={{border:'1px solid transparent', borderColor:error?'red':'transparent'}} type="text" onChange={handleInputChange} placeholder='Star wars...' />
        <button type='submit'>
          Buscar
        </button>
      </form>
    </div>

    <main>
      {error && <p>{error}</p>}
      {loading? <p>Loading...</p> :<Movies movies={movies} />}
    </main>
    </>
  )
}

export default App
