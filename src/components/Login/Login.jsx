import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate(); // 👈

  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        setMsg(data.msg || 'Login failed');
      } else {
        setMsg('Login successful!');
        localStorage.setItem('token', data.token);
        navigate('/home'); // 👈 redirect to /home
      }
    } catch (err) {
      setMsg('Server error');
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome To DevSpark</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
        {msg && <p className="message">{msg}</p>}
      </form>
    </div>
  );
};

export default Login;
