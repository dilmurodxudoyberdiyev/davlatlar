let elList = document.querySelector(".list")

const films = [
    {
      id: 1,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      capital: "Berlin"
    },
   
    {
      id: 3,
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png",
      name: "Brazil",
      population: "206,135,893",
      region: "Americas",
      capital: "Brasília"
    },
    {
      id: 4,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1024px-Flag_of_Iceland.svg.png",
      name: "Iceland",
      population: "334,300",
      region: "Europe",
      capital: "Reykjavík"
    },
    
    {
      id: 6,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png",
      name: "Uzbekistan",
      population: "35,482,369",
      region: "Asia",
      capital: "Tashkent"
    },
    {
      id: 7,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/2560px-Flag_of_Albania.svg.png",
      name: "Albania",
      population: "2,886,026",
      region: "Europe",
      capital: "Tirana"
    },
    {
      id: 8,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/1280px-Flag_of_Algeria.svg.png",
      name: "Algeria",
      population: "40,400,000",
      region: "Africa",
      capital: "Algiers"
    },
]

for(let newFilm of films){
    let elItem = document.createElement("li")
    let elImg = document.createElement("img")
    let elWrap = document.createElement("div")
    let elStrong = document.createElement("strong")
    let elPop = document.createElement("p")
    let elReigon = document.createElement("p")
    let elCapital = document.createElement("p")


    elItem.classList.add("list-item")
    elImg.classList.add("list-img")
    elWrap.classList.add("list-wrapper")
    elStrong.classList.add("list-strong")
    elPop.classList.add("list-pop")
    elReigon.classList.add("list-reigon")
    elCapital.classList.add("list-capital")
    
    elImg.src = newFilm.img
    elStrong.textContent = newFilm.name
    elPop.textContent = `Populaiton: ${newFilm.population}`;
    elReigon.textContent = `Region: ${newFilm.region}`
    elCapital.textContent = `capital: ${newFilm.capital}`

    elList.appendChild(elItem)
    elItem.append(elImg,elWrap)
    elWrap.append(elStrong,elPop,elReigon,elCapital)
    
}