"use client";
import React from 'react';
import '../login/login.css';

export default function RegisterPage() {
  function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
    const confirmPassword = (form.elements.namedItem('confirmPassword') as HTMLInputElement).value;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Mock user creation
    const user = { email, password };
    localStorage.setItem('user', JSON.stringify(user));
    // Mock token
    const token = Math.random().toString(36).substring(2);
    localStorage.setItem('token', token);
    alert('Registration successful! You are now logged in.');
    window.location.href = '/';
  }

  return (
    <div className="login-container">
      <h1>Register</h1>
      <form className="login-form" onSubmit={handleRegister}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
