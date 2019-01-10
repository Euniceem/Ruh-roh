"use strict mode"

const moduleEmails = (function () {

  const dataset = require('./js/email_log.json');
  const emails = dataset.emails;

  const duplicateEmails = emails.reduce(function (obj, item) {
    if (obj.hasOwnProperty(item.email) === false) {
      obj[item.email] = 1;
    }
    else {
      (obj.hasOwnProperty(item.mail) === true)
      obj[item.email] += 1;
    }
    return obj
  }, {});

  return {
    duplicateEmails: duplicateEmails
  };

})();


