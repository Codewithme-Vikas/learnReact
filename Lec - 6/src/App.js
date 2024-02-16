import React from "react";
import ReactDOM from 'react-dom/client'

// Default import & Named import
// import * as Obj from "./components/Header.js" => can use Obj.Header or Obj.title
import Header from "./components/Header.js";

import Body from "./components/Body.js";
import Footer from "./components/Footer.js";




// JSX expresions only must have one parent
const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

// render element
root.render(< AppLayout />);