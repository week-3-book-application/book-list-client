'use strict';

var app = app || {};

const __API_URL__ = 'http://localhost:3000';
// const __API_URL__ = 'https://co-ks-booklist.herokuapp.com';

(module => {
  function throwErr(err) {
    console.error(err);
    app.errorView.initErrorPage();
  }

  Book.all = [];

  function Book(bookObj) {
    Object.keys(bookObj).forEach(key => this[key] = bookObj[key]);
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

  Book.fetchOne = (ctx, callback) =>
    $.get(`${__API_URL__}/api/v1/books/${ctx.params.book_id}`)
      .then(results => ctx.book = results[0])
      .then(callback)
      .catch(throwErr);

  Book.insertBook = (book) =>
    $.post(`${__API_URL__}/api/v1/books/new`, book)
      .then(() => page('/'))
      .catch(throwErr);

  Book.updateBook = (book) => {
    $.ajax({
      url: `${__API_URL__}/api/v1/book-${book.book_id}/update`,
      method: 'PUT',
      data: book
    })
      .then(() => page('/'))
      .catch(throwErr);
  };

  Book.deleteBook = (id) => {
    $.ajax({
      url: `${__API_URL__}/api/v1/book/delete`,
      method: 'DELETE',
      data: {book_id : id}
    })
      .then(() => page('/'));
  };

  module.Book = Book;
})(app);