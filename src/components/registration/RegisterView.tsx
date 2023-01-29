import React, { useState } from "react";

const RegisterView = () => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("")

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("")

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event : any) => {
    event.preventDefault();

    fetch("https://pw-flatly.azurewebsites.net/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 0,
        username: username,
        email: email,
        password: password
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to register");
        }
        return res.json();
      })
      .then((data) => {
        setSuccess(true);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  function validateUsername(value: string) {
    if (value.length < 5)
    {
      setUsernameError('Username must be at least 5 characters long');
      return false;
    }
    setUsernameError('');
    return true;
  }

  function validateEmail(value: string) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(value))
    {
      setEmailError('Email must be a valid email address');
      return false;
    }
    setEmailError('');
    return true;
  }

  function validatePassword(value: string) {
    if (password.length < 5)
    {
      setPasswordError('Password must be at least 5 characters long');
      return false;
    }
    setPasswordError('');
    return true;
  }

  return (
  <div className="d-flex align-items-center h-100">
    
    <form className="m-auto" onSubmit={handleSubmit}>
      <h3 className="text-center mb-4">Registration</h3>
      <table className="table mb-0">
        <tbody>
          <tr>
            <td className={`font-weight-bold ${usernameError ? 'is-invalid' : ''}`}>Username:</td>
            <td>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onBlur={(e) => validateUsername(e.target.value)}
                required
              />
              {usernameError && <div className="text-danger">{usernameError}</div>}
            </td>
          </tr>
          <tr>
            <td className="font-weight-bold">Email:</td>
            <td>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={(e) => validateEmail(e.target.value)}
                required
              />
              {emailError && <div className="text-danger">{emailError}</div>}
            </td>
          </tr>
          <tr>
            <td className="font-weight-bold">Password:</td>
            <td>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={(e) => validatePassword(e.target.value)}
                required
              />
              {passwordError && <div className="text-danger">{passwordError}</div>}
            </td>
          </tr>
        </tbody>
      </table>
      <button type="submit" className="btn btn-primary mt-3">
        Register
      </button>
    </form>
  </div>
  );
};

export default RegisterView;