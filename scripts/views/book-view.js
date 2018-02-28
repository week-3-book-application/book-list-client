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

  bookView.initFormView = () => {
    $('.container').hide();
    $('.form-view').fadeIn(750);
    $('#new-book-form').on('submit', bookView.submit);
  };

  bookView.submit = event => {
    event.preventDefault();
    let book = new app.Book({
      title: $('#book-title').val(),
      author: $('#book-author').val(),
      isbn: $('#book-isbn').val(),
      image_url: $('#book-url').val(),
      description: $('#book-description').val()
    });
    book.insertBook();

    // window.location = '../';
  };



  module.bookView = bookView;
})(app);



$(function () {
  app.Book.fetchAll(app.bookView.initIndexPage);
});