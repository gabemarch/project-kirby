const db = require('../models');
const Publisher = db.publisher;

exports.addPublisher = (req, res) => {
  const publisher = new Publisher({
    name: req.body.name,
    metaName: req.body.metaName
  });

  publisher.save((err) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: 'Publisher was added successfully!' });
  });
};

exports.getPublisher = async (req, res) => {
  try {
    const publisher = await Publisher.find();
    res.json(publisher);
  } catch (err) {
    res.status(500).send('Error getting publishers');
  }
};

exports.updatePublisher = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty!',
    });
  }
  const id = req.params.id;

  Publisher.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Couldn't find publisher",
        });
      } else res.send({ message: 'Publisher was updated successfully' });
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Publisher with id ' + id,
      });
    });
};
