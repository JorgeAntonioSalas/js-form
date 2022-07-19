import React from 'react';
import "../App.css";

const UsersList = ({users, selectUser, deleteUser}) => {
    return (
        <ul className='list-group'>
            {
                users.map(user=>(
                    <li key={user.id} className='list-group-item'>
                       <h3>{user.first_name} {user.last_name}</h3>
                        <p><b>Email: </b>  {user.email}</p>
                        <p><b>Birthday: </b>  {user.birthday}</p> 
                        <button onClick={()=>selectUser(user)} className='btn btn-warning'>
                            Edit
                        </button>
                         
                    </li>

                ))
            }
        </ul>
    );
};

export default UsersList;