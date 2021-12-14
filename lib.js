const sources = require("./sources");
const fetchFuelPricesFromSources = (state = "") => {
  return new Promise(async (resolve, reject) => {
    for (const source of sources) {
      try {
        if (state in source.mapping) {
          const data = await source.resolveFunction(source.mapping[state]);
          if (data.length > 0) {
            return resolve({ data, source: source.id });
          } else {
            continue;
          }
        } else {
          continue;
        }
      } catch (error) {
        continue;
      }
    }
    return reject({
      msg: `No sources available to get data of this state '${state}'`,
    });
  });
};

const getFuelPrice = (state = "") => {
  return new Promise(async (resolve, reject) => {
    try {
      const results = await fetchFuelPricesFromSources(state);
      resolve(results);
    } catch (error) {
      reject(error);
    }
    // resolve({ data: [], source: "et" });
  });
};

module.exports.getFuelPrice = getFuelPrice;
