const getQuotientAndReminder = (dividend, divisor) => {
  const rawQuotient = dividend / divisor;
  const reminder = rawQuotient % 1;
  const quotient = rawQuotient - reminder;

  return { quotient, reminder };
};

export default getQuotientAndReminder;
