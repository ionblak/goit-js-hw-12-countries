import showNotification from './notification';
import createListCountries from './listCountry';
import createCardCountry from './cardCountry';
import refs from './refs';
// fetch to beckend Rest Countries API
function fetchCountries(name) {
  fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.length > 10) {
        showNotification();
        refs.listCountries.innerHTML = '';
        refs.cardBlock.innerHTML = '';
      } else if (data.length > 2 && data.length <= 10) {
        createListCountries(data);
        refs.cardBlock.innerHTML = '';
      } else {
        refs.listCountries.innerHTML = '';
        createCardCountry(data);
      }
    })
    .catch(error => {
      console.log(error);
    });
}
export default fetchCountries;
