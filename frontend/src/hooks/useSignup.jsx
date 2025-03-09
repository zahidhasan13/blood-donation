import React, { useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  const signup = async ( email, password ) => {
    setLoading(true);
    setError("");

    const response = await fetch("http://localhost:8400/api/user/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
      setLoading(false);
      return;
    }
    if (response.ok) {
      dispatch({ type: "LOGIN", payload: data });
      localStorage.setItem("user", JSON.stringify(data));
      setLoading(false);
      navigate("/");
    }
  };
  return { signup, error, loading };
};

export default useSignup;
