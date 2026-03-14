import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Search from './components/search.jsx';
import AddSong from './components/addsong.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/search",
        element: <Search />
    },
    {
        path: "/addsong",
        element: <AddSong />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
