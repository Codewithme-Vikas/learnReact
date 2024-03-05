import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import useFetchResturantDetail from "../hooks/useFetchResturantDetail";
import { useDispatch } from "react-redux";
import { addItem } from "../slices/cartSlice";

const ResturantDetail = () => {
    
    const params = useParams();

    // console.log("resturant detail before.")
    
    const resturant = useFetchResturantDetail(params.id);
    
    // console.log("resturant detail  after, resturant value is - ", resturant )

    const dispatch = useDispatch();

    return !resturant ? <Shimmer/> : (
        <div className="flex gap-3 shadow-lg shadow-black p-2 py-4 m-2">
            <div className="flex flex-col gap-2">
                <p>Resturant id : {resturant[0]?.card?.card?.info?.id}</p>
                <h2>Resturant name : {resturant[0]?.card?.card?.info?.name}</h2>
                <p>Name : {resturant[0]?.card?.card?.info?.slugs?.restaurant}</p>
                <h4>City : {resturant[0]?.card?.card?.info?.city}</h4>
                <p>costForTwoMessage : {resturant[0]?.card?.card?.info?.costForTwoMessage}</p>

                <button className="bg-blue-400 p-2 "
                    onClick={()=> dispatch(addItem(resturant[0]?.card?.card?.info?.id))}
                >
                    Add to cart
                </button>
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