import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import SearchByArtist, {loader as searchLoader} from "./components/SearchByArtist";
import AddSong, {action as addSongAction} from "./components/AddSong";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/searchByArtist/:artist",
        element: <SearchByArtist />,
        loader: searchLoader
    },
    {
        path: "/addsong",
        element: <AddSong />,
        action: addSongAction
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);