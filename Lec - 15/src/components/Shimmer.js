const Shimmer = () => {
    const totalCards = new Array(10).fill(0);

    return (
        <div className="shimmer-cards-container">
            {
                totalCards.map((ele, index) => {
                    return (
                        <div key={index} className="shimmer-card">
                            <div className="shimmer-img"></div>
                            <div className="shimmer-text"></div>
                        </div>
                    )
                })
            }

        </div>
    )
};

export default Shimmer;