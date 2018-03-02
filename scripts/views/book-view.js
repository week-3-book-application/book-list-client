'use strict';

var app = app || {};

(module => {
  const bookView = {};

  bookView.initIndexPage = () => {
    $('.container').hide();
    $('#book-list').empty();
    $('#book-count').empty();
    $('.book-view').show();
    $('.about-view').show();
    $('#book-count').append(`Total: ${app.Book.all.length}`);
    bookView.handleMainNav();
    app.Book.all.map(book => $('#book-list').append(book.toHtml()));
    
  };

  bookView.initSingleBookView = (ctx) => {
    $('.detail-view').empty();
    $('.container').hide();
    $('.detail-view').show();
    let template = Handlebars.compile($('#book-detail-template').text());
    $('.detail-view').append(template(ctx));

    // let update = bookView.initUpdateForm(ctx);
    // $('#delete').on('submit', ...);
  };

  bookView.initFormView = () => {
    $('.container').hide();
    $('.form-view').fadeIn(750);
    $('#new-book-form').on('submit', bookView.submit);
  };

  bookView.initUpdateForm = (ctx) => {
    $('.detail-view').empty();
    $('.container').hide();
    $('.form-view').show();
    // let template = Handlebars.compile($('#form-template').text());
    $('#book-title').val(ctx.title);
    $('#book-author').val(ctx.author);
    $('#book-isbn').val(ctx.isbn);
    $('#book-url').val(ctx.image_url);
    $('#book-description').val(ctx.description);
    $('#new-book-form').attr('book_id', ctx.book_id);
    $('#new-book-form').on('submit', bookView.handleUpdateForm);
  };

  bookView.handleUpdateForm = event => {
    event.preventDefault();
    let book = new app.Book({
      book_id: $('#new-book-form').attr('book_id'),
      title: $('#book-title').val(),
      author: $('#book-author').val(),
      isbn: $('#book-isbn').val(),
      image_url: $('#book-url').val(),
      description: $('#book-description').val()
    });
    module.Book.updateBook(book);
  };

  bookView.initDeleteForm = (ctx) => {
    $('.detail-view').empty();
    $('.delete-book').empty();
    $('.container').hide();
    let template = Handlebars.compile($('#delete-template').text());
    $('.delete-book').fadeIn(750);
    $('.delete-book').append(template(ctx));
    $('#delete-yes').attr('book_id', ctx.book_id);
    $('#delete-yes').on('submit', bookView.handleDelete);
  };

  bookView.handleDelete = event => {
    event.preventDefault();
    console.log(event);
    let id = $('#delete-yes').attr('book_id');
    module.Book.deleteBook(id);
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
    module.Book.insertBook(book);

    window.location = '../';
  };

  bookView.handleMainNav = () => {
    $('.main-nav').on('click', function() {
      $('li').css('display', 'block');
    });
  };

  module.bookView = bookView;
})(app);



$(function () {
  app.Book.fetchAll(app.bookView.initIndexPage);
});