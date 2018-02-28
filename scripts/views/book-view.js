'use strict';

var app = app || {};

(module => {
  const bookView = {};

  bookView.initIndexPage = () => {
    $('.container').hide();
    $('.book-view').show();
    $('.about-view').show();
    $('#book-count').append(app.Book.all.length);
    app.Book.all.map(book => $('#book-list').append(book.toHtml()));
  };

  bookView.initSingleBookView = (ctx) => {
    console.log(ctx);
    $('.container').hide();
    $('.detail-view').show();
    // $('.detail-view').append(book.toHtml());
  } 

  module.bookView = bookView;
})(app);



$(function () {
  app.Book.fetchAll(app.bookView.initIndexPage);
});