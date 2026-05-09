import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

export default async function Page({ searchParams }) {
    const params = await searchParams;
    const artist = params.artist || "";

    return (
        <div>
            <h1>Search for Artist</h1>

            <SearchForm />
            <SearchResults artist={artist} />
        </div>
    );
}
