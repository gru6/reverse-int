module.exports = function reverse(n) {
  let str = String(Math.abs(n));
  return +Array.from(str).reverse().join('');
}

