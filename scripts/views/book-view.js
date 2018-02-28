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

  bookView.initSingleBookView = ctx => {
    $('.detail-view').empty();
    $('.container').hide();
    $('.detail-view').show();
    let singleBook = app.Book.all.filter(book => book.book_id === ctx);
    $('.detail-view').append(singleBook[0].toHtml());
  };

  bookView.initFormView = 

  module.bookView = bookView;
})(app);



$(function () {
  app.Book.fetchAll(app.bookView.initIndexPage);
});