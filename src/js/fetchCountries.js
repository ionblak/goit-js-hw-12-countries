// fetch to beckend Rest Countries API

function fetchCountries(name) {
  return fetch(
    `https://restcountries.eu/rest/v2/name/${name}?fields=name;population;flag;languages;capital`,
  ).then(response => {
    if (response.ok) return response.json();
    throw new Error('Error fetching data');
  });
}
export default fetchCountries;
