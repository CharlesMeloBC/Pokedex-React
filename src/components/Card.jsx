import React, { useEffect} from "react";
import Details from "./Details";
import Pokemon from "./Pokemon";


function Card(props) {
    const { endpoint } = props
    
    return (
        <div>
            <div className="container" id="containerCard">
                <div className="row" id="card">
                    {endpoint.map((user, index) => {
                        return <div id="cards" className="col-4" key={index}><Pokemon data={user.url} /></div>
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default Card