const url ='https://pokeapi.co/api/v2/pokemon'
 
export const $get = async (limit = 10 , offset=0 )=>{
    let response = await fetch(`${url}?limit=${limit}&offset=${offset}`,{
        method:'GET'
    })
    let responseData = response.json()
    return await responseData
}

export const $getUrls = async (pokemon)=>{
    let response = await fetch(`${pokemon}`,{
        method:'GET'
    })
    let responseData = response.json()
    return await responseData
}


