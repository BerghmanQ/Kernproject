console.log('Hello World!');
console.log("test1");
function initElement() {
  var p = document.getElementById('test');
  p.onclick = showAlert();
  console.log("test");
    
};

function showAlert() {
  console.log("test2");
}