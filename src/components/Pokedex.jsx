import { React, useState, useEffect } from "react";
import { $get } from "../api";
import Card from "./Card";
import NavBar from "./NavBar";


function Pokedex() {

  const [endpoint, setEndpoint] = useState([])
  const [pagination, setPagination] = useState(0)
  const [cards, setCards] = useState(12)

  const results = async () => {
    if(pagination < 0){
      return setPagination(0)
    }else if(cards < 0){
      return setCards(12)
    }else{
    let endpoint = await $get(cards, pagination)
    setEndpoint(endpoint.results)
    return setEndpoint
    }
  }


  useEffect(()=>{
    results()
  },[pagination])

  const prevPagination = ()=>{
    return(
      setCards(cards),
      setPagination(pagination-12)
    )
  }
  const nextPagination = ()=>{
   return(
     setCards(cards),
     setPagination(pagination + 12),
     console.log('ta tudo certo')
   )


  }

  return (
    <div>
      <NavBar />
        <div id="pagination">
          <div id="arrow"><i onClick={prevPagination} className="bi bi-chevron-left"></i></div>
          <div id="arrow"><i onClick={nextPagination} className="bi bi-chevron-right"></i></div>
        </div>
        <div>
          <Card endpoint={endpoint ?? endpoint} />
        </div>
    </div>
  )
}

export default Pokedex