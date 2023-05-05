import { useState } from "react";
import { useLogin } from "../Hooks/useLogin";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { logIn, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await logIn(email, password);
  };
  return (
    <div>
      <form className="login" onSubmit={handleSubmit}>
        <h3>Log in</h3>
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
        <button disabled={isLoading}>Log In</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default LogIn;
