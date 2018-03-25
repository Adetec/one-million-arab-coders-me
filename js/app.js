var visitor = prompt('Please, enter your name')
swal('Hello '+visitor);
document.getElementById('visitor').innerHTML='Welcome '+visitor+'!';



// Get time tictac tictac

function jibLwakt(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function abdaLwakt() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = jibLwakt(m);
  s = jibLwakt(s);
  document.getElementById('wakt').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    abdaLwakt()
  }, 500);
}
abdaLwakt();




// Enabled/disabled my information:

var me = document.getElementById("me");
var aboutMe = document.getElementById("about-me");


aboutMe.addEventListener('click', function(){
  if (me.style.display == 'block' ) {
    me.style.display = 'none';
  }
  else{
    me.style.display = 'block';
  }
});