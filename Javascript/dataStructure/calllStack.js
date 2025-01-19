// call stack
function colors() {
  let data = 20;
  console.log(data);
}

function days() {
  colors();
}
 
function fruits() {
  days();
}
function topFunction() {
  fruits();
}
topFunction();
