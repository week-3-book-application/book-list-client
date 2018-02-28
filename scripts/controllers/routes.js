'use strict';

page('/', ctx => app.Book.fetchAll(ctx, app.bookView.initIndexPage));
page('/books/:book_id', ctx => app.Book.fetchOne(ctx.params.id, app.bookView.initSingleBookView));
// page('/books/new', app.bookView.initFormView);

page();