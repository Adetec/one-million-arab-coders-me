


// Array for ImageSlider 
var images = ["images/Ramadhan_J5_02.JPG","images/Ramadhan_J5_03.JPG","images/Ramadhan_J5_04.JPG","images/Ramadhan_J5_05.JPG","images/Ramadhan_J5_06.JPG","images/Ramadhan_J5_07.JPG","images/Ramadhan_J5_08.JPG","images/Ramadhan_J5_09.JPG","images/Ramadhan_J5_10.JPG","images/Ramadhan_J5_11.JPG","images/Ramadhan_J5_12.JPG","images/Ramadhan_J5_13.JPG","images/Ramadhan_J5_14.JPG"];

var legend = ["Ramadhan J5 02","Ramadhan J5 03","Ramadhan J5 04","Ramadhan J5 05","Ramadhan J5 06","Ramadhan J5 07","Ramadhan J5 08","Ramadhan J5 09","Ramadhan J5 10","Ramadhan J5 11","Ramadhan J5 12","Ramadhan J5 13","Ramadhan J5 14"];
var num =0;

//
//var tictac = setInterval(myInterval(),3000);

function myInterval(){
setInterval(next(),3000);
}

// buttons Functions
function next(){
var slider = document.getElementById('slider');
num++;
if (num>=images.length) {
	num = 0;
}
slider.src=images[num];
var cum=num+1;
var len=images.length+1;
document.getElementById("legend").innerHTML=legend[num]+" "+cum+"/"+len;



}

function prev() {
num--;
if (num<0) {
	num = images.length-1;
}
slider.src=images[num];
var cum=+num+1;
var len=images.length+1;	
document.getElementById("legend").innerHTML=legend[num]+" "+cum+"/"+len;

}

var coucou = 20;

function test() {
    for (let i = 0; i < coucou; i++) {
		document.getElementById("hello").innerHTML=document.write('Hello World<br>');     
        i++;
        
    }
        
}
