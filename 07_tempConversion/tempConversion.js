const ftoc = function(fah) {
  let celsius = (fah-32) * 5/9;
  celsius = celsius.toFixed(1);
  return Number(celsius)
};

const ctof = function(celsius) {
  let fah = celsius * 9/5 +32;
  fah = fah.toFixed(1);
  return Number(fah)
};

ftoc(100);

module.exports = {
  ftoc,
  ctof
};
