import { React, useState, useEffect } from "react";
import { $get, $getUrls } from "../api";
import pokeboll from '../assets/pokeboll.png'
import Card from "./Card";
import NavBar from "./NavBar";


function Pokedex() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  const [endpoint, setEndpoint] = useState([])
  const [pagination, setPagination] = useState(0)
  const [cards, setCards] = useState(9)
  const [search, setSearch] = useState()

  const results = async () => {
    if(pagination < 0){
      return setPagination(0)
    }else if(cards < 0){
      return setCards(9)
    }else{
    let endpoint = await $get(cards, pagination)
    setEndpoint(endpoint.results)
    }}


  useEffect(()=>{
    results()
  },[pagination])

  const prevPagination = ()=>{
    return(
      setCards(cards),
      setPagination(pagination-9)
    )
  }
  
  const catchValue = async ()=>{
    let urls = await $getUrls(url)
    let pokemonSearch = urls.results.filter((pokemon)=>{return pokemon.name == search ?? search}
    )
    setEndpoint(pokemonSearch)
  }
  const nextPagination = ()=>{
   return(
     setCards(cards),
     setPagination(pagination + 9)
   ) }

  return (
    <div>
      <NavBar />
        <div id="pagination">
          <div onClick={prevPagination} id="arrow"><i  className="bi bi-chevron-left"></i></div>
          <div className="search-box">
            <input onChange={(pokeName)=>setSearch(pokeName.target.value)} type="text" placeholder="search" />
              <a href="#" className="icon">
                <img onClick={catchValue} className="icon" src={pokeboll} alt="" />
              </a>
          </div>
          <div  onClick={nextPagination} id="arrow"><i className="bi bi-chevron-right"></i></div>
        </div>
        <div>
          <Card endpoint={endpoint} />
        </div>
    </div>
  )
}

export default Pokedex