import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

export default function Page({ searchParams }) {
  const artist = searchParams.artist || "";

  return (
    <div>
      <h1>Search Songs</h1>

      <SearchForm />

      <SearchResults artist={artist} />
    </div>
  );
}