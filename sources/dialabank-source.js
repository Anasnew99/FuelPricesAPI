const cheerio = require("cheerio");
const { default: axios } = require("axios");

const { dialaBankMapping } = require("../config/constants");
const ID = "dialabank";
module.exports = {
  id: ID,
  mapping: dialaBankMapping,
  resolveFunction: (state = "", date = new Date()) => {
    return new Promise(async (resolve, rej) => {
      try {
        const dieselResponse = await axios.get(
          `https://www.dialabank.com/fuel/diesel-price-in-${state}`
        );
        const petrolResponse = await axios.get(
          `https://www.dialabank.com/fuel/petrol-price-in-${state}`
        );
        let $ = cheerio.load(dieselResponse.data);
        const dieselAvg = parseFloat(
          $(".w-pricing-item-header > .w-pricing-item-price")
            .contents()[0]
            .data.replace("₹", "")
            .replace("/ Litre", "")
            .trim()
        );

        $ = cheerio.load(petrolResponse.data);
        const petrolAvg = parseFloat(
          $(".w-pricing-item-header > .w-pricing-item-price")
            .contents()[0]
            .data.replace("₹", "")
            .replace("/ Litre", "")
            .trim()
        );
        // .w-pricing-item-header > .w-pricing-item-price

        if (dieselAvg && petrolAvg) {
          const outResult = [
            {
              diesel_price: dieselAvg,
              petrol_price: petrolAvg,
              source: ID,
              date: date,
            },
          ];
          resolve(outResult);
        } else {
          resolve([]);
        }
      } catch (error) {
        rej(error);
      }
    });
  },
};
