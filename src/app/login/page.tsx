import React from 'react';
import './login.css';
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
      
        <button type="submit">Login</button>
      </form>

      <p className="mt-5">
        Don't have an account? <Link href="/register" className="register-link pointer">Register here.</Link>
      </p>
    </div>
  );
}
