import Currency from "./3-currency.js";

const dollar = new Currency('$', 'Dollars');

test("displayFullCurrency is implemented correctly", () => {
    expect(dollar.displayFullCurrency()).toBe('Dollars ($)');
});