function sumSalary(salaries) {
  let result = 0;
  for (let i in salaries) {
    isFinite(salaries[i]) ? result += salaries[i] : result;
  }
  return result;
}
