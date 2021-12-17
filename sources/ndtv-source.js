const { ndtvMapping } = require("../config/constants");
const { default: axios } = require("axios");
const ID = "ndtv";
module.exports = {
  id: ID,
  mapping: ndtvMapping,
  resolveFunction: (state = "", date = new Date()) => {
    return new Promise(async function (resolve, reject) {
      try {
        const petrolResponse = await axios.get(
          `https://www.ndtv.com/fuel-prices/petrol-price-in-${state}-state`
        );
        const dieselResponse = await axios.get(
          `https://www.ndtv.com/fuel-prices/diesel-price-in-${state}-state`
        );
        let prevNm = 0;

        const dieselOutPutArray = (
          dieselResponse.data
            .match(/data:\s\[.*\]/g)[0]
            ?.replace("data:", "")
            .replace("[", "")
            .replace("]", "")
            .replace("}]", "")
            .trim()
            .split(",") || []
        ).map((nm) => {
          //   console.log(nm);
          const currentNm = parseFloat(nm);
          const tempNm = prevNm;
          prevNm = currentNm;
          return {
            diesel_price: currentNm,
          };
        });
        prevNm = 0;
        // const dieselResponse = await axios.get();
        const petrolOutPutArray = (
          petrolResponse.data
            .match(/data:\s\[.*\]/g)[0]
            ?.replace("data:", "")
            .replace("[", "")
            .replace("]", "")
            .replace("}]", "")
            .trim()
            .split(",") || []
        ).map((nm) => {
          //   console.log(nm);
          const currentNm = parseFloat(nm);
          const tempNm = prevNm;
          prevNm = currentNm;
          return {
            petrol_price: currentNm,
          };
        });

        const minLength = Math.min(
          petrolOutPutArray.length,
          dieselOutPutArray.length
        );
        const output = [];
        for (
          let i = petrolOutPutArray.length - 1,
            j = dieselOutPutArray.length - 1,
            count = 0;
          count < minLength;
          count++, j--, i--
        ) {
          output.push({
            ...petrolOutPutArray[i],
            ...dieselOutPutArray[j],
            source: ID,
            date: new Date(date.getTime() - count * 24 * 60 * 60 * 1000),
          });
        }
        resolve(output);
      } catch (error) {
        reject({ msg: "Failed" });
      }
    });
  },
};
