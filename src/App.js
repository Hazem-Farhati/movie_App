import { useState } from 'react';
import YouTubePlayer from 'react-player/youtube';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Additem from './Components/Additem/Additem';
import Filter from './Components/Filtre/Filter';
import TrailerDetails from './Components/TrailerDetails/TrailerDetails';
// import MovieCard from './Components/MovieCard/MovieCard';

function App() {
const [movies, setMovies] = useState([{
    id : 1,
    poster :"/images/social_dl.jpg" ,
    title :"The Social Dilemma",
    video: ` https://www.youtube.com/embed/U23wadJEhLg?autoplay=1&mute=1 `,
    description: `The Social Dilemma is a 2020 American docudrama film directed by Jeff Orlowski and written by Orlowski, Davis Coombe, and Vickie Curtis.`,
    note : "8,8",
  },
  {
    id : 2,
    poster: "/images/sr.jpg",
    title: "The Shawshank Redemption" ,
    description: "Le banquier Andy Dufresne est arrêté pour avoir tué sa femme et son amant. Après une dure adaptation, il tente d'améliorer les conditions de la prison et de redonner de l'espoir à ses compagnons",
    video: "https://www.youtube.com/embed/6hB3S9bIaco?autoplay=1&mute=1",
  note : "8,8",

},
  {
    id : 3,
    poster: "/images/dn.jpg",
    title: "The Dark Knight" ,
    description:"Lorsqu'une menace mieux connue sous le nom du Joker émerge de son passé mystérieux et déclenche le chaos sur la ville de Gotham, Batman doit faire face au plus grand des défis psychologique et physique afin de combattre l'injustice.",
    video:"https://www.youtube.com/embed/EXeTwQWrcwY?autoplay=1&mute=1",
  note : "9,0",

},
  {
    id : 4,
    poster:"/images/fg.jpg",
    title:"Forrest Gump" ,
    description:"Les présidences de Kennedy et Johnson, le Vietnam, le Watergate et d'autres histoires se déroulent à travers la perspective d'un homme d'Alabama avec un QI de 75.",
    video:"https://www.youtube.com/embed/bLvqoHBptjg?autoplay=1&mute=1",
  note : "6,8",

},
  {
    id : 5,
    poster: "/images/incp.jpg",
    title : "Inception" ,
    description: "Un voleur qui s'approprie des secrets d'entreprise à l'aide d'une technique de partage de rêves se voit contraint d'effectuer la tâche inverse : implanter une idée dans l'esprit d'un PDG, pour revoir ses enfants.",
    video: "https://www.youtube.com/embed/YoHD9XEInc0?autoplay=1&mute=1",
  note : "7,7",

},
  {
    id : 6,
    poster:"/images/gm.jpg",
    title:"The Green Mile", 
    description: "La vie des gardes du couloir de la mort est touchée par l'un de leurs détenus: a homme noir accusé de meurtre et de viol d'enfants, doté d'un pouvoir mystérieux.",
    video: "https://www.youtube.com/embed/Ki4haFrqSrw?autoplay=1&mute=1",
  note : "7,8",

},
])
  return (
    <div>
      
      
                <div className='nav-bar'>
                <Link to='/'>
                        <h2>Pansho4Movie</h2>    
               </Link>
                </div> 
                
    <Routes>
    {/* <Route path='/trailerDetails' element={<TrailerDetails/>}/> */}
    <Route  path='/' element={<Filter movies={movies} setMovies={setMovies}/>}/>
    
    <Route  path='/trailerDetails/:id' element={<TrailerDetails movies={movies} setMovies={setMovies}/>}></Route>
    
    </Routes>
 
      {/* <Additem add={add} /> */}
      
     </div>
     
  );
}

export default App;
