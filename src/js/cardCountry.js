import refs from './refs';
import itemsTemplate from '../templates/card.hbs';

export default function createCardCountry(data) {
  const markup = itemsTemplate(data);
  refs.cardBlock.insertAdjacentHTML('beforeend', markup);
}
