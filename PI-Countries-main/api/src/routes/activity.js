const { Router } = require("express");
const router = Router();
const fetch = require("node-fetch");
const { Country, Activity } = require("../db");

router.post("/", (req, res) => {
  Activity.create(req.body)
    .then((data) => data.addCountries(req.body.countries))
    .then((data) => res.send("Activity created successfully"))
    .catch((err) => res.status(400).json({ error: err.message }));
});

router.get("/", (req, res) => {
  Activity.findAll({ include: Country }).then((data) => res.json(data));
});

module.exports = router;
