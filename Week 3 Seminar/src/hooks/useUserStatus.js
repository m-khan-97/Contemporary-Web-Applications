import { useState, useEffect } from "react";

export default function useUserStatus() {
    const [userInfo, setUserInfo] = useState({username: null, isadmin: false });

    useEffect(() => {
        fetch('/login')
        .then(res => res.json())
        .then(data => {
            if (data.username) {
                setUserInfo({username: data.username, isadmin: data.isadmin})
            }
        })
        .catch(err => console.error('Error fetching login status', err))
    }, []);

    return [userInfo, setUserInfo]
}