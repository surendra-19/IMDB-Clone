import React,{useState,useContext} from 'react'
import { UserContext } from '../../App'

function Searchbar() {
  const [context, setContext]=useContext(UserContext)

  return (
    <div  >
        <input type='text' placeholder='Search IMDb' className='w-96 h-8 bg-gray-200 rounded-lg p-4' value={context.searchQuery}  onChange={(e)=>{setContext((prev) => ({...prev, searchQuery: e.target.value}))}} />
    </div>
  )
}

export default Searchbar