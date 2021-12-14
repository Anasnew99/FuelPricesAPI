const { STATES } = require("../../constants");
const { resolveFunction, mapping } = require("../../sources/ndtv-source");

const test = () => {
  resolveFunction(mapping[STATES.UTTAR_PRADESH])
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {});
};

test();
