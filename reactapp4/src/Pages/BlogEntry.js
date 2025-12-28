import axios from 'axios';
import React, {  useState } from 'react'

function BlogEntry() {
    const[inputs,setInputs]=useState({});
    function handleChange(e){
       let name = e.target.name;
      let value = e.target.value;
      setInputs(values => ({...values, [name]:value}))
    }
    // useEffect(()=>{
       
    //   },[]);

    function handleSubmit(e){
        e.preventDefault();
       blogPost();

      
    }
  const blogPost = () =>{
    axios.post("http://localhost/sanjida_ritu/ReactJs/reactapp4/api/blog/addBlog.php",inputs).then(function(response){
       alert(response.data)

    })

    }
  return (
    <div className='container'>
    <h2>Blog Entry</h2>
    <form className='form' onSubmit={handleSubmit}>
        <input type='text' name='title' value={inputs.title} onChange={handleChange} className='form-control' placeholder='Enter Title'/><br/>
        <textarea name='description' value={inputs.description}  onChange={handleChange} className='form-control'></textarea><br/>
        <input type='submit' className='btn btn-primary' value='submit'/>
    </form>

    {console.log(inputs)}
    
    </div>
  )
}

export default BlogEntry