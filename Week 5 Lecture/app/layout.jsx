import NavBar from "../components/NavBar";

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body style={{ fontFamily: "Arial, sans-serif", margin: "20px"}}>
                <NavBar />
                {children}
            </body>
        </html>
    );
}