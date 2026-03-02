import React, {useState} from "react";

export default function Login ({username, onLoginSuccess, onLogout}) {
    const [loginUsername, setLoginUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    return (
        <div style={{marginBottom: '12px'}}>
            <h3>Login</h3>
            {username ? (
                <div>
                    <p>Logged in as : {username}</p>
                    <button type="button" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            ) : (
                <div>
                    <label htmlFor="login-username">Username:</label>
                    <br />
                    <input
                        id="login-username"
                        value={loginUsername}
                        onChange={(e) => setLoginUsername(e.target.value)}
                    />
                    <br />
                    <label htmlFor="login-password">Password</label>
                    <br />
                    <input
                        id="login-password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button type="button" onClick={handleLogin}>
                        Login
                    </button>
                    {error ? <p style={{color: 'red'}}>{error}</p> : null}
                    </div>
            )}
        </div>
    );

    async function handleLogin() {
        setError('');
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    username: loginUsername,
                    password
                })
            });
            const data = await response.json();
            if (!response.ok) {
                setError(data?.error || 'Login Failed')
                return
            }
            onLoginSuccess(data.username);
            setPassword('');
        } catch (e) {
            setError('Network error during login')
        }
    }

    async function handleLogout() {
        await fetch('/logout', {
            method: 'POST'
        });
        onLogout();
        setLoginUsername('');
        setPassword('');
        setError('')
    }
}