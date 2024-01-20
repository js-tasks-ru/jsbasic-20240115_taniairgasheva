function checkSpam(str) {
  str = str.toLowerCase();
  return str.includes('xbet') || str.includes('xxx') ? true : false;
}