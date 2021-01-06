var createReport = (input) => {
  let parsed = JSON.parse(input);
  let flat = flatten(parsed);
  return flat;
};

var flatten = (obj) => {
  let keys = Object.keys(obj);
  let flat = [];
  for (key of keys) {
    let val = obj[key];
    if (typeof val === 'object') {
      flat = flat.concat(flatten(val));
    } else {
      flat.push({[key]: val});
    }
  }
  return flat;
};

module.exports = createReport;