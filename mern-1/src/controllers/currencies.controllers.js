const currencies = require("../data/currencies.json");

const currenciesData = Array.from(currencies.data);

const getCurrencies = (req, res) => {
  console.log(req.params, req.query);
  const { min_value } = req.query;
  if (min_value) {
    const result = currenciesData.filter((cur) => cur.min_size == min_value);
    res.json(result);
  }

  res.status(200).json(currenciesData);
};

const getCurrency = (req, res) => {
  console.log(req.params, req.query);
  const { currency } = req.params;
  const result = currenciesData.filter(
    (cur) => cur.id == currency.toUpperCase()
  );
  if (result.length) res.status(200).json(result);
  res.status(404).json({ message: "Invalid Symbol" });
};

module.exports = { getCurrencies, getCurrency };
