// app/layout.jsx
import "./globals.css";
import LogoutButton from "./ui/LogoutButton";
import AuthStatus from "./ui/AuthStatus";


export const metadata = {
  title: "HitTastic! Next + Firebase Crash Course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="ht-header">
          <img src="/hittastic.png" alt="HitTastic logo" className="ht-logo" />
          <div>
            <h1>HitTastic!</h1>
            <p className="ht-tagline">
              Search and add your favourite top 40 hits.
            </p>
          </div>
        </header>

        <div className="ht-layout">
         <nav className="ht-nav">
            <a href="/">Home</a>
            <a href="/search">Search</a>
            <a href="/add">Add Song</a>
            <a href="/login">Login</a>
            <a href="/signup">Signup</a>

  {/* Shows "Logged in as ..." & Logout button */}
            <AuthStatus />
            <LogoutButton />
        
</nav>
          <main className="ht-main">{children}</main>
        </div>
      </body>
    </html>
  );
}