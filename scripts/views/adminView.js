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
        .then(console.log());
    });

  };

  adminView.verify = () => {
    // validate passphrase, if valid show admin only part of app
  };




  module.adminView = adminView;
})(app);