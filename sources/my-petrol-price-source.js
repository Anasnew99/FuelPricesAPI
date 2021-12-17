const cheerio = require("cheerio");
const { default: axios } = require("axios");

const { myPetrolPriceMapping } = require("../config/constants");
const ID = "my-petrol-price";
module.exports = {
  id: ID,
  mapping: myPetrolPriceMapping,
  resolveFunction: (state = "", date = new Date()) => {
    return new Promise(async (resolve, rej) => {
      try {
        const dieselResponse = await axios.get(
          `https://www.mypetrolprice.com/diesel-price-in-india.aspx?stateId=${state}`
        );
        const petrolResponse = await axios.get(
          `https://www.mypetrolprice.com/petrol-price-in-india.aspx?stateId=${state}`
        );
        let $ = cheerio.load(dieselResponse.data);
        let sum = 0;
        let count = 0;
        $(".ContentPage .SF>.txtC>b")
          .contents()
          .each((e, el) => {
            sum += parseFloat(el.data.replace("₹", "").trim());
            count++;
          });
        const dieselAvg = sum / count;
        sum = 0;
        count = 0;

        $ = cheerio.load(petrolResponse.data);
        $(".ContentPage .SF>.txtC>b")
          .contents()
          .each((e, el) => {
            sum += parseFloat(el.data.replace("₹", "").trim());
            count++;
          });

        const petrolAvg = sum / count;

        const outResult = [
          {
            diesel_price: dieselAvg,
            petrol_price: petrolAvg,
            source: ID,
            date: date,
          },
        ];
        resolve(outResult);
      } catch (error) {
        rej(error);
      }
    });
  },
};
