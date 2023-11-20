import { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { useAuth } from "../auth/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { API_URL } from "../auth/constants";
import { AuthResponseError } from "../types/types";
import '../index.css';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const [errorResponse, setErrorResponse] = useState("");
  const goTo = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const accessToken = data.accessToken;

        // Almacena el token en el localStorage
        localStorage.setItem("accessToken", accessToken);

        // Almacena el token en el contexto de autenticación
        auth.setAccessToken(accessToken);

        console.log("Login successfully");
        setErrorResponse("");

        goTo("/");
      } else {
        console.log("Something went wrong");
        const json = await response.json() as AuthResponseError;
        setErrorResponse(json.body.error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (auth.isAuthenticated) {
    // Si el usuario ya está autenticado, redirige al dashboard
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <DefaultLayout>
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="ls">Login</h1>
          {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
          <label>
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button>Login</button>
        </form>
      </DefaultLayout>
    </>
  );
}