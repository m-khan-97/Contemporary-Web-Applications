"use client";

import { auth } from "../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function AuthStatus() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        return onAuthStateChanged(auth, u => setUser(u));
    }, []);

    if (!user) return <p><em>Not Logged In</em></p>;

    return (
        <p>
            Logged in as: <strong>{user.displayName }</strong>
        </p>
    );
}