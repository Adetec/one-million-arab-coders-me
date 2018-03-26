

//cooooooookieeeees:
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*12*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

function checkCookie() {
  var visitor=getCookie("Visitor");
  if (visitor != "") {
    swal('Welcome again <span class="text-primary">'+visitor+'</span>');
  } else {
     visitor = prompt("Please enter your name:","");
     if (visitor != "" && visitor != null) {
         setCookie("Visitor", visitor, 30);
         swal('Hello <span class="text-primary">'+visitor+'</span>\n<small>Your name is saved in your browser!<br>cooookieeees </small><span class="glyphicon glyphicon-floppy-saved text-primary""></span>');
     }
     
  }
  document.getElementById('visitor').innerHTML='Welcome '+visitor+'!'
}








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

// My works shops:
var worksShops = [
 {
   id: 'clone-omac',
   type: 'html & css',
   href: '../courses/alhakeem/semantic-html-course/',
   label: 'Clone omac website'
 },
 {
  id: 'clone-facebook',
  type: 'html & css',
  href: '../facebook-clone-tutor-v',
  label: 'clone facebook home page'
},
{
  id: 'challenge',
  type: 'html & css',
  href: '../../contest2',
  label: 'secone week contest (Andrew Nady)'
},
{
  id: 'quizz',
  type: 'javaScript',
  href: '../../courses/quiz',
  label: 'Condition loop course'
},
{
  id: 'array',
  type: 'javaScript',
  href: '../courses/alhakeem/array/',
  label: 'array workshop'
},
{
  id: 'objects',
  type: 'javaScript',
  href: '../courses/alhakeem/products',
  label: 'javaScript workshop (objects)'
},

]


var worksShopsSlider = document.getElementById('workshops-slider');
var indicators = document.getElementById('carousel-indicators');
var slideTo= 1;
worksShops.forEach(function(element){
  indicators.innerHTML+= '<li data-target="#myCarousel" data-slide-to="'+worksShops[slideTo]+'"></li>';
  slideTo++;
  worksShopsSlider.innerHTML+= '<div class="item"><a href="'+element.href+'" target="_BLANK"><img src="images/'+element.id+'.png" alt="'+element.id+'"></a><div class="text-center text-primary h4">'+element.label+'</div></div>'
})



