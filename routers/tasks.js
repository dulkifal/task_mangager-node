const express   = require('express');
const router    = express.Router();

const {getllAllTasks, createTask , getTask, updataTask, deleteTask} = require('../controllers/tasks'); 


router.route('/').get(getllAllTasks).post(createTask); 
router.route('/:id').get(getTask).patch(updataTask).delete(deleteTask);

module.exports = router;