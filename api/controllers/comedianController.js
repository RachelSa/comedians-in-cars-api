let mongoose = require('mongoose'),
Comedian = mongoose.model('Comedians');

exports.list_all_comedians = (req, res) => {
  Comedian.find({}, function(err, comedian) {
    if (err)
      res.send(err)
    res.json(comedian)
  })
}

exports.create_a_comedian = (req, res) => {
  var new_comedian = new Comedian(req.body);
  new_comedian.save(function(err, comedian) {
    if (err)
      res.send(err)
    res.json(comedian)
  })
}

exports.read_a_comedian = (req, res) => {
  Comedian.findById(req.params.comedianId, function(err, comedian) {
    if (err)
      res.send(err)
    res.json(comedian)
  })
}

exports.update_a_comedian = (req, res) => {
  Comedian.findOneAndUpdate({_id: req.params.comedianId}, req.body, {new: true}, function(err, comedian) {
    if (err)
      res.send(err)
    res.json(comedian)
  })
}

exports.delete_a_comedian = (req, res) => {
  Comedian.remove({
    _id: req.params.comedianId
  }, function(err, comedian) {
    if (err)
      res.send(err)
    res.json({ message: 'Comedian successfully deleted' })
  })
}
