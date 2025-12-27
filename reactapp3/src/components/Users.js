import React from 'react'
import { age, name } from './Person';

function Users() {
    const users =[
        { id: 1,name: "Rahim",email: "rahim@gmail.com" },
        { id: 2,name: "karim",email: "karim@gmail.com "},
        { id: 3,name: "Hasib",email: "hasib@gmail.com" }
    ];
  return (
    <>

    <h1>Users</h1>
    <ul>

   { users.map(user =>{
   return(<li key={user.id}>{user.id}:{user.name},{user.email}</li>)

   }

   )
}
<h1>We imported name:{name} and his age{age}</h1>
</ul>
    </>
  )
}

export default Users