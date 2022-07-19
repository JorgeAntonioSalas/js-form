import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import axios from "axios";
import UsersList from "./components/UsersList";
import UsersForm from "./components/UsersForm";


function App(){

  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected ] = useState(null);
  

  useEffect(()=> {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then((res) => setUsers(res.data));
  },[]);

  const getUsers = ()=>{
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then((res) => setUsers(res.data));
  };



  const selectUser = (user)=>setUserSelected(user);
  const deselectUser = ()=>setUserSelected(null);

  /* aaaaaaaaaaaa */
  const deleteUser=(

  )=>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`)
    .then(() => {
      getUsers();
      deselectUser();
  });
    };
  


  

  
  

return (
        <div className='App container mt-5'>
          <UsersForm 
            getUsers={getUsers} 
            userSelected={userSelected}
            deselectUser={deselectUser}
            deleteUser={deleteUser}
            

            
          />
          <UsersList 
            users={users} 
            selectUser={selectUser}
            deleteUser={deleteUser}
          />
          
        </div>
    );
};


 export default App;