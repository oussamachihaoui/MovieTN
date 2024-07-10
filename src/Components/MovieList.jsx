import React from 'react'
import MovieCard from './MovieCard'
import moviesDB from '../../public/movieData.js'
import { useSelector } from 'react-redux'



const MovieList = () => {
  const {moviesData}=useSelector(state=>state.movieStore)
  return (
    <>
      {moviesData.map((movie=> <MovieCard data={movie} key={movie.id}/>))}
    </>
  )
}

export default MovieList