function showSalary(users, age) {
  let result = users
    .filter((el) => el.age <= age)
    .map((p) => `${p.name}, ${p.balance}`)
    .join("\n");
  return result;
}
