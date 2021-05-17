const handleProfileGet = (req, res, db) => {
  // get id from req
  const { id } = req.params;
  // loop through users to find if id exists
  db.select('*').from('users').where({id})
    .then(user => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json('error getting user');
      }
    })
    .catch(err => res.status(400).json('error getting user'))
}

module.exports = {
  handleProfileGet: handleProfileGet
}