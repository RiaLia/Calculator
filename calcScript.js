window.addEventListener('load', function(){


document.getElementById('reset').addEventListener('click', reset);
function reset(event) {
  calculator.display.value= '' ;
}
document.getElementById('square').addEventListener('click', square);
function square(event) {
  calculator.display.value=Math.sqrt(calculator.display.value);
}
document.getElementById('kvadrat').addEventListener('click', kvadrat);
function kvadrat(event) {
  calculator.display.value=Math.pow(calculator.display.value,2);
}
document.getElementById('divide').addEventListener('click', divide);
function divide(event) {
  calculator.display.value+='/';
}



document.getElementById('seven').addEventListener('click', seven);
function seven(event) {
  calculator.display.value+='7';
}
document.getElementById('eight').addEventListener('click', eight);
function eight(event) {
  calculator.display.value+='8';
}
document.getElementById('nine').addEventListener('click', nine);
function nine(event) {
  calculator.display.value+='9';
}
document.getElementById('multi').addEventListener('click', multi);
function multi(event) {
  calculator.display.value+='*';
}



document.getElementById('four').addEventListener('click', four);
function four(event) {
  calculator.display.value+='4';
}
document.getElementById('five').addEventListener('click', five);
function five(event) {
  calculator.display.value+='5';
}
document.getElementById('six').addEventListener('click', six);
function six(event) {
  calculator.display.value+='6';
}
document.getElementById('minus').addEventListener('click', minus);
function minus(event) {
  calculator.display.value+='-';
}



document.getElementById('one').addEventListener('click', one);
function one(event) {
  calculator.display.value+='1';
}
document.getElementById('two').addEventListener('click', two);
function two(event) {
  calculator.display.value+='2';
}
document.getElementById('three').addEventListener('click', three);
function three(event) {
  calculator.display.value+='3';
}
document.getElementById('plus').addEventListener('click', plus);
function plus(event) {
  calculator.display.value+='+';
}



document.getElementById('plusOrMinus').addEventListener('click', plusOrMinus);
function plusOrMinus(event) {
  calculator.display.value=(calculator.display.value==Math.abs
    (calculator.display.value)?-(calculator.display.value):Math.abs(calculator.display.value));
}
document.getElementById('zero').addEventListener('click', zero);
function zero(event) {
  calculator.display.value+='0';
}
document.getElementById('comma').addEventListener('click', comma);
function comma(event) {
  calculator.display.value+='.';
}
document.getElementById('equal').addEventListener('click', equal);
function equal(event) {
  calculator.display.value=eval(calculator.display.value);
}


});
