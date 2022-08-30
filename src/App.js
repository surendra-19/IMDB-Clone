
import './App.css';
import List from './components/Movies/List';
import Navbar from './components/Navbar/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About/About';
import Watchlist from './components/UI/Watchlist';
import { data  } from './data';
import React, { useState } from "react"


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<List />} />
    <Route path="/about" element={<About />} />
    <Route path = '/watchlist' element={<Watchlist />} />
  </Routes>
)

export const UserContext=React.createContext();


function App() {
  const [ context, setContext] = useState({
    movies: data, 
    searchQuery: null,
    watchList: []
  })
  return (
    <UserContext.Provider value={[context, setContext]}>
      <div className="flex flex-col ">
        <Navbar />
        <div className='h-full bg-gray-200'>
          <div className='  max-w-7xl mx-auto '>
            <AppRoutes />
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
