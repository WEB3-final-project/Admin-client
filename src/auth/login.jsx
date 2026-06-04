import { useLogin, useNotify } from "react-admin";
import { useState } from "react";
import { Link } from "react-router-dom";

export function LoginPage() {
  const login = useLogin();
  const notify = useNotify();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login({
        email,
        password,
      });
    } catch {
      notify("Email ou mot de passe invalide", {
        type: "error",
      });
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: 400,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <h2>Connexion</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Se connecter
        </button>

        <div style={{ textAlign: "center" }}>
          Pas encore de compte ?
          {" "}
          <Link to="/signup">
            Créer un compte
          </Link>
        </div>
      </form>
    </div>
  );
}