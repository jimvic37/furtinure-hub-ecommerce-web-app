import React, { useState } from 'react';
import { navigateTo } from './Navigation'; 

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const [mockUserData, setMockUserData] = useState([
    { name: 'Ethan', email: 'sample1@email.com', password: 'password1' },
    { name: 'Ethan', email: 'sample2@email.com', password: 'password2' }
  ]);

  const handleRegister = () => {
    // Check if the email is already registered
    if (mockUserData.some((user) => user.email === email)) {
      setError('Email already registered');
    } else {
      // If the email is not already registered, add the new user to the mock data
      const newUser = { name, email, password };
      setMockUserData([...mockUserData, newUser]);

      // Simulate a successful registration
      setIsRegistered(true);
    }
  };

  const handleLoginClick = () => {
    // Use the custom navigation function to navigate to the login page
    navigateTo('/login');
  };

  return (
    <div>
      <h2>Register</h2>
      {isRegistered ? (
        <p>Registration successful! You can now log in.</p>
      ) : (
        <>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleRegister}>Register</button>
          <p>Already have an account? <span onClick={handleLoginClick}>Login</span></p>
          {error && <p>{error}</p>}
        </>
      )}
    </div>
  );
}

export default Register;
