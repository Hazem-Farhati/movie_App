
const Additem = (props) => {
  return (
    <div className='poster' >
      
    <img className='MoviCard-poster'
     src={props.poster}
     alt="a" />
    <div  >
      <input type="text" placeholder="Add ur title" id="title" />
      <br /><input type="text" placeholder="Add ur description" id="description" />
      <br />
      <input type="Submit" value="Add " />

      <h3>{props.rating}</h3>
    </div>
        </div>
       
  )
}

export default Additem