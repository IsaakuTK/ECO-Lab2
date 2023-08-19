async function getP(pokemon) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await res.json()
    create(data);
}



let pokemon;

const firstBt = document.createElement("button");
firstBt.addEventListener("click", ()=> {
    pokemon=1;
    getP(pokemon);
    document.getElementById("pokecard").innerHTML="";
})
const img1= document.createElement("img");
img1.src = "https://static.wikia.nocookie.net/pokemeow-community/images/9/9b/Bulbasaur_-_Pokemon_-_Pokemeow.gif";
firstBt.appendChild(img1);



const secondBt = document.createElement("button");
secondBt.addEventListener("click", ()=> {
    pokemon=4;
    getP(pokemon);
    document.getElementById("pokecard").innerHTML="";
})
const img2= document.createElement("img");
img2.src = "https://static.wikia.nocookie.net/pokemeow-community/images/9/9a/Uncommon_Charmander.gif";
secondBt.appendChild(img2);



const thirdBt = document.createElement("button");
thirdBt.addEventListener("click", ()=> {
    pokemon=7;
    getP(pokemon);
    document.getElementById("pokecard").innerHTML="";
})
const img3= document.createElement("img");
img3.src = "https://static.wikia.nocookie.net/pokemeow-community/images/3/3f/Uncommon_Squirtle.gif";
thirdBt.appendChild(img3);



const section = document.createElement("section");
section.appendChild(firstBt);
section.appendChild(secondBt);
section.appendChild(thirdBt);

document.getElementById("but").appendChild(section);



const create = (data) => {
    const section = document.createElement('section');

    const pokedex = document.createElement("h2");
    pokedex.textContent = `Pokédex: ${data.id}`;

    const name = document.createElement("h3");
    name.textContent = `Name: ${data.name}`;

    const img = document.createElement("img");
    img.src = `${data.sprites.front_default}`;
    const img2 = document.createElement("img");
    img2.src = `${data.sprites.back_default}`;

    const type = document.createElement("h3");
    type.textContent = `Type: ${data.types[0].type.name}`;



    const evolve = document.createElement('button');
    evolve.textContent = "Evolve";
    evolve.addEventListener('click', () => {
        section.innerHTML = ""
        document.getElementById('pokecard').innerHTML="";
        evolves(data.id)
    });


    const devolve = document.createElement('button');
    devolve.textContent = "Devolve";
    devolve.addEventListener('click', () => {
        section.innerHTML = ""
        document.getElementById('pokecard').innerHTML="";
        devolves(data.id)
    });
    
    

    section.appendChild(pokedex);
    section.appendChild(name);
    section.appendChild(img);
    section.appendChild(img2);
    section.appendChild(type);
    section.appendChild(evolve);
    section.appendChild(devolve);

    document.getElementById('pokecard').appendChild(section);
}


function evolves (pokemon){

    if((pokemon>=1 && pokemon<3) || (pokemon>=4 && pokemon<6) || (pokemon>=7 && pokemon<9))
    {
        getP(++pokemon)
    }

    else{
        getP(pokemon)
    }
}

function devolves(pokemon){
    if ((pokemon<=3 && pokemon>1) || (pokemon<=6 && pokemon>4)|| (pokemon<=9 && pokemon>7)) {
        getP(--pokemon)
    }else{
        getP(pokemon)
    }
}