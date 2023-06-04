let countriesInfo = [
  {
    name: "India",
    population: "1,394,974,747",
    region: "Asia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_the_Republic_of_India.svg/640px-Flag_of_the_Republic_of_India.svg.png",
    capital: "New Delhi",
  },
  {
    name: "Germany",
    population: "84,270,625",
    region: "Europe",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/640px-Flag_of_Germany.svg.png",
    capital: "Berlin",
  },
  {
    name: "United States",
    population: "333,287,557",
    region: "America",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png?20150326181342",
    capital: "washington D.C",
  },
  {
    name: "Brazil",
    population: "217,240,060",
    region: "South America",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png?20230130104947",
    capital: "Brasília",
  },
  {
    name: "Australia",
    population: "26,439,900",
    region: "Oceania",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/1200px-Flag_of_Australia.svg.png?20211007161007",
    capital: "Canberra",
  },
];

// create a container
const container = document.createElement("div");
const row = document.createElement("div");
container.setAttribute("class", "container-fluid");
row.setAttribute("class", "row");
container.append(row);

countriesInfo.forEach((item) => {
  row.innerHTML += `
<div class="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center p-2">
<div class = "main-container card">
<div class="image-container">
  <img src=${item.flag} alt = ${item.name}  class="flag w-100 h-100"/>
</div>
<div class="content-container text-center mt-3">
<h3>${item.name}</h3>
<p>Region: ${item.region}</p>
<p>Capital: ${item.capital}</p>
<p>Population: ${item.population}</p>
</div>
</div>
</div>
`;
});

document.body.append(container);
