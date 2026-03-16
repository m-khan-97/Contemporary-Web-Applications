import Link from "next/link";

export default function NavBar() {
    return (
        <nav style={{marginBottom: "20px "}}>
            <Link href="/">Home | </Link>
            <Link href="/about"> About |</Link>
            <Link href="/artist/Oasis"> Oasis |</Link>
            <Link href="/login"> Login |</Link>

        </nav>
    );
}
