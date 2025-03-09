import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useSignup from "../hooks/useSignup";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
  const { signup, error, loading } = useSignup();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await signup(data.email, data.password);
    reset();
  };
  const handleShowHidePassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Sign Up</h2>
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
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type={`${showPassword ? 'text' : 'password'}`}
              id="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            <div onClick={handleShowHidePassword} className='show-hidden-password'>
                            {!showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                        </div>
            {errors.password && (
              <span className="error">{errors.password.message}</span>
            )}
          </div>
          <button disabled={loading} type="submit" className="auth-button">
            Sign Up
          </button>
        </form>
        <p className="auth-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
