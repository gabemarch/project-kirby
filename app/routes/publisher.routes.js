const controller = require('../controllers/publisher.controller');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header(
      'Access-Control-Allow-Origin',
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.get('/api/publishers', controller.getPublisher);
  app.post('/api/publishers', controller.addPublisher);
  app.put('/api/publishers/:id', controller.updatePublisher);
};
