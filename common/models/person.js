'use strict';

module.exports = function(Person) {

  Person.senior = function(cb) {
    var ln = 'Vancouver';
    Person.findOne({where: {lastname: ln}}, function(err, inst){
       
       if(err){
            cb(null, "Error in findOne");
       } else {
            
            if(!inst)
                cb(null, 'Not found');
            if(inst.age > 50 )
                cb(null, 'I am a senior');
            else 
                cb(null, 'I am a kid');
       }
    }); 
    
  };
  Person.remoteMethod(
    'senior', {
      http: {
        path: '/senior/',
        verb: 'get'
      },
      //accepts: {arg: 'lastname', type: 'string'},
      returns: {arg: 'senior', type: 'string'}
    }
  );

};
