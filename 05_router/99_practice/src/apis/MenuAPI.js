
export async function getMenuList (){

    const data = await fetch('https://pokeapi.co/api/v2/pokemon');

    const response = await data.json();

    const json = await response;

    console.log('json :',json)

    return json;

}