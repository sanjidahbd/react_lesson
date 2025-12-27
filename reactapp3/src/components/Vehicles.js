import React from 'react'

function Vehicles() {
    const vehicles=["Totota","Rickshaw","Truck","Bus","Cycle"];
    const[x, y, z]=vehicles; //destructuring
  return (
    <div>
       <h1>Vehicles</h1> 
       Our First Vehicles is {x}<br/>
       Our Second Vehicles is {y}<br/>
       Our Second Vehicles is {z}<br/>
        

        </div>
  )
}

export default Vehicles