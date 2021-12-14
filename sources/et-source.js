const { default: axios } = require("axios");
const { etMapping } = require("../config/constants");

module.exports = {
  id: "et",
  mapping: etMapping,
  resolveFunction: (state = "") => {
    return new Promise((resolve, reject) => {
      const limit = 100;
      const latestDate = new Date();
      const processData = (DATA) => {
        const data = [];
        DATA.results.some((datum, index) => {
          if (index < limit) {
            data.push({
              petrolPrice: parseFloat(datum.petrolPrice),
              dieselPrice: parseFloat(datum.dieselPrice),
              dieselChange: parseFloat(datum.dieselChange),
              petrolChange: parseFloat(datum.petrolChange),
              date: new Date(datum.priceDate),
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
