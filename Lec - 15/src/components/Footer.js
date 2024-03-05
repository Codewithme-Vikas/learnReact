import { useContext } from "react";

import { UserInfoContext, cartContext } from "../context/UserInfoContext"


const Footer = () => {
    const { user, setUser } = useContext(UserInfoContext);
    // console.log("footer" , user?.user , cartCount)
    return (
        <div className="mt-4">
            <p>copyright is reserved by VikasTech</p>
            <p className="m-4 text-xl font-semibold italic">{user?.user?.name} </p>
            <p className="m-4 text-lg font-semibold italic">{user?.user?.email}</p>
            <input type="text" value={ user?.user?.name } className="border border-red-400" 
                onChange={ (e)=> setUser( { user : {...user.user, name : e.target.value }} ) }
            />
        </div>
    )
};

export default Footer;