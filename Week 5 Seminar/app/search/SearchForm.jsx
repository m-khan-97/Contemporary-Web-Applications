"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchForm() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch() {
        const artist = document.getElementById("artist").value;
        
        const params = new URLSearchParams(searchParams);
        params.set("artist", artist);

        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div>
            <input id="artist" placeholder="Enter artist name" />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}