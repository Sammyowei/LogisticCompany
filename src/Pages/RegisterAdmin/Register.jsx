import React, { useState } from 'react';
import { account } from "../../appwrite";  // import Appwrite account
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle sign-up
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const user = await account.create('unique()', email, password); 

      
      console.log('User created:', user);

      navigate("/login");  
    } catch (err) {
      setError("Error signing up. Please try again.");
      console.error("Sign-up Error:", err);
    }
  };

  return (
    <div>
      <h2>Admin Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
