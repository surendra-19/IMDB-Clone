import React, { useContext} from 'react'
import { UserContext } from '../../App'
import { Card } from '../UI/Card'


export default function List() {
  const [context, setContext]=useContext(UserContext)

  const handleAddWatchList = (  movie ) => {
    setContext((prev) => {
      return {...prev, watchList: [...prev.watchList, movie]}
    })
    console.log(context.watchList)
  }
  return (
    <div className='flex flex-wrap gap-4 p-4 relative left-7 md:space-y-1 md:space-x-1'>
      {
        context.searchQuery ?
        <>
          { context.movies.filter(movie => movie.title.toLowerCase().includes(context.searchQuery.toLowerCase())).map((movie) => <Card key={movie.id} movie={movie} handleAddWatchList={handleAddWatchList} />)
        }
        </>
        :
        <>
        { context.movies.map((movie) => <Card key={movie.id} movie={movie} handleAddWatchList={handleAddWatchList}/>)
        }
        </>
      }
    </div>
  )
}
