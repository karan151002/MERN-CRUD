import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Get = () => {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/get');
        setUsers(response.data.user);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email}
            <br />
            <Link to={`/get/${user._id}`}>
              <button>View Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Get;
