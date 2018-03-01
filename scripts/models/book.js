'use strict';

var app = app || {};

const __API_URL__ = 'http://localhost:3000';
// const __API_URL__ = 'https://git.heroku.com/co-ks-booklist.git';

(module => {
  function throwErr(err) {
    console.error(err);
    app.errorView.initErrorPage();
  }

  Book.all = [];

  function Book(bookObj) {
    Object.keys(bookObj).forEach(key => this[key] = bookObj[key]);
    Book.all.push(this);
  }

  Book.prototype.toHtml = function() {
    let template = Handlebars.compile($('#book-list-template').text());
    return template(this);
  };

  Book.loadAll = rows => {
    console.log(rows);
    Book.all = rows.sort((a,b) => b.title - a.title).map(book => new Book(book));
  };


  Book.fetchAll = callback =>
    $.get(`${__API_URL__}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(throwErr);

  Book.fetchOne = (book_id, callback) =>
    $.get(`${__API_URL__}/api/v1/books/${book_id}`)
      .then(Book.loadAll)
      .then(callback)
      .catch(throwErr);

  Book.insertBook = (book) =>

    $.post(`${__API_URL__}/api/v1/books/new`, book)
      .then(console.log('hi'));

  module.Book = Book;
})(app);