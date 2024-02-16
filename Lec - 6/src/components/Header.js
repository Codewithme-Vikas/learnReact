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

export default Header;