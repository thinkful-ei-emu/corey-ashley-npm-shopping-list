//'use strict';
/* global shoppingList, store, api */
import $ from 'jquery';
import 'normalize.css';

import api from './api';
import store from './store';
import shoppingList from './shopping-list';
import './index.css';

$(document).ready(function() {
  shoppingList.bindEventListeners();

  // On initial load, fetch Shopping Items and render
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    })
    .catch(err => console.log(err.message));
});
console.log('test123');