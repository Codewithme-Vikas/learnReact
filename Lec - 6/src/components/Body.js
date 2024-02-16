import { useState } from "react";
import { resturantData } from "../../config"


import ResturantCard from "./ResturantCard";


function filterData(searchText, resturantData) {
    return  resturantData.filter( (resturant) => resturant.name.includes(searchText))
};

const Body = () => {

    const [searchText, setSearchText] = useState("");
    const [filterResturant, setFilterResturant] = useState(resturantData);

    return (
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
                        const data = filterData(searchText, resturantData)
                        // change the state
                        setFilterResturant( data );
                    }}
                >
                    Search
                </button>
            </div>



            <div className="card-container">

                {/* { ResturantCard( resturantData[0] ) } */} {/*This is also work*/}

                {
                    filterResturant.map((resturant, index) => (
                        <ResturantCard key={index} resturant={resturant} />
                    ))
                }
                <ResturantCard resturant={resturantData[0]} />
                <ResturantCard resturant={resturantData[1]} />
                <ResturantCard resturant={resturantData[2]} />
                <ResturantCard resturant={resturantData[3]} />
            </div>
        </>

    )
};

export default Body;