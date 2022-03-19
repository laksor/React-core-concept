const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then (res => res.json())
        .then(data => displayCountries(data))
}


const displayCountries = countries => {
    const allCountries = countries.map(country => getCountryHtml(country))
    const container = document.getElementById('main');
    container.innerHTML = allCountries.join(' ');
}

const getCountryHtml = ({flags, name, capital, continents, area}) =>{
    return `
    <div class="countries">
    <img src="${flags.png}">
        <h2>${name.common}</h2>
        <h4>capital: ${capital}</h4>
        <h4>continent: ${continents}</h4>
        <h4>Area: ${area} km(squre)</h4>
    </div>
    `
}
loadCountries();