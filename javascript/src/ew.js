function ew(date = new Date()) {
  return Math.floor(Math.floor(date / (60 * 60 * 24 * 1000) + 3) / 7);
}

module.exports = ew;
