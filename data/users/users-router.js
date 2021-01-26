const router = require("express").Router();

const Users = require("./users-model.js");

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.send(err));
});

router.post("/register", (req,res) => {
  
});
router.post("/login", (req,res) => {

});

module.exports = router;