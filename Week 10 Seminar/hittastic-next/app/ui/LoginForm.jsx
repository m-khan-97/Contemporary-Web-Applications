"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [status, setStatus] = useState("");

async function handleLogin(e) {
  e.preventDefault();

  try {
    await signInWithEmailAndPassword(auth, email, pw);
    setStatus("Logged in!");
    router.push("/");
  } catch (err) {
    setStatus("Error: " + err.message);
  }
}

  return (
    <form onSubmit={handleLogin}>
      <p>
        Email: <br />
        <input value={email} onChange={e => setEmail(e.target.value)} />
      </p>

      <p>
        Password: <br />
        <input type="password" value={pw} onChange={e => setPw(e.target.value)} />
      </p>

      <button type="submit">Login</button>
      {status && <p><strong>{status}</strong></p>}
    </form>
  );
}