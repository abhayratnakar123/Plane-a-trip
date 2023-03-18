import { useState } from "react";

function Card({id, name, image, info, price,removeTour}) {
    const [readmore, setReadmore] = useState(false);
   // This will give you 200 length substring
    const description = readmore ? info : `${info.substring(0, 200)}....`;

    //show less or readmore logic--
    function readmoreHandler() {

        setReadmore(!readmore);
    }
    return (

        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                    <div className="description">
                        {description}
                        <span className="read-more" onClick={readmoreHandler}>
                            {readmore ? `Show Less` : `Read More`}
                        </span>
                    </div>

                    <button className="btn-red" onClick={ 
                        ()=>removeTour(id)}>
                        Not Interested
                    </button>

                </div>

            </div>
        </div>


    )

}

export default Card;
