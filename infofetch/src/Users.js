import React, { useEffect, useState } from 'react';
import './App.css';


const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=148')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      });
  }, []);

  return (
   
    <div className="users-container">    
      {loading ? (
        <div className="spinner"></div>
      ) : (
        
        users.map((user) => (
          <div key={user.login.uuid} className="user-card">
            <div className="user-image">
              <img src={user.picture.large} alt="User" />
            </div>
            <h2>{`${user.name.first} ${user.name.last}`}</h2>
            <p>Age: {user.dob.age}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Users;