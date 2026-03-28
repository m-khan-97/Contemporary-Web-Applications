import './style.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <div id='imgdiv'>
                    <img src='/Hittastic.png' alt='Hittastic Logo' width="200" />
                </div>

                {/* {Navigation} */}
                <nav style={{textAlign: "center", marginBottom: "20px "}}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/search">Search</Link>
                </nav>
                {children}
            </body>
        </html>
    );
}