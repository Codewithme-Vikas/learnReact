const ResturantCard = (props) => { // 'props' name is not mandatory
    return (
        <div className="card">
            <img src={props.resturant?.img} alt="Img" />
            <h2>{props.resturant?.name}</h2>

            {/* { New to me , next line code - array just directly print inside JSX } */}
            <h3>{props.resturant?.cusines.join(", ")} </h3>
            <h4>{props.resturant?.rating} stars</h4>
        </div>
    )
};

export default ResturantCard;