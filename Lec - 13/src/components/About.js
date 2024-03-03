import { Outlet } from "react-router-dom";

const About = () =>{
    return(
        <div>
            <h1>About us</h1>
            <p>This is React learning lecture 10 - Let's classify </p>

            <Outlet/>
        </div>
    )
};

export default About;