import React, { useState, useEffect } from "react";
import axios from 'axios';

/*
    Do api request to: https://jsonplaceholder.typicode.com/users
*/

export default function Axios() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const fetch = () => {
            axios.get('https://jsonplaceholder.typicode.com/users')
                 .then(response =>{
                    console.log(response.data);
                    setUsers(response.data);
                 });
        }

        fetch();
    }, []);

    return (
        <div className="Axios">
            <ul>
                {users.map(user =><li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    );
}