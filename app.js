const express = require('express')
const app = express()
const tasks  = require('./routers/tasks')
const connectDB =  require('./db/connect');
require('dotenv').config()
const notFound = require('./middleware/notfound')
const errorHandler = require('./middleware/errorhandler')

//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes
 
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandler)

const port =  3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, console.log('server at port ' + port))
  } catch (error) {
    console.log(error)
  }
}

start()

 