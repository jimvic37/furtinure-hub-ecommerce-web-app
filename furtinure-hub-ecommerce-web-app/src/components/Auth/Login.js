import React, { useState } from 'react';
import { navigateTo } from './Navigation'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [mockUserData, setMockUserData] = useState([
    { name: 'Ethan', email: 'sample1@email.com', password: 'password1' },
    { name: 'Ethan', email: 'sample2@email.com', password: 'password2' }
  ]);

  const handleLogin = () => {
    // Check if the entered email and password match any user in the mock data
    const user = mockUserData.find((user) => user.email === email && user.password === password);

    // Simulate a successful login
    if (user) {
      // Use the custom navigation function to navigate to the home page (or any other page you want to navigate to after login)
      navigateTo('/');
    } else {
      // Simulate a login error
      setError('Invalid email or password');
    }
  };

  const handleRegisterClick = () => {
    // Use the custom navigation function to navigate to the registration page
    navigateTo('/register');
  };

  return (
    <div>
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? <span onClick={handleRegisterClick}>Register</span></p>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
