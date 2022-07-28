import { useState } from 'react';
import './App.css';
import Additem from './Components/Additem/Additem';
import Filter from './Components/Filtre/Filter';
// import MovieCard from './Components/MovieCard/MovieCard';

function App() {
const [movies, setMovies] = useState([{
    poster :"/images/social_dl.jpg" ,
    title :"The Social Dilemma",
  //   posterUrl: "https://www.imdb.com/title/tt11464826/" ,
    description: "The Social Dilemma is a 2020 American docudrama film directed by Jeff Orlowski and written by Orlowski, Davis Coombe, and Vickie Curtis.",
    note : "8,8",
  },
  {
    poster: "/images/sr.jpg",
    title: "The Shawshank Redemption" ,
    description: "Le banquier Andy Dufresne est arrêté pour avoir tué sa femme et son amant. Après une dure adaptation, il tente d'améliorer les conditions de la prison et de redonner de l'espoir à ses compagnons",
  //   posterUrl: "https://www.imdb.com/title/tt0111161/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=JT66EPW4J8J79FDP2908&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_1",
  note : "8,8",

},
  {
    poster: "/images/dn.jpg",
    title: "The Dark Knight" ,
    description:"Lorsqu'une menace mieux connue sous le nom du Joker émerge de son passé mystérieux et déclenche le chaos sur la ville de Gotham, Batman doit faire face au plus grand des défis psychologique et physique afin de combattre l'injustice.",
  //   posterUrl:"https://www.imdb.com/title/tt0468569/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=JT66EPW4J8J79FDP2908&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_3",
  note : "9,0",

},
  {
    poster:"/images/fg.jpg",
    title:"Forrest Gump" ,
    description:"Les présidences de Kennedy et Johnson, le Vietnam, le Watergate et d'autres histoires se déroulent à travers la perspective d'un homme d'Alabama avec un QI de 75.",
  //   posterUrl:"https://www.imdb.com/title/tt0109830/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=JT66EPW4J8J79FDP2908&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_11",
  note : "6,8",

},
  {
    poster: "/images/incp.jpg",
    title : "Inception" ,
    description: "Un voleur qui s'approprie des secrets d'entreprise à l'aide d'une technique de partage de rêves se voit contraint d'effectuer la tâche inverse : implanter une idée dans l'esprit d'un PDG, pour revoir ses enfants.",
  //   posterUrl: "https://www.imdb.com/title/tt1375666/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=JT66EPW4J8J79FDP2908&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_13",
  note : "7,7",

},
  {
    poster:"/images/gm.jpg",
    title:"The Green Mile", 
    description: "La vie des gardes du couloir de la mort est touchée par l'un de leurs détenus: a homme noir accusé de meurtre et de viol d'enfants, doté d'un pouvoir mystérieux.",
  //   posterUrl: "https://www.imdb.com/title/tt0120689/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=JT66EPW4J8J79FDP2908&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_26",
  note : "7,8",

},

])
  return (
    <div>
    <div className='title_movie'>Movies </div>
     <Filter movies={movies} setMovies={setMovies}/>
    {/* <Additem add={add} /> */}
     </div>
  );
}

export default App;
