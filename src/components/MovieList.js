import React from 'react';
import MovieCard from "./MovieCard";

function MovieList({movieName, titleSearch, ratingSearch}) {

    const search = () => {
       return movieName.filter(
            (film) => {
              return (
                ratingSearch === 0 ?
                film.title.toLowerCase().includes(titleSearch.toLowerCase()):
                Number(film.rating) === ratingSearch && film.title.toLowerCase().includes(titleSearch.toLowerCase())

                     )

                      }
                        )

                        

}
React.useEffect(
  () => (search() === [])?document.write(<p>nothing found</p>) : null
  )
console.log(search())
return <div style={{display: 'flex',flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap'}}>

    { 
      search().map((movie) => <MovieCard movie={movie} key={movie.id} />) 
     
      }
    </div>
    

}


export default MovieList
