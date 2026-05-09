"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function SearchForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleSearch() {
    const artist = document.getElementById("artist").value;
    const params = new URLSearchParams(searchParams);

    params.set("artist", artist);

    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      <h3>Search for an Artist</h3>
      <input id="artist" placeholder="Artist name..." />
      <button onClick={handleSearch}>Go</button>
    </div>
  );
}