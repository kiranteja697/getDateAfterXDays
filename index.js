const addDays = require("date-fns/addDays");

function getDate(x) {
  const result = addDays(new Date(2020, 7, 22), parseInt(x));
  return result;
}

module.exports = getDate;