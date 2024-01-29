function makeDiagonalRed(table) {
  table
    .querySelectorAll("tr")
    .forEach((row, i) => (row.cells[i].style.background = "red"));

  // FOR LOOP
  // let rows = table.rows;
  // for (let i = 0; i < rows.length; i++) {
  //   rows[i].cells[i].style.background = "red";
  // }
}
