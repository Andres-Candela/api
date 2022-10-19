const URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass";
window.addEventListener('DOMContentLoaded', coctelesApi);
const containerCard = document.getElementById("containerCard");

document.addEventListener('keyup', e=>{

  if (e.target.matches("#buscador")){

      if(e.key ==="Escape")e.target.value = ""

      document.querySelectorAll(".card").forEach(elemento => {

          elemento.textContent.toLowerCase().includes(e.target.value)
          ?elemento.classList.remove("filtro")
          :elemento.classList.add("filtro")
      })
  }
})

function coctelesApi(){
  fetch (URL)
  .then(response => response.json())
  .then(data => data["drinks"].map(results => {
    
      const div = document.createElement("div");
      div.classList.add("card");

      const img = document.createElement("img");
      img.src = results["strDrinkThumb"];
      img.classList.add("img");

      const name = document.createElement("p");
      name.textContent = results["strDinks"];
      name.classList.add("name");

      div.appendChild(img)
      div.appendChild(name)
      containerCard.appendChild(div)
  }))
}