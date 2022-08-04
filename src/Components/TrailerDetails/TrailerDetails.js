import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './TrailerDetails.css'

const TrailerDetails = ({ movies, setMovies }) => {

  const { id } = useParams();
  let navigate = useNavigate();
  const [show, setShow] = useState(false)

  return (
    <div >
      {movies.filter((el) => parseInt(id) === el.id).map((movie, i) =>
        <div >
          {show?
          <h2 key={i} className='full-title'  >{movie.title}</h2>:!show
          },
          {show&&
          <h2 key={i} className='full-one'  >{movie.description}</h2>
          }
          <button className='btn1'  onMouseEnter={()=>setShow(true)} onMouseOut={()=>setShow(false)} ></button>
          <div class="video-container" >
          <iframe 
          src={movie.video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
          </div>
        </div>)
      }
      {/* <button className='btn-back' onClick={() => { navigate("/"); }}>BACK TO HOME PAGE</button> */}
    </div>
  )
}

export default TrailerDetails