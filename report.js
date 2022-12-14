let stepDivision = 0,
  stepIteration = 0,
  stepNewton = 0,
  stepChord = 0;

//  devision method
function divisionMethod(a, b, eps) {
  let c = a + b / 2;
  ++stepDivision;
  if (Math.abs(f(c)) < eps) return c;
  if (f(a) * f(c) < 0) return divisionMethod(a, c, eps);

  return f(c, b, eps);
}
//  iteration method
function iterationMethod(x, xnext, eps) {
  while (Math.abs(xnext - x) > eps) {
    x = xnext;
    xnext = iteration_g(xnext);
    ++stepIteration;
  }

  return xnext;
}
//  newton method
function newtonMethod(x, eps) {
  let xnext = xn(x);

  while (Math.abs(xnext - x) > eps) {
    x = xnext;
    xnext = xn(x);
    ++stepNewton;
  }

  return xnext;
}
//  chord's method
function chordMethod(xn, xnext, eps) {
  let save = 0;

  while (Math.abs(f(xnext)) > eps) {
    save = xnext;
    xnext =
      xnext -
      (f(xnext) * (xnext - xn)) /
        (f(xnext) - f(xn));
    xn = save;
    ++stepChord;
  }

  return xnext;
}

console.log(
  "division method --> ",
  divisionMethod(1, 4, Math.pow(10, -3)),
  "steps --> ",
  stepDivision
);
console.log(
  "iteration method --> ",
  iterationMethod(4, 3.9, Math.pow(10, -3)),
  " steps --> ",
  stepIteration
);
console.log(
  "newton method --> ",
  newtonMethod(4, Math.pow(10, -3)),
  " steps --> ",
  stepNewton
);
console.log(
  "chord method --> ",
  chordMethod(4, 3.9, Math.pow(10, -3)),
  " steps --> ",
  stepChord
);





















function f(x) {
  return Math.pow(x, 5) - 5 * x - 22;
}

function iteration_f(x) {
  return Math.pow(x, 4) - 8 * Math.pow(x, 2) + 6 * x + 7;
}

function iteration_g(x) {
  return (x + iteration_f(x)) / 101.25;
}

function newton_f(x) {
  return Math.pow(x, 5) - 5 * x - 22;
}

function newton_f_(x) {
  return 5 * Math.pow(x, 4) - 5;
}

function xn(x) {
  return x - newton_f(x) / newton_f_(x);
}
