import { useRouteError } from "react-router-dom";

const ErrorPage = ()=>{
    const error = useRouteError();

    return(
        <div>
            <h1>Oops!</h1>
            <p>Something went wrong</p>
            <p>{ error.data}</p>        
            <p>{error.status}</p>        
            <p>{error.statusText}</p>        
        </div>
    )
};

export default ErrorPage;