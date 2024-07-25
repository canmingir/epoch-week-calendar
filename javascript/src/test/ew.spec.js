const {equal, notEqual, deepEqual, throws} = require("assert");
const ew = require("../ew");

describe("Epoch Week Calendar", () => {
  it("returns 0 at epoch", () => {
    const date = new Date(0);
    equal(ew(date), 0);
  });

  it("returns 0 at first millisecond", () => {
    const date = new Date(1);
    equal(ew(date), 0);
  });

  it("returns 0 at first second", () => {
    const date = new Date(1000);
    equal(ew(date), 0);
  });

  it("returns 0 at first minute", () => {
    const date = new Date(1000 * 60);
    equal(ew(date), 0);
  });

  it("returns 0 at first hour", () => {
    const date = new Date(1000 * 60 * 60);
    equal(ew(date), 0);
  });

  it("returns 0 in first day", () => {
    const date = new Date(1000 * 60 * 60 * 24);
    equal(ew(date), 0);
  });

  it("returns 0 in first sunday", () => {
    const date = new Date((1000 * 60 * 60 * 24 * 4) - 1);
    equal(ew(date), 0);
  });

  it("returns 1 in first monday", () => {
    const date = new Date(1000 * 60 * 60 * 24 * 4);
    equal(ew(date), 1);
  });

  it("returns 1 at the end of first monday", () => {
    const date = new Date((1000 * 60 * 60 * 24 * 11) - 1);
    equal(ew(date), 1);
  });

  it("returns 2 at second monday", () => {
    const date = new Date(1000 * 60 * 60 * 24 * 11);
    equal(ew(date), 2);
  });

  it("returns 678 at the birth of the internet", () => {
    const date = new Date(410227200000);
    equal(ew(date), 678);
  });
});
