import { useEffect, useState } from "react";

const useFetchResturantDetail = (resId) => {

    const [resturant, setResturant] = useState(null);

    // console.log( "custom hook")

    useEffect(() => {
        // console.log("useEffect , inside custom hook")
        fetchResturantData(resId)
    }, []);


    async function fetchResturantData(resId) {
        const responose = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${resId}`);
        const data = await responose.json();
        setResturant(data?.data?.cards);
    };

    return resturant;
};


export default useFetchResturantDetail;