import { calculateNumber } from './Utils';

export function sendPaymentRequestToApi (totalAmount, totalShipping) {
  const result = calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}
