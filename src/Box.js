
import axios from 'axios'
import React, {  useState } from 'react'
import "./Card.css"


function Box() {
    const [state, setstate] = useState("");
    const [currtemp ,setcurrTemp] = useState("")
const [currTempf , setcurrTempF] = useState("")
const [Image,setImage] = useState("")

 
const d = new Date();
const date = d.getDate();
const month = d.getMonth();
const year = d.getFullYear();

const weekday = new Array(7);
{
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
}
  const dayName = weekday[d.getDay()];
  
    const handleChange = (e) => 
{
    setstate(e.target.value)
}

const searchData = async (e) => {
  e.preventDefault();


  // try{
  //   const res = await axios.get();
  // }catch(error){
  //   console.log(error, error.response, error.request);
  // }

  axios.get(`https://api.weatherapi.com/v1/current.json?key=fbc87cba90f343abaee42729211204&q=${state}&aqi=yes`).then((res) => {
            console.log(res);
            let proto  = res.data;

            
             
                     setcurrTemp( proto.current.temp_c);
                     setcurrTempF(proto.current.temp_f);
                     setImage(proto.current.condition.icon)
                   
                    
                  
}).catch((error)=>{
   
  console.log(error);

})
}

// git config --global user.email "you@example.com"
// git config --global user.name "Your Name"

    return (
        <div>
    <form onSubmit={searchData}>
        <input type = "text" onChange = {handleChange} />
        <button type='submit'>Search</button>
    </form>
  
    <div className='box'>
  <div className='wave -one'></div>
  <div className='wave -two'></div>
  <div className='wave -three'></div>
  <div className="weathercon">
    <i className='fas fa-sun' > 
      <img src={Image}  /> 
    </i>
  </div>
  <div className="info">
    <h2 className="location">{state}</h2>
    <p className="date">{dayName} | {date}|{month}|{year}</p>
    <h1 className="temp">{currtemp} &deg;C |{currTempf} &deg;F</h1>
  </div>
</div>

{/* */}

  
        </div>
    )
}

export default Box
