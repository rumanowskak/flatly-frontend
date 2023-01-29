import React, { useState } from "react";

const LoginView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event : any) => {
    event.preventDefault();
    fetch("https://pw-flatly.azurewebsites.net/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        username: username, 
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to login");
        }
        return response.json();
      })
      .then((data) => {
        setSuccess(true);
        console.log(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="d-flex align-items-center h-100">
    <form className="m-auto" onSubmit={handleSubmit}>
      <h3 className="text-center mb-4">Login</h3>
      <table className="table mb-0">
        <tbody>
          <tr>
            <td className="font-weight-bold">Username:</td>
            <td>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td className="font-weight-bold">Password:</td>
            <td>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button type="submit" className="btn btn-primary mt-3">
        Login
      </button>
      {error && <p>{error}</p>}
      {success && <p>Success!</p>}
    </form>
  </div>
  );
};

export default LoginView;