  
function fetchCountries(countryName) {
    return fetch(
      `https://restcountries.eu/rest/v2/name/${countryName}`,
    ).then(data => data.json());
  }
  
  export default fetchCountries;