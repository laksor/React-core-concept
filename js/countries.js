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

const getCountryHtml = country => {
    return `
    <div class="countries">
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}">
    </div>
    `
}
loadCountries();