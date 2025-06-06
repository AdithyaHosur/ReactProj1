import React from 'react'
import '../css/MovieCard.css'

export default function MovieCard({movie}) {
  function onFavoriteClick(){
    alert("Clicked!");
  }
  return (
    <>
      <div className='movie-card'>
        <div className='movie-poster'>
          <img src={movie.url} alt={movie.title} />
          <div className='movie-overlay'>
            <button className='favorite-btn' onClick={onFavoriteClick}>
              ❤️
            </button>
          </div>
        </div>
        <div className='movie-info'>
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
          <p>IMDB: {movie.rating}</p>
        </div>
      </div>
    </> 
  )
}
