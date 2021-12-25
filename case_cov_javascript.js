str = 'HeLlO wElCoMe To JaVaScRiPt';
res = '';
for (var i = 0; i < str.length; ++i) {
    c = str[i];
  if (c == c.toUpperCase()) {
    res += c.toLowerCase();
  } else if (c == c.toLowerCase()) {
    res += c.toUpperCase();
  } else {
    res += c;
  }
}
document.write(str)
document.write("<br>");
document.write(res)
