$(document).ready(function(){
  $('.content--brands').css({'display':'none'});

  $('#colorsLink').on('click', function(e) {
    e.preventDefault();
    let x = e.pageX;
    let y = e.pageY;
  //  console.log(x);
    $('#colors').css({'display':'block','top': y + 'px','left': x + 'px'});
  });
  $('.content--colors_link').on('click', function(e) {
    e.preventDefault();
    $('#colors').css({'display':'none'});
  });

  $('#brands').on('click', function(e) {
    e.preventDefault();
    let x = e.pageX;
    let y = e.pageY;
  //  console.log(x);
    $('.content--brands').css({'display':'flex','top': y + 'px','left': x + 'px'});
  });
  $('.content--brands_link').on('click', function(e) {
    e.preventDefault();
    $('.content--brands').css({'display':'none'});
  });

  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 1000,
    values: [0, 1000 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) +
    " - " + $( "#slider-range" ).slider( "values", 1 ) );
});
