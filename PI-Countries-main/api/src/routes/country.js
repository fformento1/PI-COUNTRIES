const { Router } = require("express");
const router = Router();
const fetch = require("node-fetch");
const { Country, Activity } = require("../db");

router.get("/", (req, res) => {
  Country.findAll().then((data) => {
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
              };
            })
          );
        });
    } else {
      if (req.query.name) {
        let countryFiltered = data.filter(
          (el) => req.query.name.toLowerCase() === el.name.toLowerCase()
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
          };
        })
      );
    }
  });
});

router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

module.exports = router;
