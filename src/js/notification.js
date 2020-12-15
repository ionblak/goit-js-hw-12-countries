import { error, info, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export function showNotificationToMany() {
  defaultModules.set(PNotifyMobile, {});
  info({
    text: 'Too many matches found. Please enter a more specific query!',
  });
}
export function showNotificationFail() {
  defaultModules.set(PNotifyMobile, {});
  error({
    title: 'STOP!',
    text: 'Enter correct country name!',
    hide: false,
  });
}

//connection plugin Pnotify
