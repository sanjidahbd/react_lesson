import React, { useState } from 'react'


function Myform() {
    const[name,setName]=useState("Karimul");
    const handleChange=(e)=>{
        setName(e.target.value)

    }
       const handleSubmit=(e)=>{
      e.preventDefault();
      alert(name);

    }



  return (
    <>
    <div>Myform</div>
    <form onSubmit={handleSubmit}>
        <input type='text'onChange={handleChange} value={name} placeholder='Enter your name'/>
        
        <input type='submit'/>
 
    </form>
    </>
  )
}

export default Myform