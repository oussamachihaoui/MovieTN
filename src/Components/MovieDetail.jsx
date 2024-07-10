import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'



const MovieDetail = () => {
  const {id}=useParams()
  // state store
  const {moviesData}=useSelector(state=>state.movieStore)
  const uniqueMovie = moviesData.find(el=>el.id===Number(id))








  return (
    <div className='bg-gradient-to-t from-black via-gray-900 text-white'>
        <div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16 shadow-md">
          <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto text-center ">
            <a
              href="#"
              className="max-w-3xl mx-auto text-xl sm:text-4xl font-semibold inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-10 text-gray-900"
            >
      {/* title --------------------------------------------------------------------------------------------------*/}
            {uniqueMovie.title}
            </a>
              <a >
      {/* trailer -----------------------------------------------------------------------------------------------------*/}
                <iframe className='w-full aspect-video mb-5' src={uniqueMovie.trailer} frameborder="0"></iframe>
              </a>

    {/* overview ----------------------------------------------------------------------------------------------------*/}
            <p className=" text-lg leading-8 max-w-2xl mx-auto">
              {uniqueMovie.overview}
            </p>
    {/* ------------------------------------------------------------------------------------------------------------- */}
            <div className="py-5 text-sm font-regular  flex items-center justify-center">
      <span className="mr-3 flex flex-row items-center">
      
        {/* score ---------------------------------------------------------------------------------------------------------- */}
        <span className="ml-1">💯 {uniqueMovie.vote_average}</span>
      </span>
      <a
        
        className="flex flex-row items-center   mr-3"
      >
        

        {/* populariry --------------------------------------------------------------------------------------------------------- */}
        <span className="ml-1">😱 {uniqueMovie.popularity}</span>

      </a>
      <a href="#" className="flex flex-row items-center ">
        
        {/* release date ------------------------------------------------------------------------------------------------------------ */}
        <span className="ml-1">📅 {uniqueMovie.release_date}</span>
      </a>
    </div>
    <hr />
  </div>
</div>

    </div>
  )
}

export default MovieDetail