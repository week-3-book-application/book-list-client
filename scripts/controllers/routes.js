'use strict';

page('/', app.bookView.initIndexPage());
page('/book/:id', ctx => app.bookView.initSingleBookView(ctx));