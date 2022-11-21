<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Sort</h2>

<p>Click the buttons to sort the array alphabetically or numerically.</p>
<h2>JavaScript Array.map()</h2>
<p>Creates a new array by performing a function on each array element.</p>
<h2>JavaScript Array.filter()</h2>
<p>Creates a new array with all array elements that passes a test.</p>

<button onclick="myFunction1()">Sort Alphabetically</button>
<button onclick="myFunction2()">Sort Numerically</button>

<p id="demo1"></p>
<p id="demo2"></p>
<p id="demo3"></p>
<p id="demo4"></p>
<p id="demo5"></p>

<script>
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo1").innerHTML = points;  

function myFunction1() {
  points.sort();
  document.getElementById("demo2").innerHTML = points;
}
function myFunction2() {
  points.sort(function(a, b){return a - b});
  document.getElementById("demo3").innerHTML = points;
}
const numbers1 = [45, 4, 9, 16, 25];// array map
const numbers2 = numbers1.map(myFunction);

document.getElementById("demo4").innerHTML = numbers2;

function myFunction(value, index, array) {
  return value * 2;
}
const numbers = [45, 4, 9, 16, 25];// array filter
const over18 = numbers.filter(myFunction);

document.getElementById("demo5").innerHTML = over18;

function myFunction(value, index, array) {
  return value > 18;
}
</script>

</body>
</html>
