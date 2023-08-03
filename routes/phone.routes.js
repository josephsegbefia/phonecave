const router = require("express").Router();
const Phone = require("../models/Phone.model");

router.get("/phones", (req, res, next) => {
  Phone.find()
    .then((phones) => {
      res.status(200).json(phones);
    })
    .catch((error) => {
      res.status(404).json({ message: "No Phones found" });
    });
});

router.get("/phones/:id", (req, res, next) => {
  const { id } = req.params;

  Phone.findById({ _id: id })
    .then((phone) => {
      res.status(200).json(phone);
    })
    .catch((error) => {
      res.status(404).json({ message: "Phone not found" });
    });
});

module.exports = router;
