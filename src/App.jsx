import React from 'react'
import MovieList from './Components/MovieList'
import AddMovie from './Components/AddMovie'
import Navbar from './Components/Navbar'




const App = () => {
  return (

    <>
    
      
      <div className='p-3 grid gap-5  md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4  bg-gradient-to-t from-black via-gray-900 to-gray-200' >
          
        <MovieList/>
        

      </div>
      
    </>
  )
}

export default App