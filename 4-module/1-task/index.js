function makeFriendsList(friends) {
  let ul = document.createElement("ul");

  friends.forEach((f) => {
    let li = document.createElement("li");
    li.innerHTML = `${f.firstName} ${f.lastName}`;
    ul.appendChild(li);
  });

  return ul;

  //FOR-LOOP:

  // for (let i = 0; i < friends.length; i++) {
  //   let li = document.createElement("li");
  //   li.innerHTML = `${friends[i].firstName} ${friends[i].lastName}`;
  //   ul.appendChild(li);
  // }

  //FOR...OF:

  // for (let i of friends) {
  //   let li = document.createElement("li");
  //   li.innerHTML = `${i.firstName} ${i.lastName}`;
  //   ul.appendChild(li);
  // }

  //MAP

  // friends.map((f) => {
  //   li = document.createElement("li");
  //   li.innerHTML = `${f.firstName} ${f.lastName}`;
  //   ul.appendChild(li);
  // });
}
