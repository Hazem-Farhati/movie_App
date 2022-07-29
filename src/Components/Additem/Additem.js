import './Additem.css'
import { useState } from "react";

const Additem = ({movies,setMovies}) => {
  const [show, setShow] = useState(false)
  const [newmovie, setNewmovie] = useState({
    title:"",
    description:"",
    poster:""

  });
  const handleSave = ()=>{setMovies([newmovie,...movies])}
  return (
    < >
  <button  className='add-btn' onClick={()=>setShow(true)}>
       Add ur movie
      </button>
      {  show? 
      
      <div className='all-inpt'>
        <input  className='inpt'  type="text" name="title" placeholder='add ur title' onChange={ (e) =>  setNewmovie({ ...newmovie, title: e.target.value, })}/>        
        <br /><input className='inpt' type="text" name="description" placeholder='add ur Description' onChange={ e => setNewmovie({ ...newmovie, description: e.target.value, })}/>
        <br /><input className='inpt' type="text" name="poster" placeholder='add ur Url' onChange={ e=>   setNewmovie({ ...newmovie, poster: e.target.value, })
}/>

      </div>  :null
      }
      { show?
      <button className='save-btn'  onClick={handleSave} >
            Save
          </button> 
          
          :null}
           { show?
             <button  className='close-btn button4' onClick={()=>setShow(false)}>
       X
      </button>
          :null};
    </>
  );
}

export default Additem