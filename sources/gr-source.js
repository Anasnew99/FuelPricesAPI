const cheerio = require("cheerio");
const { default: axios } = require("axios");

const { goodReturnsMapping } = require("../config/constants");
const ID = "goodreturns";
module.exports = {
  id: ID,
  mapping: goodReturnsMapping,
  resolveFunction: (state = "", date = new Date()) => {
    return new Promise(async (resolve, rej) => {
      try {
        const dieselResponse = await axios.get(
          `https://www.goodreturns.in/diesel-price-in-${state}.html`
        );
        const petrolResponse = await axios.get(
          `https://www.goodreturns.in/petrol-price-in-${state}.html`
        );
        let sum = 0;
        let count = 0;
        let $ = cheerio.load(dieselResponse.data);

        $("#moneyweb-leftPanel > div.gold_silver_table tr>td:nth-child(2)")
          .contents()
          .each((e, el) => {
            const data = parseFloat(el.data.replace("₹", "").trim());
            if (data) {
              sum += parseFloat(el.data.replace("₹", "").trim());
              count++;
            }
          });
        const dieselAvg = sum / count;
        sum = 0;
        count = 0;
        $("#moneyweb-leftPanel > div.gold_silver_table tr>td:nth-child(3)")
          .contents()
          .each((e, el) => {
            const data = parseFloat(el.data.replace("₹", "").trim());
            if (data) {
              sum += parseFloat(el.data.replace("₹", "").trim());
              count++;
            }
          });

        const yestDiesel = sum / count;
        sum = 0;
        count = 0;
        $ = cheerio.load(petrolResponse.data);
        $("#moneyweb-leftPanel > div.gold_silver_table tr>td:nth-child(2)")
          .contents()
          .each((e, el) => {
            const data = parseFloat(el.data.replace("₹", "").trim());
            if (data) {
              sum += parseFloat(el.data.replace("₹", "").trim());
              count++;
            }
          });
        const petrolAvg = sum / count;
        sum = 0;
        count = 0;
        $("#moneyweb-leftPanel > div.gold_silver_table tr>td:nth-child(3)")
          .contents()
          .each((e, el) => {
            const data = parseFloat(el.data.replace("₹", "").trim());
            if (data) {
              sum += parseFloat(el.data.replace("₹", "").trim());
              count++;
            }
          });

        const yestpetrol = sum / count;
        const outResult = [
          {
            diesel_price: dieselAvg,
            petrol_price: petrolAvg,
            source: ID,
            date: date,
          },
          {
            diesel_price: yestDiesel,
            petrol_price: yestpetrol,
            source: ID,
            date: new Date(date.getTime() - 24 * 60 * 60 * 1000),
          },
        ];
        resolve(outResult);
      } catch (error) {
        rej(error);
      }
    });
  },
};
