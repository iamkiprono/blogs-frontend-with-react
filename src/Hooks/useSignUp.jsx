import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { dispatch } = useAuthContext();

  const signUp = async (email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://blog-api-kiprono.onrender.com/user/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const res = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(res.error);
        
      }
      if (response.ok) {
        // save user to local storage
        localStorage.setItem("user", JSON.stringify(res));

        // update authcontext
        dispatch({ type: "LOGIN", payload: res });
        setIsLoading(false);
        
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };
  return { signUp, error, isLoading };
};
