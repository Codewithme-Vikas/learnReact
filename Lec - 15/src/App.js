import React, { lazy, Suspense } from "react";
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
import Cart from "./components/Cart.js";

// lazy loading, dynamic bundling , chunking , on demand import , dynamic import , code spiliting
const InstaMart = lazy(() => import("./components/Instamart.js"))

import UserInfoContextProvider from "./context/UserInfoContext.js";

import store from "./slices/store.js"
import { Provider } from "react-redux";

const AppLayout = () => {



    return (
        <React.Fragment>
            <Provider store={store}>
                <UserInfoContextProvider>
                    <Header />
                    {/* render body or about page or contact page */}
                    <Outlet />
                    <Footer />
                </UserInfoContextProvider>
            </Provider>
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
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <InstaMart />
                    </Suspense>
                ),
            },
            {
                path: "cart",
                element: <Cart />
            }
        ]
    },

]);


const root = ReactDOM.createRoot(document.getElementById("root"));

// render element
root.render(< RouterProvider router={router} />);