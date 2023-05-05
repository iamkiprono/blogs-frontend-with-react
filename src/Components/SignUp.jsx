import { useState } from "react";
import { useSignup } from "../Hooks/useSignUp";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {error, isLoading, signUp} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    await signUp(email, password)

  };
  return (
    <div>
      <form className="signup" onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button disabled={isLoading}>Sign Up</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default SignUp;
