$(document).ready(function(){
  $('.ruble').css({'display':'inline-block'});

//  popup bolck position
  $(document).mouseup(function(e) {
    var div = $('#colors');
    var div2 = $('.content--brands');
    var div3 = $('.content--filter_popup');

      if(!div.is(e.target) && div.has(e.target).length === 0){
        div.hide();
      }

      if(!div2.is(e.target) && div2.has(e.target).length === 0){
        div2.hide();
      }

      if(!div3.is(e.target) && div3.has(e.target).length === 0){
        div3.hide();
      }
  })

//remove padding-bottom on goods list
  $('.content--goods_item:eq(3)').css({'margin-bottom':'20px'});
  $('.content--goods_item:eq(7)').css({'margin-bottom':'20px'});


//  preventDefault on links
  $('a').on('click', function(e){
    e.preventDefault();
  })

//filter remove
  $('.content--filter_item_link-remove').on ('click', function(e) {
    $('.content--filter_item_input').val('');
    $('.content--input_field').val('');
    $('#colorsLink').text('Любой');
    $('#brands').text('Любой');
    $('#brandsInput').val('');
    $('#colorInput').val('');
    $( '#slider-range' ).slider( "values", [ 0, 1000 ] );
    $( '.content--filter_item_val_container1' ).val( $( "#slider-range" ).slider( "values", 0 ) );
    $( '.content--filter_item_val_container2' ).val($( "#slider-range" ).slider( "values", 1 ) );
  })


// colors link filte
  $('#colorsLink').on('click', function(e) {
    var x = e.pageX;
    var y = e.pageY;
    $('#colors').css({'display':'block','top': (y + 10) + 'px','left': (x - 50) + 'px'});
  });

  $('.content--colors_link').on('click', function(e) {
    var color = $(this).attr('data-color');
    $('#colorsLink').text(color);
    $('#colorInput').val(color);
    $('#colors').css({'display':'none'});
  });


//  brnads filter
  $('#brands').on('click', function(e) {
    var x = e.pageX;
    var y = e.pageY;
    $('.content--brands').css({'display':'flex','top': (y + 10) + 'px','left': (x - 50) + 'px'});
  });

  $('.content--brands_link').on('click', function(e) {
    var brands = $(this).attr('data-brands');
    $('#brands').text(brands);
    $('#brandsInput').val(brands);
    $('.content--brands').css({'display':'none'});
  });

$('.content--goods_button').on('click', function(e) {
  var x = e.pageX;
  var y = e.pageY;
  $('.content--filter_popup').fadeIn({'display':'block'});
})

//jquery UI slider range
   $( "#slider-range" ).slider({
    range: true,
     min: 0,
     max: 1000,
     values: [0, 1000 ],
     slide: function( event, ui ) {
      $( ".content--filter_item_val_container1" ).text(  ui.values[ 0 ] );
      $( ".content--filter_item_val_container2" ).text(  ui.values[ 1 ] );
      $( ".minPrice " ).val( ui.values[ 0 ] );
      $( ".maxPrice " ).val( ui.values[ 1 ] );
    },
    create: function( event, ui ) {
        $('.ui-slider-handle:eq(0)').append($(".content--fliter_price_container1"));
        $('.ui-slider-handle:eq(1)').append($(".content--fliter_price_container2"));
    }
   });

  $( ".content--filter_item_val_container1" ).text( $( "#slider-range" ).slider( "values", 0 ) );
  $( ".content--filter_item_val_container2" ).text( $( "#slider-range" ).slider( "values", 1 ) );

});
