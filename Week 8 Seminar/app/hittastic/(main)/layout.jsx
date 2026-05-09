import Link from "next/link";

export default function MainLayout({ children }) {
  return (
    <div id="container">
      <aside id="nav">
        <h2>HitTastic!</h2>

        <p><Link href="/hittastic">Home</Link></p>
        <p><Link href="/hittastic/search">Search Songs</Link></p>
        <p><Link href="/hittastic/add">Add Song</Link></p>
        <p><Link href="/hittastic/slow">Slow Page</Link></p>
        <p><Link href="/hittastic/logout">Logout</Link></p>
      </aside>

      <main className="content-panel">{children}</main>
    </div>
  );
}
