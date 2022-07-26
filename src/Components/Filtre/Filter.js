
import React from 'react'
import { useState } from 'react';
import moviesList from '../listet_aflam/aflam';
import './Filter.css'
const Filter = () => {
const [search, setSearch] = useState('');
return (
        <div className="filt">
              <div class="search-container">

            <input
             type="text" 
                placeholder="Search Your movie" 
                id='search' 
                onChange={e=> setSearch(e.target.value)}/>
                </div>
               {moviesList
               .filter((val)=>{
                    if(search ==="") {
                    return val
                    }
                    else if ( val.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ){
                    return val
                }
            }).map((val,key)=>{
                 return(
                    <p>{moviesList.title}</p>
                 );
                })}
             
        </div>
    )
}

export default Filter