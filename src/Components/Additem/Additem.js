import './Additem.css'
import { useState } from "react";

const Additem = (props) => {
  const [movieList, setMovieList] = useState([{ movie: "" }]);

  const handleMovieChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...movieList];
    list[index][name] = value;
    setMovieList(list);
  };
  

  const handleMovieRemove = (index) => {
    const list = [...movieList];
    list.splice(index, 1);
    setMovieList(list);
  };

  const handleMovieAdd = () => {
    setMovieList([...movieList, { movie: "" }]);
  };

  return (
    <div className='poster' >

    <form className="App" autoComplete="off">
      <div className="form-field">
        <label htmlFor="movie">Movie(s)</label>
        {movieList.map((singleMovie, index) => (
          <div key={index} className="movies">
            <div className="first-division">
              <input
                name="movie"
                type="text"
                id="movie"
                value={singleMovie.movie}
                onChange={(e) => handleMovieChange(e, index)}
                required
              />
<br />
              <input
                name="description"
                type="text"
                id="movie"
                value={singleMovie.movie}
                onChange={(e) => handleMovieChange(e, index)}
                required
              />


              {movieList.length - 1 === index && movieList.length < 2 && (
                <button
                  type="button"
                  onClick={handleMovieAdd}
                  className="add-btn"
                >
                  <span>Add a Movie</span>
                </button>
              )}
            </div>
            <div className="second-division">
              {movieList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleMovieRemove(index)}
                  className="remove-btn"
                >
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="output">
        <h2>Output</h2>
        {movieList &&
          movieList.map((singleMovie, index) => (
            <ul key={index}>
              {singleMovie.movie && <li>{singleMovie.movie}</li>}
            </ul>
          ))}
      </div>
    </form>
    </div>
  );
}

export default Additem