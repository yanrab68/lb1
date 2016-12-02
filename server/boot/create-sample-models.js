module.exports = function(app) {
  app.dataSources.myPostgress.automigrate('person', function(err) {
    if (err) throw err;

    app.models.person.create([{
      firstname: 'John',
      lastname: 'Vancouver'
    }, {
      firstname: 'Three Bees Coffee House',
      lastname: 'San Mateo'
    }, {
      firstname: 'Caffe Artigiano',
      lastname: 'Vancouver'
    }, ], function(err, coffeeShops) {
      if (err) throw err;

      console.log('Models created');
    });
  });
};