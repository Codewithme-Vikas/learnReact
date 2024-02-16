import React from "react";


const Title = () => (
    <h1 id="title" key="title">
        Learning JSX and Components
    </h1>
);

const HeadingComponent = ()=>{
    return(
        <div className="container">
            { Title() }
            <Title/>

            <h2>JSX is not HTML inside the JS</h2>
            <h3>Functional component is just a function which return react element.</h3>
            <b>JSX = React element = Object = HTML (DOM)</b>
        </div>
    )
}

const root = ReactDOM.createRoot( document.getElementById("root"));

// root.render( reactElement )
// root.render( <Component/> );
root.render( <HeadingComponent/> );