const Task = require('../model/task')
const asyncWarapper = require('../middleware/async')
const getllAllTasks = asyncWarapper(async (req, res) => {
  const tasks = await Task.find()
  res.status(201).json({ tasks })
})

const createTask = asyncWarapper(async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
})


const getTask = asyncWarapper(async (req, res) => {

  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })
  if (!task) {
    return res.status(404).json({ msg: 'task not found' })
  }
  res.status(201).json({ task })

})

const updataTask = asyncWarapper(async (req, res) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true })
  res.status(201).json({ task })
}
)

const deleteTask = asyncWarapper(async (req, res) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndDelete({ _id: taskID })
  if (!task) {
    return res.status(404).json({ msg: 'task not found' })
  }
  res.status(200).json({ task })
}
)

module.exports = {
  getllAllTasks, createTask, getTask, updataTask, deleteTask
}