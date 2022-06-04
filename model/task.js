const mongoose  = require('mongoose');

const taskShema = new mongoose.Schema({
name: {
  type: String,
  required: true,
  trim: true,
  maxlength: [20, 'name cont be more 20 characters long']
}, completed: {
  type: Boolean,
  default: false
}
});
  
  
module.exports = mongoose.model('Task', taskShema);