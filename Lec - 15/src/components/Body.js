import { useEffect, useState } from "react";


import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

import { filterData } from "../../utils/utls"
import useStatusOnline from "../hooks/useStatusOnline";

const Body = () => {

    const [searchText, setSearchText] = useState("");
    const [ apiFail , setApiFail ] = useState(false);

    const [allResturant, setAllResturant] = useState([]);
    const [filterResturant, setFilterResturant] = useState([]);

    const isOnline = useStatusOnline();


    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {

        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            
            if( response.status != 200){
                throw Error("API call status is not 200")
            }
            const data = await response.json();

            // console.log("api data in body", data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

            setAllResturant(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilterResturant(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

            setApiFail(false);

        } catch (error) {
            console.log("Api Error", error);
            setApiFail(true);
        }

    }


    if( !isOnline ) return <h1>⭕Offline! Please check your internet connection.</h1>

    if( apiFail===true ) return <h1>Data is not found</h1>

    return allResturant.length === 0 ? <Shimmer /> : (
        <>

            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="search..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button type="button" className="search-btn"
                    onClick={() => {
                        // filter the data
                        const data = filterData(searchText, allResturant)
                        // change the state
                        setFilterResturant(data);
                    }}
                >
                    Search
                </button>
            </div>



            <div className="card-container">
                {
                    filterResturant?.length === 0 ?
                        <div>
                            <p>No matching found</p>

                            <button type="button" className="search-btn"
                                onClick={() => {
                                    setFilterResturant(allResturant);
                                }}
                            >
                                Reload
                            </button>

                        </div>
                        : filterResturant?.map(resturant => (
                            
                            <ResturantCard key={resturant?.info?.id} {...resturant.info} />
                        ))
                }


            </div>
        </>

    )
};

export default Body;