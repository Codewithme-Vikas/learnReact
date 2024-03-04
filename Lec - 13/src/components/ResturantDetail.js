import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import useFetchResturantDetail from "../hooks/useFetchResturantDetail";

const ResturantDetail = () => {
    
    const params = useParams();

    // console.log("resturant detail before.")
    
    const resturant = useFetchResturantDetail(params.id);
    
    // console.log("resturant detail  after, resturant value is - ", resturant )


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
                    resturant[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map?.(ele => {
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