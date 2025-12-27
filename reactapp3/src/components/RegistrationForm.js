import React, { useState } from "react";

function RegistrationForm() {
  const [inputs, setInputs] = useState({});
  const handleChange =(e)=>{
    const name= e.target.name;
    const value= e.target.value;
    setInputs(values =>({...values,[name]:value

    }))

  }
  return (
    <>
      <h1>RegistrationForm</h1>
      <form>
        <input type="text" name="fullname" onChange={handleChange} placeholder="Enter Full name" />
        <br />
        <input type="number" name="age" onChange={handleChange} placeholder="Enter age" />
        <br />
             <input type="radio" name="gender" onChange={handleChange} value="gender"/>Male<br/>
             <input type="radio" name="gender" onChange={handleChange} value="gender"/>Female<br/>
        <select name="district" onChange={handleChange}>
          <option>Select one</option>
          <option>Dhaka</option>
          <option>Shylet</option>
        </select>
      </form>
      {console.log(inputs)}
    </>
  );
}

export default RegistrationForm;
