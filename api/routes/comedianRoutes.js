module.exports = (app) => {
  let comedian = require('../controllers/comedianController')

  app.route('/comedians')
    .get(comedian.list_all_comedians)
    .post(comedian.create_a_comedian);


  app.route('/comedians/:comedianId')
    .get(comedian.read_a_comedian)
    .put(comedian.update_a_comedian)
    .delete(comedian.delete_a_comedian);
}
