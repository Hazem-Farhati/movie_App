
import React from 'react'
import { useState } from 'react';
import './Filter.css'
import MovieList from '../MovieList/MovieList'
import '../MovieList/MovieList.css'
import '../MovieCard/MovieCard.css'
import Additem from '../Additem/Additem';
import { Link } from 'react-router-dom';
// import '../../Components/MovieList/MovieList.css'
const Filter = ({ movies,setMovies }) => {
        const [search, setSearch] = useState('');
        return (
                <>
                
                     
        <input
         className='search-container'
         type="text"
        placeholder="Search Your movie"
        id='search'
        onChange={e => setSearch(e.target.value)} />
        <Additem movies={movies} setMovies={setMovies} />
        <div className='MovieCard'>
        <div className='poster-one' >
         <div className='poster-one'   >

        {movies.filter((val) => {
          if (search == "") {
           return val
           }
                   else if (val.title?.toLocaleLowerCase().includes(search.toLowerCase()) || parseInt(search) == parseInt(val.note)) {
                  return val
              }
                }).map((el, i) => {
                return (
            <div key={i}>
                    <Link to={`/trailerDetails/${el.id}`}>
                <MovieList id={el.id} poster={el.poster} title={el.title} description={el.description} note={el.note}  video={el.video} />
                        </Link>
                        </div>
            );
                  })}
                  </div>
                  </div>
                  </div>

                </>
        )
}

export default Filter