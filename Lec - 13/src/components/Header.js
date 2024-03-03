import { Link } from "react-router-dom";
import foodVilla from "../asset/img/foodVilla.png"



// a variable
const Logo = <img src={foodVilla} className="w-20" />

// a component
const NavItems = () => (
    <div className="nav-items">
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About Us</li></Link>
            <Link to="/contact"><li>Contact Us</li></Link>
            <Link to="/cart"><li>Cart</li></Link>
            <Link to="/instamart"><li>instaMart</li></Link>
        </ul>
    </div>
);

const Header = () => {

    return (<div className="header">
        {Logo}
        <NavItems />
    </div>
    )
}

export default Header;