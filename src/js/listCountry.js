import refs from './refs';

export default function createListCountries(data) {
  data.map(item =>
    refs.listCountries.insertAdjacentHTML('beforeend', `<li>${item.name}</li>`),
  );
}
// Create list coutries
