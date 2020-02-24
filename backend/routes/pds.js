const router = require("express").Router();
let Pd = require("../models/pd");

router.route("/").get((req, res) => {
  Pd.find()
    .then(pds => res.json(pds))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newPd = new Pd({
    username,
    description,
    duration,
    date
  });

  newPd
    .save()
    .then(() => res.json("Professional Development added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Pd.findById(req.params.id)
    .then(pd => res.json(pd))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Pd.findByIdAndDelete(req.params.id)
    .then(() => res.json("Professional Development deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Pd.findById(req.params.id)
    .then(pd => {
      pd.username = req.body.username;
      pd.description = req.body.description;
      pd.duration = Number(req.body.duration);
      pd.date = Date.parse(req.body.date);

      pd.save()
        .then(() => res.json("Professional Development updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
