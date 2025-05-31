import React from 'react'
import '../css/Home.css'
import MovieCard from '../components/MovieCard';
import { useState } from 'react';

export default function Home() {

  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    {id: 1, title: "The Terminal", release_date: "2004", rating: 9.4},
    {id: 2, title: "The Matrix", release_date: "2004", rating: 9.8},
    {id: 3, title: "The Lord Of The Rings", release_date: "2004", rating: 8.4},
    {id: 4, title: "The Lost Island", release_date: "2004", rating: 7.4},
  
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  }

  return (
    <div className='home'>
      <form onSubmit={handleSearch} className='search-form'>
        <input type="text" placeholder='Search' className='search-input' value={searchQuery}  onChange={(e) => setSearchQuery(e.target.value)}/>
        <button type='submit' className='search-button'>Search</button>
      </form>
      <div className='movies-grid'>
        {movies.map(movie =>  <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  )
}
