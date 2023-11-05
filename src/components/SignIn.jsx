import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Replace these default values with your actual authentication logic
    const defaultUsername = "user";
    const defaultPassword = "password";

    if (username === defaultUsername && password === defaultPassword) {
      // Successful sign-in, navigate to the FileList page
      navigate("/files");
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSignIn}>Sign In</button>
      </div>
    </div>
  );
};

export default SignIn;
