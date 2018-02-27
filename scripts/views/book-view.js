'use strict';

var app = app || {};

var bookView = {};

(module => {

  bookView.initIndexPage = () => {
    $('.container').hide();
    $('.book-view').show();
    app.Book.all.map(book => $('#book-list').append(book.toHtml()));
  };

  module.bookView = bookView;
})(app);



$(function () {
  app.Book.fetchAll(bookView.initIndexPage);
});