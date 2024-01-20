function truncate(str, maxlength) {
  let result = str.length < maxlength ? 
  str : str.substring(0, maxlength - 1) + '…';
  return result;
}
