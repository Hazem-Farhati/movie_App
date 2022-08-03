import React from 'react'
import './MovieList.css'
import PropTypes from 'prop-types';
import Rating from '../Rating/Rating';
import "../MovieCard/MovieCard.css"
import Additem, { AddMovie } from '../Additem/Additem';
import { Link } from 'react-router-dom'

const MovieList = (props) => {
  return (
    <>

      <div >
        <div className='poster'>
          <img className='MoviCard-poster'
            src={props.poster}
            alt="a" />
          <div  >
            <h3>{props.title}</h3>
            <br />
            <p style={{ fontSize: "10px", maxWidth: "50px" }}>{props.posterUrl}</p>
            <br />
            <div className="DivForHoverItem">
              <div className="HiddenText">{props.description}</div>
            </div>
            <br />
            <br />
            <i className='note'>{props.note}</i>

          </div>
        </div>
        <h3 className='rating'>{props.rating}</h3>

      </div>

    </>
  )
}
MovieList.defaultProps = {
  title: "add ur title ",
  poster: "images/test.png",
  // posterUrl:"add ur posterUrl",
  description: "add ur description",
  rating: <Rating />

};

MovieList.propTypes = {
  title: PropTypes.string,
  // posterUrl : PropTypes.string,
  description: PropTypes.string,

};


export default MovieList