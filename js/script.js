const countriesElem = document.querySelector('.countries');
const dropDown = document.querySelector('.dropdown');
const dropElem = document.querySelector('.drop-options');
const region = document.querySelectorAll('.region');
const search = document.querySelector(".search");
const toggle = document.querySelector(".toggle");


async function getCountry() {
  const url = await fetch("https://restcountries.com/v3.1/all");
  const res = await url.json();
  console.log(res);
  res.forEach(element => {
    showCountry(element);
  });
}
getCountry();

function showCountry(data) {
  const country = document.createElement('div');
  country.classList.add('country');
  country.innerHTML = ` 
        <img src="${data.flags.png}" alt="flag" height="160px">
        <h3 class="cityName">${data.name.common}</h3>
        <p> <span> Population:&nbsp;&nbsp;</span>${data.population}</p>
        <p class="regionName"> <span> Region: &nbsp; &nbsp; &nbsp; &nbsp; </span> ${data.region}</p>
        <p> <span> Capital: &nbsp; &nbsp; &nbsp; &nbsp; </span> ${data.capital}</p>`;
  countriesElem.appendChild(country);
}


dropDown.addEventListener("click", () => {
  dropElem.classList.toggle('show-options')
})


const regionName = document.getElementsByClassName('regionName');
const cityName = document.getElementsByClassName('cityName');
region.forEach(element => {
  element.addEventListener("click", () => {
    console.log(element);
    Array.from(regionName).forEach(elem => {
      console.log(elem.innerText);
      if(elem.innerText.includes(element.innerText) || element.innerText=="All") {
        elem.parentElement.style.display = 'grid';
      }else {
        elem.parentElement.style.display = "none";
      }
    });
  })
})

search.addEventListener('input', () => {
  Array.from(cityName).forEach((elem) => {
    console.log(elem.innerText);
    if (
      elem.innerText.toLowerCase().includes(search.value.toLowerCase())
    ) {
      elem.parentElement.style.display = "grid";
    } else {
      elem.parentElement.style.display = "none";
    }
  });
})

toggle.addEventListener('click', () => {
  document.body.classList.toggle('active')
})