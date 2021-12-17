const { default: axios } = require("axios");
const { etMapping } = require("../config/constants");
const ID = "et";
module.exports = {
  id: ID,
  mapping: etMapping,
  resolveFunction: (state = "", date = new Date()) => {
    return new Promise((resolve, reject) => {
      const limit = Number(process.env.ET_LIMIT) || 100;
      const latestDate = new Date();
      const processData = (DATA) => {
        const data = [];
        DATA.results.some((datum, index) => {
          if (index < limit) {
            data.push({
              petrol_price: parseFloat(datum.petrolPrice),
              diesel_price: parseFloat(datum.dieselPrice),
              source: ID,
              date: new Date(date.getTime() - index * 24 * 60 * 60 * 1000),
            });
          } else {
            return true;
          }
          // console.log(datum);
        });
        resolve(data);
        // fs.writeFileSync("./output.json", JSON.stringify(DATA), { encoding: "utf8" });
      };
      axios
        .get(
          `https://mfapps.indiatimes.com/ET_Calculators/oilprice.htm?citystate=${state}&callback=processData&_=${latestDate.getTime()}`
        )
        .then((res) => {
          eval(res.data);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
};
