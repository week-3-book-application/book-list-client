'use strict';

var app = app || {};
// const __API_URL__ = 'http://localhost:3000';

(module => {
  const adminView = {};

  adminView.initAdminPage = () => {
    //show admin view with form for entering password
    $('#admin-button').hide();
    // $('#update').fadeIn(750);
    // $('#delete').fadeIn(750);
    $('.admin-view').fadeIn(750);
    $('#admin-form').on('submit', function submitPasscode(e) {
      e.preventDefault();
      let passcode = e.target.passcode.value;

      $.get(`${__API_URL__}/api/v1/admin`, {passcode})
        .then(result => adminView.verify(result));
    });

  };

  adminView.verify = (result) => {
    if (result === true) {
      $('.admin-view').hide();
      $('#update').show();
      $('#delete').show();
    } else {
      page('/');
    }
  };




  module.adminView = adminView;
})(app);