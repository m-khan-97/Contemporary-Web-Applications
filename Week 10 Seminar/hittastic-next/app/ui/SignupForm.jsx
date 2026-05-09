"use client";

import { useState } from "react";


export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const [status, setStatus] = useState("");

//   To do

  return (
    <form onSubmit={handleSignup}>
      <p>
        Name: <br />
        <input value={name} onChange={e => setName(e.target.value)} />
      </p>

      <p>
        Email: <br />
        <input value={email} onChange={e => setEmail(e.target.value)} />
      </p>

      <p>
        Password: <br />
        <input type="password" value={pw} onChange={e => setPw(e.target.value)} />
      </p>

      <button type="submit">Create Account</button>

      {status && <p><strong>{status}</strong></p>}
    </form>
  );
}