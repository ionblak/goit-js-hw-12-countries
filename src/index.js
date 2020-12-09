import * as _ from 'lodash';
import fetchCountries from './js/fetchCountries';
import refs from './js/refs';
import './styles.css';

refs.inputSearch.addEventListener('input', _.debounce(countrySearch, 500));

function countrySearch() {
  let currentCountry = refs.inputSearch.value.trim();
  if (currentCountry === '') {
    refs.listCountries.innerHTML = '';
    refs.cardBlock.innerHTML = '';
  }
  fetchCountries(currentCountry);
}
