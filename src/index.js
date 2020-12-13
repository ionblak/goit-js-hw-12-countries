import debounce from 'lodash.debounce';
/* Исправил импорт debounce */
import { showNotificationFail } from './js/notification';
import fetchCountries from './js/fetchCountries';
import renderPage from './js/render';
import refs from './js/refs';
import './styles.css';

refs.inputSearch.addEventListener('input', debounce(countrySearch, 500));

function countrySearch() {
  let currentCountry = refs.inputSearch.value;
  if (currentCountry === '') {
    refs.listCountries.innerHTML = '';
    refs.cardBlock.innerHTML = '';
  } else {
    fetchCountries(currentCountry)
      .then(data => {
        if (data) {
          renderPage(data);
        }
      })
      .catch(error => {
        console.log('Error: ', error);
        showNotificationFail();
      });
  }
}
