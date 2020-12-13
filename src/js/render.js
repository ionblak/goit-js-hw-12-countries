import showNotification from './notification';
import createListCountries from './listCountry';
import createCardCountry from './cardCountry';
import refs from './refs';

export default function renderPage(data) {
  if (data.length > 10) {
    showNotification();
    refs.listCountries.innerHTML = '';
    refs.cardBlock.innerHTML = '';
  } else if (data.length > 1 && data.length <= 10) {
    refs.listCountries.innerHTML = '';
    createListCountries(data);
    refs.cardBlock.innerHTML = '';
  } else {
    refs.listCountries.innerHTML = '';
    createCardCountry(data);
  }
}
