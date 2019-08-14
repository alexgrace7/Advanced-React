export default function(amount) {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  };
  // if its a whole, dollar amount, leave off the .00
  const formatter = new Intl.NumberFormat('en-US', options);
  return formatter.format(amount);
}
