import React, { lazy, Suspense, useContext, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'

import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import About from "./components/About"
import Contact from "./components/Contact.js"
import ErrorPage from "./components/ErrorPage.js"
import Profile from "./components/Profile.js";
import ResturantDetail from "./components/ResturantDetail.js";

// lazy loading, dynamic bundling , chunking , on demand import , dynamic import , code spiliting
const InstaMart = lazy(() => import("./components/Instamart.js"))

import { UserInfoContext } from "./context/UserInfoContext.js";


const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            {/* render body or about page or contact page */}
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}

// routing configuration
const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                        path: "profile", // '/profile' => localhost:1234/profile
                        element: <Profile name="Vikas" />,  // always put <Outlet/> in parent component to render child component
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "resturant/:id",
                element: <ResturantDetail />
            },
            {
                path: "instamart",
                element: (
                    <Suspense fallback={ <h1>Loading...</h1>}>
                        <InstaMart />
                    </Suspense>
                ),
            }
        ]
    },

]);


const root = ReactDOM.createRoot(document.getElementById("root"));

// render element
root.render(< RouterProvider router={router} />);