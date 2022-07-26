import React from 'react'
import Additem from '../Additem/Additem';
import Filter from '../Filtre/Filter';
import moviesList from '../listet_aflam/aflam';
import MovieList from '../MovieList/MovieList'
import Rating from '../Rating/Rating';

import  './MovieCard.css' 
    /* movie list  */

const MovieCard = () => {

// 
  return (
    <>
    <div className='title_movie'>Movies </div>
    <br /> <br />
    <Filter />
    <div className='MovieCard'>
    {      
      moviesList.map((el)=>(
        <MovieList
        poster={el.poster}
        title={el.title}
        description={el.description}
        note={el.note}
        // posterUrl={el.posterUrl}
        rating={<Rating/>}
        />
      ))   
    }
         
        <Additem

        rating={<Rating/>}
        />
       
    
   </div>
    </>
  )
}

export default MovieCard