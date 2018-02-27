'use strict';

var app = {};

// var __API_URL__ = 'http://localhost:3000';
var __API_URL__ = 'https://git.heroku.com/co-ks-booklist.git';

(module => {
  Book.all = [];

  function Book(bookObj) {
    Object.keys(bookObj).forEach(key => this[key] = bookObj[key]);
    Book.all.push(this);
  }

  let book = new Book({
    title: 'test',
    author: 'kris',
    isbn: '1111',
    image_url: 'www.test.com',
    description: 'test'
  });

  Book.prototype.toHtml = function() {
    let template = Handlebars.compile($('#book-list-template').text());
    return template(this);
  };

  // Book.loadAll = (rows) =>


  Book.fetchAll = callback =>
    $.get(`${__API_URL__}/api/v1/books`)
      .then(result => console.log(result));


  console.log(book);
  module.Book = Book;
})(app);