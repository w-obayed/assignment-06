const day_count = (date) => {
  const old_date = new Date(date);
  const new_date = new Date();

  const result = Math.floor(
    (new_date.getTime() - old_date.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (result > 120) {
    return `You are avaliable ${result - 120}`;
  } else {
    return `You waited for ${120 - result} days`;
  }
};
