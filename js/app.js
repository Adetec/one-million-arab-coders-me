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



( function( $ ) {
  
  $.fn.hoverfold = function( args ) {

    this.each( function() {
    
      $( this ).children( '.view' ).each( function() {
      
        var $item   = $( this ),
          img   = $item.children( 'img' ).attr( 'src' ),
          struct  = '<div class="slice s1">';
            struct  +='<div class="slice s2">';
              struct  +='<div class="slice s3">';
                struct  +='<div class="slice s4">';
                  struct  +='<div class="slice s5">';
                  struct  +='</div>';
                struct  +='</div>';
              struct  +='</div>';
            struct  +='</div>';
          struct  +='</div>';
          
        var $struct = $( struct );
        
        $item.find( 'img' ).remove().end().append( $struct ).find( 'div.slice' ).css( 'background-image', 'url(' + img + ')' ).prepend( $( '<span class="overlay" ></span>' ) );
        
      } );
      
    });

  };

} )( jQuery );