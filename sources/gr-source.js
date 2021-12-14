const cheerio = require("cheerio");
const { default: axios } = require("axios");

const { goodReturnsMapping } = require("../config/constants");

module.exports = {
  id: "goodreturns",
  mapping: goodReturnsMapping,
  resolveFunction: (state = "") => {
    return new Promise(async (resolve, rej) => {
      try {
        const dieselResponse = await axios.get(
          `https://www.goodreturns.in/diesel-price-in-${state}.html`
        );
        const petrolResponse = await axios.get(
          `https://www.goodreturns.in/petrol-price-in-${state}.html`
        );
        let max = 0;
        let $ = cheerio.load(dieselResponse.data);

        $("#moneyweb-leftPanel > div.gold_silver_table tr>td:nth-child(2)")
          .contents()
          .each((e, el) => {
            const diesel = parseFloat(el.data.replace("₹", "").trim());
            if (diesel) {
              // total++;
              if (max < diesel) {
                max = diesel;
              }
            }
          });
        const dieselAvg = max;
        max = 0;
        $("#moneyweb-leftPanel > div.gold_silver_table tr>td:nth-child(3)")
          .contents()
          .each((e, el) => {
            const yestDiesel = parseFloat(el.data.replace("₹", "").trim());
            if (yestDiesel) {
              if (max < yestDiesel) {
                max = yestDiesel;
              }
            }
          });

        const yestDiesel = max;
        const dieselChange = max - dieselAvg;
        max = 0;
        $ = cheerio.load(petrolResponse.data);
        $("#moneyweb-leftPanel > div.gold_silver_table tr>td:nth-child(2)")
          .contents()
          .each((e, el) => {
            const petrol = parseFloat(el.data.replace("₹", "").trim());
            if (petrol) {
              if (max < petrol) {
                max = petrol;
              }
            }
          });
        const petrolAvg = max;
        max = 0;
        $("#moneyweb-leftPanel > div.gold_silver_table tr>td:nth-child(3)")
          .contents()
          .each((e, el) => {
            const yestpetrol = parseFloat(el.data.replace("₹", "").trim());
            if (yestpetrol) {
              if (max < yestpetrol) max = yestpetrol;
            }
          });

        const yestpetrol = max;
        const petrolChange = max - petrolAvg;
        const outResult = [
          {
            dieselPrice: dieselAvg,
            dieselChange,
            petrolPrice: petrolAvg,
            petrolChange,
            date: new Date(),
          },
          {
            dieselPrice: yestDiesel,
            dieselChange: 0,
            petrolPrice: yestpetrol,
            petrolChange: 0,
            date: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
          },
        ];
        resolve(outResult);
      } catch (error) {
        rej(error);
      }
    });
  },
};
