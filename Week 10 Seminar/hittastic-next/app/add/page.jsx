"use client";

import { auth } from "../../lib/firebase";
import AddSongForm from "../ui/AddSongForm";
import { useEffect, useState } from "react";

export default function Page() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(u => setUser(u));
    return () => unsub();
  }, []);

  if (user === null) {
    return (
      <div className="ht-card">
        <h2>Access Denied</h2>
        <p>You must be logged in to add Song</p>
        <p><a href="/login">Go to Login</a></p>
      </div>
    );
  }

  return (
    <div className="ht-card">
      <h2>Add a New Song</h2>
      <AddSongForm />
    </div>
  );

}