"use client";

import {auth} from "../../lib/firebase";
import { signOut } from "firebase/auth";

export default function LogoutButton() {
    return (
        <button
            onClick={() => signOut(auth)}
            style={{marginTop: "10px"}}
        >
            Logout
        </button>
    );
}