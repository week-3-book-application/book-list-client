'use strict';

page('/', ctx => app.Book.fetchAll(ctx, app.bookView.initIndexPage));
page('/books/new', ctx => app.bookView.initFormView(ctx));
page('/books/:book_id', ctx => app.Book.fetchOne(ctx, app.bookView.initSingleBookView));

page();