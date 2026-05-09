// app/search/page.jsx
import SearchSongs from "../ui/SearchSongs";

export default function Page() {
  return (
    <div className="ht-card">
      <h2>Search Songs by Artist</h2>
      <SearchSongs />
    </div>
  );
}