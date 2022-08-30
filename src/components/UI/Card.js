import React,{useState} from "react"
import { UserContext } from "../../App"

export const Card = ({movie, handleAddWatchList}) => {
	return (
		<div className="p-3 bg-white flex flex-col  rounded-lg h-auto space-y-4 justify-between">
			<div className="w-48 h-64 flex justify-center"> 
				<a href={movie.imdb}><img src={movie.image} className="rounded-md" alt={movie.title} title={movie.title}/></a>
			</div>
			<div className="font-medium w-48 p-2 flex flex-row justify-center">
				<a href={movie.imdb}>{movie.title}</a>	
			</div>
			<div className=" flex flex-row justify-center bg-gray-800 text-white w-auto h-7 font-semibold">
				<button onClick={() => handleAddWatchList(movie)}>+ watchList</button>
			</div>
		</div>
	)
}