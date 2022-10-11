// kisman metod
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

//metod iteracii

function f(x){
    return Math.pow(x, 4) - 8 * Math.pow(x, 2) + 6 * x + 7; 
}

function g(x){
    const alpha = 101.25
    return x + f(x) / alpha;
}

function main(x = -4, xnext = g(x), eps){

    while(Math.abs(xnext - x) > eps){
        x = xnext;
        xnext = g(xnext);
    }
    
    return xnext;
}


// metod Newtona

function f(x){
    return Math.pow(x, 5) - 5 * x - 22
}

function f_(x){
    return 5 * Math.pow(x, 4) - 5;
}

function xn(x){
    return x - (f(x) / f_(x));
}

function main(x, eps, count){
    let xnext = xn(x);
    
    while(Math.abs(xnext - x) > eps){
        x = xnext;
        xnext = xn(x);
        count++;
    }
    
    return xnext + " steps " + count;
}
