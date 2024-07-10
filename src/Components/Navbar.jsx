import React from 'react'

import AddMovie from './AddMovie'




const Navbar = () => {
  // const {moviesData}=useSelector(state=>state.movieStore)
  
  return (
   <nav className=' w-100% h-50% bg-gradient-to-r from-black via-gray-900 to-gray-400 text-white rounded-sm   ' >
    <div className='w-100%  p-3 flex justify-between items-center'>
        <a href="/">🍿 MovieTN</a>
        <AddMovie/>
    </div>
   </nav>
  )
}

export default Navbar