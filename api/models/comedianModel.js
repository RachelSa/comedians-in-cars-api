let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ComedianSchema = new Schema({
  name: {
    type: String,
    required: "Kindly enter the comedian's name"
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Comedians', ComedianSchema);

// status: {
//   type: [{
//     type: String,
//     enum: ['pending', 'ongoing', 'completed']
//   }],
//   default: ['pending']
// }
