import React from 'react'
import './MovieList.css'
import PropTypes  from 'prop-types';
import Rating from '../Rating/Rating';

const MovieList = (props) => {
  return (

    <div  >

      <img className='MoviCard-poster'
        src={props.poster}
        alt="a" />
      <div className='poster-one' >

        <h3>{props.title}</h3>
        <br />
        <p style={{ fontSize: "10px", maxWidth: "50px" }}>{props.posterUrl}</p>
        <br />
        <div></div>
        <div className="DivForHoverItem">
          <div className="HiddenText">{props.description}</div>
        </div>
        <br />
        <br />
        <div className='note_rating'>
          <i className='note'>{props.note}</i>
          <h3 className='rating'>{props.rating}</h3>
        </div>
      </div>
    </div>

  )
}
MovieList.defaultProps = {
  title: "add ur title ",
  poster:"images/test.png",
  // posterUrl:"add ur posterUrl",
  description : "add ur description",
  rating: <Rating/>

};

MovieList.propTypes = {
  title : PropTypes.string,
  // posterUrl : PropTypes.string,
  description : PropTypes.string,

};


export default MovieList