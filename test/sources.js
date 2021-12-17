const { expect } = require("chai");
const sources = require("../sources");

const testOne = (state, resolveFunction) => {
  return new Promise((resolve, reject) => {
    resolveFunction(state)
      .then((data) => {
        expect(data.length).to.be.greaterThan(0);
        expect(Array.isArray(data)).to.be.true;
        expect(typeof data[0] === "object").to.be.true;
        const { diesel_price, petrol_price } = data[0];
        expect(typeof petrol_price === "number").to.be.true;
        expect(typeof diesel_price === "number").to.be.true;
        resolve();
      })
      .catch((e) => {
        reject(e);
      });
  });
};

describe("Test all source used to fetch fuel prices", () => {
  for (const source of sources) {
    describe(`Test source: ${source.id}`, () => {
      const allPossibleStateIdentifiers = Object.values(source.mapping);
      const allPossibleState = Object.keys(source.mapping);
      describe("it should fetch correct values for all the mapped state", () => {
        for (let i = 0; i < allPossibleStateIdentifiers.length; i++) {
          it(`should fetch correct fuel price of '${allPossibleState[i]}'`, async () => {
            return testOne(
              allPossibleStateIdentifiers[i],
              source.resolveFunction
            )
              .then(() => {})
              .catch((e) => {
                throw new Error(e);
              });
          });
        }
      });
    });
  }
});
