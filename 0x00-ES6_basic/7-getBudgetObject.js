export default function getBudgetObject(...theArgs) {
  const budget = {
    income: theArgs[0],
    gdp: theArgs[1],
    capita: theArgs[2],
  };

  return budget;
}
