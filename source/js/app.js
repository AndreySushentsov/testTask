$(document).ready(function(){
  $('.content--brands').css({'display':'none'});
  // var target = document.body;
  // $(target).on('ckick', function(){
  //   console.log('close');
  //   $('.content--brands').css({'display':'none'});
  //   $('#colors').css({'display':'none'});
  // });

  $(document).mouseup(function(e) {
    var div = $('#colors');
    var div2 = $('.content--brands');

      if(!div.is(e.target) && div.has(e.target).length === 0){
        div.hide();
      }

      if(!div2.is(e.target) && div2.has(e.target).length === 0){
        div2.hide();
      }
  })
  $('.content--filter_item_link').on('click', function(e){
    e.preventDefault();
  })
  $('.content--filter_item_link-remove').on ('click', function(e) {

    $('.content--filter_item_input').val('');
    $('.content--input_field').val('');
  })
  $('#colorsLink').on('click', function(e) {

  var x = e.pageX;
  var y = e.pageY;
  //  console.log(x);
    $('#colors').css({'display':'block','top': y + 'px','left': x + 'px'});
  });
  $('.content--colors_link').on('click', function(e) {

    $('#colors').css({'display':'none'});
  });

  $('#brands').on('click', function(e) {

    var x = e.pageX;
    var y = e.pageY;
  //  console.log(x);
    $('.content--brands').css({'display':'flex','top': y + 'px','left': x + 'px'});
  });

  $('.content--brands_link').on('click', function(e) {
    $('.content--brands').css({'display':'none'});
  });

//jquery UI
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 1000,
    values: [0, 1000 ],
    slide: function( event, ui ) {
      $( ".content--filter_item_val_container1" ).val( ui.values[ 0 ] );
      $( ".content--filter_item_val_container2" ).val( ui.values[ 1 ] );
    },
    create: function( event, ui ) {
        $('.ui-slider-handle:eq(0)').append($(".content--fliter_price_container1"));
        $('.ui-slider-handle:eq(1)').append($(".content--fliter_price_container2"));
    }
  });

  $( ".content--filter_item_val_container1" ).val( $( "#slider-range" ).slider( "values", 0 ) );
  $( ".content--filter_item_val_container2" ).val($( "#slider-range" ).slider( "values", 1 ) );


});
