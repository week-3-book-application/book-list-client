'use strict';

page('/', ctx => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/new', ctx => app.bookView.initFormView(ctx));
page('/books/:book_id', ctx => app.Book.fetchOne(ctx, app.bookView.initSingleBookView));
page('/books/update', ctx => app.bookView.initUpdateForm(ctx));
page('/books/:book_id/update', ctx => app.Book.fetchOne(ctx, app.bookView.initUpdateForm));
page('/books/:book_id/delete', ctx => app.Book.fetchOne(ctx, app.bookView.initDeleteForm));

page();