import { useState } from "react";
import style from "./index.module.css";
const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event: any) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className={style.neumorphismForm}>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className={style.neumorphismInput}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            className={style.neumorphismInput}
          />
        </label>
        <br />
        <button type="submit" className={style.neumorphismButton}>
          Login
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
