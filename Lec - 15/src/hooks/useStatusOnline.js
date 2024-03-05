import { useEffect, useState } from "react";

const useStatusOnline = ()=>{

    const [ isOnline , setIsOnline ] = useState(true);

    // console.log("hook inside")

    useEffect( ()=>{

        // console.log( "add event listners");

        function handleOnline(){ setIsOnline(true) };
        function handleOffline(){ setIsOnline(false) };
        
        window.addEventListener("online",handleOnline );

        window.addEventListener("offline", handleOffline );

        return ()=>{
            // console.log("remove listner")
            window.removeEventListener("online",handleOnline)
            window.removeEventListener("offline", handleOffline)
        }

    },[] );

    return isOnline;
};

export default useStatusOnline;