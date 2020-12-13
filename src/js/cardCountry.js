import refs from './refs';
import itemsTemplate from '../templates/card.hbs';
import { clearPage } from './render';

export default function createCardCountry(data) {
  clearPage();
  const markup = itemsTemplate(data);
  refs.cardBlock.insertAdjacentHTML('beforeend', markup);
}
