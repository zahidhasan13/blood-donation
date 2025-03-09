import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useLogin from '../hooks/useLogin';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { login, error, loading } = useLogin();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await login(data.email, data.password);
    reset();
  };

  const handleShowHidePassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Login</h2>
        {error && (
          <p className="error" style={{ textAlign: "center" }}>
            {error}
          </p>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <span className="error">{errors.email.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type={`${showPassword ? 'text' : 'password'}`}
              id="password"
              placeholder="Enter your password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
            />
            <div onClick={handleShowHidePassword} className='show-hidden-password'>
                {!showPassword ? <IoMdEye /> : <IoMdEyeOff />}
            </div>
            {errors.password && <span className="error">{errors.password.message}</span>}
          </div>
          <button disabled={loading} type="submit" className="auth-button">
            Login
          </button>
        </form>
        <p className="auth-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;