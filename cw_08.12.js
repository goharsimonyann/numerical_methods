function xn(n, h) {
  return 2 + n * h;
}

function f(x, y) {
  return 2 * Math.pow(x, 2) + (y) / x;
}

function euler(yn) {
  let N = 10,
    H = 3,
    x0 = 2,
    h = H / N,
    y = 8;

  for (let i = 0; i < N; i++) {
    x0 = xn(i, h);
    y += h * f(x0, y);
    console.log("i: ", i, "y: ", y, "x0:", x0);
  }

  return y;
}
