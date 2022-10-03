function f(x) {
  return Math.pow(x, 5) - 5 * x - 22;
}

function func(a, b, eps) {
  let c = a + b / 2;

  if (Math.abs(f(c)) < eps) return c;
  if (f(a) * f(c) < 0) return func(a, c, eps);

  return func(c, b, eps);
}

console.log(func(1, 4, Math.pow(10, -3)));

/////////////////////

function fn(x) {
  return 5 * x + 22;
}

function derivative(n) {
  const deg = -0.8;
  return Math.pow(fn(n), deg);
}

function main(a, b) {
  const mid = a + b / 2;

  if (Math.abs(derivative(mid)) < 1) return true;
  else return false;
}

console.log(main(-4.3, -4.2));
