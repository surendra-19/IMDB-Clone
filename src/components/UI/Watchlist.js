import React, { useContext, useState } from 'react'
import { UserContext } from '../../App'
import { Card } from '../UI/Card'
function Watchlist() {
  const [context,setContext]=useContext(UserContext)
  return (
    <div className='flex flex-wrap gap-4 p-4 relative left-7 md:space-y-1 md:space-x-1 h-full bg-gray-200'>
      {
        context.watchList.map((movie)=><Card  key={movie.id} movie={movie} />)
      }
    </div>
  )
}

export default Watchlist