function camelize(str) {
  str = str.split("-");
  str = str[0] ? str[0] + str.handler(str) : str.handler(str);
  return str;
}

function handler(str) {
  return str
    .slice(1)
    .map((e) => e[0].toUpperCase() + e.slice(1))
    .join("");
}

Array.prototype.handler = handler;
