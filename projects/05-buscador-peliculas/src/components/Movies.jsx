function ListOfMovies({movies}){
    return (
        <ul className="cards">
            {movies.map(movie => (
              <li className="card" key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <img src={movie.poster} alt={movie.title} />
              </li>
            ))}
          </ul>
    )
}

function NoMovies(){
    return (
        <p>No hay películas</p>
    )
}


export function Movies({movies}){
    const hasMovies = movies?.length > 0
    return(
        hasMovies ? <ListOfMovies movies={movies} /> : <NoMovies />
    )
}