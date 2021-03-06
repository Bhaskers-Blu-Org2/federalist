var Sails = require('sails'),
  sails;

before(function(done) {
  Sails.lift({
    // configuration for testing purposes
    // Use memory for data store
    models: { connection: 'memory' },
    log: { level: 'info' }
  }, function(err, server) {
    sails = server;
    if (err) return done(err);
    // here you can load fixtures, etc.
    done(err, sails);
  });
});

after(function(done) {
  // here you can clear fixtures, etc.
  sails.lower(done);
});
