import React, { useEffect} from "react";
import Pokemon from "./Pokemon";


function Card(props) {
    const { endpoint } = props
    
    return (
        <div>
            <div className="container" id="containerCard">
                <div className="row" id="card">
                    {endpoint.map((user, index) => {
                        return <div className="col-3" key={index}><Pokemon data={user.url} /></div>
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default Card