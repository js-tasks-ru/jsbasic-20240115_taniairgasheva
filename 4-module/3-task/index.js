function highlight(table) {
  let rowsList = table.querySelectorAll("tr");
  for (let row of rowsList) {
    let status = row.children[3].dataset.available; //'true', 'false', 'undefined'
    let gender = row.children[2];
    let age = row.children[1];

    //Добавление класса и атрибута
    if (!status) row.hidden = true;
    row.classList.add(status === "true" ? "available" : "unavailable");

    //Добавление класса в зависимости от гендера
    row.classList.add(gender.innerText === "m" ? "male" : "female");

    //Проверка возраста. || находит первое истинное.
    age.innerText > 18 ||
      row.setAttribute("style", "text-decoration: line-through");
  }
}
