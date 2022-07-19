import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UsersForm = ({getUsers, userSelected, deselectUser, deleteUser}) => {

    const [first_name, setFirst_Name] = useState('');
    const [last_name, setLast_Name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthday, setBirthday] = useState('');


    useEffect(()=>{
        if(userSelected !== null){
            setFirst_Name(userSelected.first_name);
            setLast_Name(userSelected.last_name);
            setEmail(userSelected.email);
            setPassword(userSelected.password);
            setBirthday(userSelected.birthday);
        } else {
            setFirst_Name('');
            setLast_Name('');
            setEmail('');
            setPassword('');
            setBirthday('');
        }
    },[userSelected]);

    

    const submit=e=>{
        e.preventDefault();
        const user = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            birthday: birthday
        }
        if(userSelected !== null){
            alert('Editing / Deleting...')
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
            .then(() => {
                getUsers();
                deselectUser();
            });
        } else {
        axios.post('https://users-crud1.herokuapp.com/users/', user)
            .then(()=>getUsers())
            .catch(error=>console.log(error.response));
        }

    }

     






    return (
        <div>
            <form onSubmit={submit} className='mb-5'>
            <div className='d-flex'>   
            <div className="mb-3 w-50 pe-2">
                <label htmlFor="first_name" className="form-label">
                   First Name
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    onChange={e=>setFirst_Name(e.target.value)}
                    value={first_name}  
                />      
            </div>

            <div className="mb-3 w-50 pe-2">
                <label htmlFor="last_name" className="form-label">
                    Last Name
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="lastname" 
                    onChange={e=>setLast_Name(e.target.value)}
                    value={last_name}  
                />      
            </div>
            </div> 

            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input 
                    type='email' 
                    className="form-control" 
                    id="email" 
                    onChange={e=>setEmail(e.target.value)}
                    value={email}
                />      
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    onChange={e=>setPassword(e.target.value)}
                    value={password}
                />      
            </div>

            <div className="mb-3">
                <label htmlFor="birthday" className="form-label">
                    Birthday
                </label>
                <input 
                    type='date' 
                    className="form-control" 
                    id="birthday" 
                    onChange={e=>setBirthday(e.target.value)}
                    value={birthday}
                />      
            </div>

            <button type="submit" className="btn btn-primary">Submit/Update</button>
            <button onClick={(user)=>deleteUser(user)} className='btn btn-warning'>
                            Delete
                        </button>
            </form>
            
        </div>
    );
};

export default UsersForm;