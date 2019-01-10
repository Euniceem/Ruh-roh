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
  console.log(duplicateEmails)
  return {
    duplicateEmails: duplicateEmails
  };

})();








// var newItem = prev.find(function (i) {
  //   console.log(i)
  //   return i.allEmails === item.allEmails;
  // });
  // if (newItem) {
  //   Object.assign(newItem, item);
  // }
  // else {
  //   prev.push(item);
  // }// return prev;
