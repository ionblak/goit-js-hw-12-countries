import { showNotificationToMany } from './notification';
import createListCountries from './listCountry';
import createCardCountry from './cardCountry';
import refs from './refs';

export function renderPage(data) {
  if (data.length > 10) {
    showNotificationToMany();
    clearPage();
  } else if (data.length > 1 && data.length <= 10) {
    clearPage();
    createListCountries(data);
  } else {
    clearPage();
    createCardCountry(data);
  }
}
export function clearPage() {
  refs.listCountries.innerHTML = '';
  refs.cardBlock.innerHTML = '';
}
