import refs from './refs';

export default function createListCountries(data) {
  data.map(({ name }) =>
    refs.listCountries.insertAdjacentHTML('beforeend', `<li>${name}</li>`),
  );
}
// Create list coutries
