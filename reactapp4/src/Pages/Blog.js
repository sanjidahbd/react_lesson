import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Blog() {
    const[blogs,setBlogs]=useState([]);

    useEffect(()=>{
        getBlogs();
    },[]);
    function getBlogs(){
        axios.get("http://localhost/sanjida_ritu/ReactJs/reactapp4/api/blog/").then(function(response){
            // console.log(response.data);
            setBlogs(response.data);
        })
    }
  return (
    <div className='container-fluid py-5'>
       
        <div className='container'>
             <h1>Blog Items</h1>
             <table className='table table-boardered'>
                <tr>
                    <th>ID</th>
                    <th>title</th>
                    <th>Description</th>
                    </tr>
                    {blogs.map((blog)=>(

                        <tr>
                            <td>{blog.id}</td>
                            <td>{blog.title}</td>
                            <td>{blog.description}</td>
                        </tr>
                    ))}

                

             </table>


        </div>

    </div>
  )
}

export default Blog