'use strict';

module.exports = function(Person) {

  Person.senior = function(cb) {
    var response;
    if (Person.age > 50) {
      response = 'I am a senior';
    } else {
      response = 'I am a kid';
    }
    cb(null, response);
  };
  Person.remoteMethod(
    'senior', {
      http: {
        path: '/senior',
        verb: 'get'
      },
      returns: {
        arg: 'senior',
        type: 'string'
      }
    }
  );

};
