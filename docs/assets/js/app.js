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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgJCgnLnJ1YmxlJykuY3NzKHsnZGlzcGxheSc6J2lubGluZS1ibG9jayd9KTtcclxuXHJcbi8vICBwb3B1cCBib2xjayBwb3NpdGlvblxyXG4gICQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIGRpdiA9ICQoJyNjb2xvcnMnKTtcclxuICAgIHZhciBkaXYyID0gJCgnLmNvbnRlbnQtLWJyYW5kcycpO1xyXG4gICAgdmFyIGRpdjMgPSAkKCcuY29udGVudC0tZmlsdGVyX3BvcHVwJyk7XHJcblxyXG4gICAgICBpZighZGl2LmlzKGUudGFyZ2V0KSAmJiBkaXYuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApe1xyXG4gICAgICAgIGRpdi5oaWRlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKCFkaXYyLmlzKGUudGFyZ2V0KSAmJiBkaXYyLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKXtcclxuICAgICAgICBkaXYyLmhpZGUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIWRpdjMuaXMoZS50YXJnZXQpICYmIGRpdjMuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApe1xyXG4gICAgICAgIGRpdjMuaGlkZSgpO1xyXG4gICAgICB9XHJcbiAgfSlcclxuXHJcbi8vcmVtb3ZlIHBhZGRpbmctYm90dG9tIG9uIGdvb2RzIGxpc3RcclxuICAkKCcuY29udGVudC0tZ29vZHNfaXRlbTplcSgzKScpLmNzcyh7J21hcmdpbi1ib3R0b20nOicyMHB4J30pO1xyXG4gICQoJy5jb250ZW50LS1nb29kc19pdGVtOmVxKDcpJykuY3NzKHsnbWFyZ2luLWJvdHRvbSc6JzIwcHgnfSk7XHJcblxyXG5cclxuLy8gIHByZXZlbnREZWZhdWx0IG9uIGxpbmtzXHJcbiAgJCgnYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pXHJcblxyXG4vL2ZpbHRlciByZW1vdmVcclxuICAkKCcuY29udGVudC0tZmlsdGVyX2l0ZW1fbGluay1yZW1vdmUnKS5vbiAoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgJCgnLmNvbnRlbnQtLWZpbHRlcl9pdGVtX2lucHV0JykudmFsKCcnKTtcclxuICAgICQoJy5jb250ZW50LS1pbnB1dF9maWVsZCcpLnZhbCgnJyk7XHJcbiAgICAkKCcjY29sb3JzTGluaycpLnRleHQoJ9Cb0Y7QsdC+0LknKTtcclxuICAgICQoJyNicmFuZHMnKS50ZXh0KCfQm9GO0LHQvtC5Jyk7XHJcbiAgICAkKCcjYnJhbmRzSW5wdXQnKS52YWwoJycpO1xyXG4gICAgJCgnI2NvbG9ySW5wdXQnKS52YWwoJycpO1xyXG4gICAgJCggJyNzbGlkZXItcmFuZ2UnICkuc2xpZGVyKCBcInZhbHVlc1wiLCBbIDAsIDEwMDAgXSApO1xyXG4gICAgJCggJy5jb250ZW50LS1maWx0ZXJfaXRlbV92YWxfY29udGFpbmVyMScgKS52YWwoICQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKCBcInZhbHVlc1wiLCAwICkgKTtcclxuICAgICQoICcuY29udGVudC0tZmlsdGVyX2l0ZW1fdmFsX2NvbnRhaW5lcjInICkudmFsKCQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKCBcInZhbHVlc1wiLCAxICkgKTtcclxuICB9KVxyXG5cclxuXHJcbi8vIGNvbG9ycyBsaW5rIGZpbHRlXHJcbiAgJCgnI2NvbG9yc0xpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgeCA9IGUucGFnZVg7XHJcbiAgICB2YXIgeSA9IGUucGFnZVk7XHJcbiAgICAkKCcjY29sb3JzJykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJywndG9wJzogKHkgKyAxMCkgKyAncHgnLCdsZWZ0JzogKHggLSA1MCkgKyAncHgnfSk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5jb250ZW50LS1jb2xvcnNfbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBjb2xvciA9ICQodGhpcykuYXR0cignZGF0YS1jb2xvcicpO1xyXG4gICAgJCgnI2NvbG9yc0xpbmsnKS50ZXh0KGNvbG9yKTtcclxuICAgICQoJyNjb2xvcklucHV0JykudmFsKGNvbG9yKTtcclxuICAgICQoJyNjb2xvcnMnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICB9KTtcclxuXHJcblxyXG4vLyAgYnJuYWRzIGZpbHRlclxyXG4gICQoJyNicmFuZHMnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgeCA9IGUucGFnZVg7XHJcbiAgICB2YXIgeSA9IGUucGFnZVk7XHJcbiAgICAkKCcuY29udGVudC0tYnJhbmRzJykuY3NzKHsnZGlzcGxheSc6J2ZsZXgnLCd0b3AnOiAoeSArIDEwKSArICdweCcsJ2xlZnQnOiAoeCAtIDUwKSArICdweCd9KTtcclxuICB9KTtcclxuXHJcbiAgJCgnLmNvbnRlbnQtLWJyYW5kc19saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIGJyYW5kcyA9ICQodGhpcykuYXR0cignZGF0YS1icmFuZHMnKTtcclxuICAgICQoJyNicmFuZHMnKS50ZXh0KGJyYW5kcyk7XHJcbiAgICAkKCcjYnJhbmRzSW5wdXQnKS52YWwoYnJhbmRzKTtcclxuICAgICQoJy5jb250ZW50LS1icmFuZHMnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICB9KTtcclxuXHJcbiQoJy5jb250ZW50LS1nb29kc19idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgdmFyIHggPSBlLnBhZ2VYO1xyXG4gIHZhciB5ID0gZS5wYWdlWTtcclxuICAkKCcuY29udGVudC0tZmlsdGVyX3BvcHVwJykuZmFkZUluKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xyXG59KVxyXG5cclxuLy9qcXVlcnkgVUkgc2xpZGVyIHJhbmdlXHJcbiAgICQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKHtcclxuICAgIHJhbmdlOiB0cnVlLFxyXG4gICAgIG1pbjogMCxcclxuICAgICBtYXg6IDEwMDAsXHJcbiAgICAgdmFsdWVzOiBbMCwgMTAwMCBdLFxyXG4gICAgIHNsaWRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xyXG4gICAgICAkKCBcIi5jb250ZW50LS1maWx0ZXJfaXRlbV92YWxfY29udGFpbmVyMVwiICkudGV4dCggIHVpLnZhbHVlc1sgMCBdICk7XHJcbiAgICAgICQoIFwiLmNvbnRlbnQtLWZpbHRlcl9pdGVtX3ZhbF9jb250YWluZXIyXCIgKS50ZXh0KCAgdWkudmFsdWVzWyAxIF0gKTtcclxuICAgICAgJCggXCIubWluUHJpY2UgXCIgKS52YWwoIHVpLnZhbHVlc1sgMCBdICk7XHJcbiAgICAgICQoIFwiLm1heFByaWNlIFwiICkudmFsKCB1aS52YWx1ZXNbIDEgXSApO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcclxuICAgICAgICAkKCcudWktc2xpZGVyLWhhbmRsZTplcSgwKScpLmFwcGVuZCgkKFwiLmNvbnRlbnQtLWZsaXRlcl9wcmljZV9jb250YWluZXIxXCIpKTtcclxuICAgICAgICAkKCcudWktc2xpZGVyLWhhbmRsZTplcSgxKScpLmFwcGVuZCgkKFwiLmNvbnRlbnQtLWZsaXRlcl9wcmljZV9jb250YWluZXIyXCIpKTtcclxuICAgIH1cclxuICAgfSk7XHJcblxyXG4gICQoIFwiLmNvbnRlbnQtLWZpbHRlcl9pdGVtX3ZhbF9jb250YWluZXIxXCIgKS50ZXh0KCAkKCBcIiNzbGlkZXItcmFuZ2VcIiApLnNsaWRlciggXCJ2YWx1ZXNcIiwgMCApICk7XHJcbiAgJCggXCIuY29udGVudC0tZmlsdGVyX2l0ZW1fdmFsX2NvbnRhaW5lcjJcIiApLnRleHQoICQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKCBcInZhbHVlc1wiLCAxICkgKTtcclxuXHJcbn0pO1xyXG4iXX0=
