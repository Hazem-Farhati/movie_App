
import React from 'react'
import { useState } from 'react';
import moviesList from '../listet_aflam/aflam';
import './Filter.css'
import MovieList from '../MovieList/MovieList'

// import '../../Components/MovieList/MovieList.css'
const Filter = (props) => {
const [search, setSearch] = useState('');
return (
        <div className="filt">
                
                <div className='search-container'>

                        <input
                                type="text"
                                placeholder="Search Your movie"
                                id='search'
                                onChange={e => setSearch(e.target.value)} />
                </div>
                <div className='poster' >
                {moviesList.filter((val) => {
                        if (search == "") {
                                return val
                        }
                        else if (val.title?.toLocaleLowerCase().includes(search.toLowerCase())) {
                                return val
                        }
                }).map((el,i) => {
                        return (
                                <div  key={i}>
                                        <MovieList poster={el.poster} title={el.title} description={el.description} note={el.note} rating={el.rating}/>
                              </div>
                                
                        );
                })}
                </div>

        </div>
 )
}

export default Filter