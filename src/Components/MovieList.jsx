import React from 'react'
import MovieCard from './MovieCard'
import moviesDB from '../../public/movieData'



const MovieList = () => {
  return (
    <>
      {moviesDB.map((movie=> <MovieCard data={movie} key={movie.id}/>))}
    </>
  )
}

export default MovieList