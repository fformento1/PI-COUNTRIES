const { Router } = require("express");
const router = Router();
const fetch = require("node-fetch");
const { Country, Activity } = require("../db");

router.get("/", (req, res) => {
  Country.findAll({ include: Activity }).then((data) => {
    if (data.length === 0) {
      fetch("https://restcountries.com/v3/all")
        .then((data) => data.json())
        .then((data) =>
          data.map((el) => {
            return {
              name: el.name.common,
              id: el.cca3,
              flags: el.flags ? el.flags[0] : "This country has no flag",
              continents: el.continents[0],
              capital: el.capital
                ? el.capital[0]
                : "This country has no capital",
              subregion: el.subregion
                ? el.subregion
                : "This country has no subregion",
              area: el.area,
              population: el.population,
            };
          })
        )
        .then((data) => {
          Country.bulkCreate(data);
          if (req.query.name) {
            let countryFiltered = data.filter((el) =>
              el.name.toLowerCase().includes(req.query.name.toLowerCase())
            );
            if (countryFiltered.length === 0) {
              return res.json("Country not found");
            } else {
              return res.json(
                countryFiltered.map((el) => {
                  return {
                    name: el.name,
                    flags: el.flags,
                    continents: el.continents,
                    id: el.id,
                    activities: [],
                  };
                })
              );
            }
          }
          return res.json(
            data.map((el) => {
              return {
                name: el.name,
                flags: el.flags,
                continents: el.continents,
                id: el.id,
                activities: [],
              };
            })
          );
        });
    } else {
      if (req.query.name) {
        let countryFiltered = data.filter((el) =>
          el.name.toLowerCase().includes(req.query.name.toLowerCase())
        );
        if (countryFiltered.length === 0) {
          return res.status(400).json({ error: "Country not found" });
        } else {
          return res.json(
            countryFiltered.map((el) => {
              return {
                name: el.name,
                flags: el.flags,
                continents: el.continents,
                id: el.id,
                activities: el.activities,
              };
            })
          );
        }
      }
      return res.json(
        data.map((el) => {
          return {
            name: el.name,
            flags: el.flags,
            continents: el.continents,
            id: el.id,
            activities: el.activities,
          };
        })
      );
    }
  });
});

router.get("/:id", (req, res) => {
  Country.findByPk(req.params.id, { include: Activity }).then((data) =>
    res.json({
      flags: data.flags,
      name: data.name,
      continents: data.continents,
      id: data.id,
      capital: data.capital,
      subregion: data.subregion,
      area: data.area,
      population: data.population,
      activities: data.activities,
    })
  );
});

module.exports = router;
