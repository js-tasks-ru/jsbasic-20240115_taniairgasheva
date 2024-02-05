export default class UserTable {
  constructor(rows) {
    this.table = document.createElement("table");
    this.thead();
    this.createRows(rows);
  }

  thead() {
    const thead = this.table.createTHead();
    ["Имя", "Возраст", "Зарплата", "Город"].forEach((elem) => {
      const th = document.createElement("th");
      th.textContent = elem;
      thead.appendChild(th);
    });
  }

  createRows(rows) {
    const tbody = document.createElement("tbody");
    rows.forEach((user) => {
      const tr = document.createElement("tr");
      for (let i in user) {
        tr.insertCell().textContent = user[i];
      }
      this.button(tr);
      tbody.appendChild(tr);
    });
    this.table.appendChild(tbody);
  }

  button(tr) {
    const td = document.createElement("td");
    const button = document.createElement("button");
    button.textContent = "X";
    td.appendChild(button);
    tr.appendChild(td);

    button.addEventListener("click", () => {
      const hideTr = event.target.closest("tr");
      if (hideTr) hideTr.remove();
    });
  }

  get elem() {
    return this.table;
  }
}
