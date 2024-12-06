import React, { useState } from 'react';
import axios from 'axios';

const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, password };

    try {
      const response = await axios.post('http://localhost:5000/create', formData);
      console.log(response)

      if (response.data) {
        alert('User created successfully');
      } else {
        alert('Error occurred while creating user');
      }

      // Reset the form fields
      setName('');
      setEmail('');
      setPassword('');

      console.log(response.data);
    } catch (error) {
      console.error('Error while creating user:', error);
      alert('Error occurred while creating user');
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
