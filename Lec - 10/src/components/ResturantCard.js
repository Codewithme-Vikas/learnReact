import { Link } from "react-router-dom"

import { IMG_CDN } from "../../config";

const ResturantCard = ( { id , name,areaName, cloudinaryImageId,cuisines,avgRating, locality} ) => { 
    return (
        <Link to={"/resturant/" + id } className="card">
            <img 
                src={IMG_CDN+cloudinaryImageId} 
                alt="Img" 
            />
            <p className="card-name">{name}</p>

            <p className="card-cuisines">{cuisines.join(", ")} </p>
            <p className="card-rating">{avgRating} &#9733;</p>
            <p className="card-area">Area : {areaName}</p>
        </Link>
    )
};

export default ResturantCard;