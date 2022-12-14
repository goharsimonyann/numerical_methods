unction f(x) {
  return Math.pow(x, 4);
}

//  method levostoronnix oryamougolnikov
function leftRec() {
  const a = 0, b = 1, n = 23, h = (b - a) / n;
  let result = 0;
  for (let i = 0; i <= n - 1; ++i) result += f(a + i * h);
  return result * h;
}

//  method pravostoronnix oryamougolnikov
function rightRec() {
   const a = 0, b = 1, n = 23, h = (b - a) / n;
   let result = 0;
  for (let i = 1; i <= n; ++i) result += f(a + i * h);
  return result * h ;
}

//  method srednix oryamougolnikov
function middleRec() {
  const a = 0, b = 1, n = 23, h = (b - a) / n;
  let result = 0;
  
  for (let i = 0; i < n; ++i) result += f(((a + i * h) + (a + (i + 1) * h)) / 2);
  return result * h;
}

//  method trapecij
function trapezodialMethod() {
  const a = 0, b = 1, n = 10, h = (b - a) / n;
  let result = 0;
  
  for (let i = 1; i < n; ++i) result += f(a + i * h);
  return h/2 * (a + result * 2 + f(a + n * h));
}
//  TO DO: method simpsonov oryamougolnikov

console.log("Leftside Rec method: ", leftRec());
console.log("Rightside Recmethod: ", rightRec());
console.log("Middle Rec method: ", middleRec());
console.log("Trapezodial method: ", trapezodialMethod());
