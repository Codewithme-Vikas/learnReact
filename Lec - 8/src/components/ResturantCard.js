const ResturantCard = ( {name,areaName, cloudinaryImageId,cuisines,avgRating, locality} ) => { // 'props' name is not mandatory
    return (
        <div className="card">
            <img 
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} 
                alt="Img" 
            />
            <p className="card-name">{name}</p>

            <p className="card-cuisines">{cuisines.join(", ")} </p>
            <p className="card-rating">{avgRating} &#9733;</p>
            <p className="card-area">Area : {areaName}</p>
        </div>
    )
};

export default ResturantCard;