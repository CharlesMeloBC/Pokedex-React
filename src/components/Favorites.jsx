import React from "react";
import NavBar from "./NavBar";
import Pokemon from "./Pokemon";

function Favorites() {
  const arr = []
  function teste() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key)
      arr.push(value)
    }
    console.log(arr);
  }
  teste()

  return (
    <div>
      <NavBar />
      <div className="container" id="containerCard">
        <div className="row" id="card">
            {
              arr.map((e, index)=>{
                return(
                  <div key={index} className="col-3"><Pokemon  data={`https://pokeapi.co/api/v2/pokemon/${e}/`}/></div>
                )
              })
            }
        </div>
      </div>
    </div>
  )
}

export default Favorites