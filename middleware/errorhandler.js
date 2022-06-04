const errorhandler = (err, req, res, next) => {
  console.log(err)
  res.status(500).json({ msg: 'server error' })
}
module.exports = errorhandler