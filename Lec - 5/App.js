import React from "react";
import ReactDOM, { createRoot } from 'react-dom/client'

// a variable
const Logo = <h1 className="title">FoodVilla</h1>

// a component
const NavItems = () => (
    <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
    </div>
);

const Header = () => (
    <div className="header">
        {Logo}
        <NavItems />
    </div>
)

const resturantData = [
    {
        name: "Burger King",
        img: "",
        cusines: ["Burgers", "American"],
        rating: 4.2
    },
    {
        name: "KFC",
        img: "",
        cusines: ["American", "Snacks"],
        rating: 4.0
    },
    {
        name: "Edly",
        img: "",
        cusines: ["South Indian", "Rice"],
        rating: 4.9
    },
    {
        name: "Dosa",
        img: "",
        cusines: ["Indian", "Spicy"],
        rating: 4.7
    }
]


const ResturantCard = (props) => { // 'props' name is not mandatory
    return (
        <div className="card">
            <img src={props.resturant?.img} alt="Img" />
            <h2>{props.resturant?.name}</h2>

            {/* { New to me , next line code - array just directly print inside JSX } */}
            <h3>{props.resturant?.cusines.join(", ")} </h3>
            <h4>{props.resturant?.rating} stars</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="card-container">

            {/* { ResturantCard( resturantData[0] ) } */} {/*This is also work*/}

            {
                resturantData.map((resturant,index) => (
                    <ResturantCard key={index} resturant={resturant} />
                ))
            }
            <ResturantCard resturant={resturantData[0]} />
            <ResturantCard resturant={resturantData[1]} />
            <ResturantCard resturant={resturantData[2]} />
            <ResturantCard resturant={resturantData[3]} />
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <p>copyright is reserved by VikasTech</p>
        </div>
    )
}
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
root.render(<AppLayout />);