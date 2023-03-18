import React, { useEffect, useState } from "react";
import { $getUrls } from "../api";
import Details from "./Details";

function Pokemon(props) {
    const { data } = props
    const [dataUser, setDataUser] = useState()
    const [value, setValue]= useState(false)
    const [details, setDetails]= useState(false)

    useEffect(() => {
        async function getData() {
            let user = await $getUrls(data)
            setDataUser(user)
        }
        getData()
    }, [data])
   
    const pokemonData = {
        name: dataUser?.name,
        id: dataUser?.id,
        type: dataUser?.types[0]?.type?.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${dataUser?.id}.svg`
    }

    useEffect(()=>{
        let isFavorite = localStorage.getItem(pokemonData?.name);
        if(isFavorite !== pokemonData?.name){
            setValue(isFavorite)
        }
    },[dataUser])

  function handleFavorite() {
    let favoriteKey = pokemonData.name;
    let isFavorite = localStorage.getItem(favoriteKey) !== null;
    if (isFavorite) {
      localStorage.removeItem(favoriteKey);
    } else {
      localStorage.setItem(favoriteKey, pokemonData.id);
    }
    setValue(!isFavorite);
  }

   function clikValueDetails(){  
    setDetails(!details)
    
   }     


    return (
            <div onClick={clikValueDetails} data-toggle="modal" data-target=".bd-example-modal-md"  className="" id="containerCard">

                <div  className={`card container ${pokemonData.type}`} >
                    <div className="container" style={{ height: "10rem" }} id="containerImg">
                        <img style={{ padding: '10px', width: "8rem" }} src={pokemonData.image} alt="Card image cap"></img>
                    </div>
                    <div style={{ opacity: '0.8' }} className=" black card border-ligth mb-4 container">
                        <div className="row" id="name">
                            <h5 className="card-title col-10">{pokemonData.name}</h5>
                            <i onClick={handleFavorite} className={`bi bi-heart${value ? '-fill' : ''}`}></i>
                        </div>
                    </div>
                    <h6 className="card-footer row bg-transparent">
                        {dataUser && dataUser.types.map((pokeType, index) =>
                            <div  className="col" key={index}>
                                <h6 className="row">{pokeType.type.name}</h6>
                            </div>)}
                        #{pokemonData.id}
                    </h6>
                </div>
                {details? <Details modalDatas={dataUser} />: ''}
            </div>
        
    )
}

export default Pokemon