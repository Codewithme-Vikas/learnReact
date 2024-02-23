import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const ResturantDetail = () => {
    // how to read a dynamic URL params
    // const { id } = useParams();
    const params = useParams();
    
    const [resturant, setResturant] = useState(null);

    useEffect(() => {
        fetchResturantData();
    }, []);


    async function fetchResturantData() {
        const responose = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${params.id}`);
        const data = await responose.json();
        setResturant(data?.data?.cards);
    };

    // console.log(resturant?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);


    return !resturant ? <Shimmer/> : (
        <div className="returant-detail-container">
            <div>
                <p>Resturant id : {resturant[2]?.card?.card?.info?.id}</p>
                <h2>Resturant name : {resturant[2]?.card?.card?.info?.name}</h2>
                <p>Name : {resturant[2]?.card?.card?.info?.slugs?.restaurant}</p>
                <h4>City : {resturant[2]?.card?.card?.info?.city}</h4>
                <p>costForTwoMessage : {resturant[2]?.card?.card?.info?.costForTwoMessage}</p>
            </div>

            <ul className="resturant-menu">
                {
                    resturant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map?.(ele => {
                        return (
                            <li key={ele.card.info.id}>
                                {ele?.card?.info?.name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
};

export default ResturantDetail