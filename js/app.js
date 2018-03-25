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
  href: '../../courses/quizz',
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
  worksShopsSlider.innerHTML+= '<div class="item"><a href="'+element.href+'"><img src="images/'+element.id+'.png" alt="'+element.id+'"></a><div class="text-center text-primary h4">'+element.id+'</div></div>'
})