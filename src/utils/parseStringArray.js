module.exports = function parseStringArray(arrayString) {
  return arrayString.split(",").map(tech => tech.trim());
};
