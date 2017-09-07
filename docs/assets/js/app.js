$(document).ready(function(){
  $('.content--brands').css({'display':'none'});

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgJCgnLmNvbnRlbnQtLWJyYW5kcycpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG5cclxuLy8gIHBvcHVwIGJvbGNrIHBvc2l0aW9uXHJcbiAgJChkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgZGl2ID0gJCgnI2NvbG9ycycpO1xyXG4gICAgdmFyIGRpdjIgPSAkKCcuY29udGVudC0tYnJhbmRzJyk7XHJcbiAgICB2YXIgZGl2MyA9ICQoJy5jb250ZW50LS1maWx0ZXJfcG9wdXAnKTtcclxuXHJcbiAgICAgIGlmKCFkaXYuaXMoZS50YXJnZXQpICYmIGRpdi5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgZGl2LmhpZGUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIWRpdjIuaXMoZS50YXJnZXQpICYmIGRpdjIuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApe1xyXG4gICAgICAgIGRpdjIuaGlkZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZighZGl2My5pcyhlLnRhcmdldCkgJiYgZGl2My5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgZGl2My5oaWRlKCk7XHJcbiAgICAgIH1cclxuICB9KVxyXG5cclxuLy9yZW1vdmUgcGFkZGluZy1ib3R0b20gb24gZ29vZHMgbGlzdFxyXG4gICQoJy5jb250ZW50LS1nb29kc19pdGVtOmVxKDMpJykuY3NzKHsnbWFyZ2luLWJvdHRvbSc6JzIwcHgnfSk7XHJcbiAgJCgnLmNvbnRlbnQtLWdvb2RzX2l0ZW06ZXEoNyknKS5jc3MoeydtYXJnaW4tYm90dG9tJzonMjBweCd9KTtcclxuXHJcblxyXG4vLyAgcHJldmVudERlZmF1bHQgb24gbGlua3NcclxuICAkKCdhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSlcclxuXHJcbi8vZmlsdGVyIHJlbW92ZVxyXG4gICQoJy5jb250ZW50LS1maWx0ZXJfaXRlbV9saW5rLXJlbW92ZScpLm9uICgnY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAkKCcuY29udGVudC0tZmlsdGVyX2l0ZW1faW5wdXQnKS52YWwoJycpO1xyXG4gICAgJCgnLmNvbnRlbnQtLWlucHV0X2ZpZWxkJykudmFsKCcnKTtcclxuICAgICQoJyNjb2xvcnNMaW5rJykudGV4dCgn0JvRjtCx0L7QuScpO1xyXG4gICAgJCgnI2JyYW5kcycpLnRleHQoJ9Cb0Y7QsdC+0LknKTtcclxuICAgICQoJyNicmFuZHNJbnB1dCcpLnZhbCgnJyk7XHJcbiAgICAkKCcjY29sb3JJbnB1dCcpLnZhbCgnJyk7XHJcbiAgICAkKCAnI3NsaWRlci1yYW5nZScgKS5zbGlkZXIoIFwidmFsdWVzXCIsIFsgMCwgMTAwMCBdICk7XHJcbiAgICAkKCAnLmNvbnRlbnQtLWZpbHRlcl9pdGVtX3ZhbF9jb250YWluZXIxJyApLnZhbCggJCggXCIjc2xpZGVyLXJhbmdlXCIgKS5zbGlkZXIoIFwidmFsdWVzXCIsIDAgKSApO1xyXG4gICAgJCggJy5jb250ZW50LS1maWx0ZXJfaXRlbV92YWxfY29udGFpbmVyMicgKS52YWwoJCggXCIjc2xpZGVyLXJhbmdlXCIgKS5zbGlkZXIoIFwidmFsdWVzXCIsIDEgKSApO1xyXG4gIH0pXHJcblxyXG5cclxuLy8gY29sb3JzIGxpbmsgZmlsdGVcclxuICAkKCcjY29sb3JzTGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciB4ID0gZS5wYWdlWDtcclxuICAgIHZhciB5ID0gZS5wYWdlWTtcclxuICAgICQoJyNjb2xvcnMnKS5jc3MoeydkaXNwbGF5JzonYmxvY2snLCd0b3AnOiAoeSArIDEwKSArICdweCcsJ2xlZnQnOiAoeCAtIDUwKSArICdweCd9KTtcclxuICB9KTtcclxuXHJcbiAgJCgnLmNvbnRlbnQtLWNvbG9yc19saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIGNvbG9yID0gJCh0aGlzKS5hdHRyKCdkYXRhLWNvbG9yJyk7XHJcbiAgICAkKCcjY29sb3JzTGluaycpLnRleHQoY29sb3IpO1xyXG4gICAgJCgnI2NvbG9ySW5wdXQnKS52YWwoY29sb3IpO1xyXG4gICAgJCgnI2NvbG9ycycpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gIH0pO1xyXG5cclxuXHJcbi8vICBicm5hZHMgZmlsdGVyXHJcbiAgJCgnI2JyYW5kcycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciB4ID0gZS5wYWdlWDtcclxuICAgIHZhciB5ID0gZS5wYWdlWTtcclxuICAgICQoJy5jb250ZW50LS1icmFuZHMnKS5jc3MoeydkaXNwbGF5JzonZmxleCcsJ3RvcCc6ICh5ICsgMTApICsgJ3B4JywnbGVmdCc6ICh4IC0gNTApICsgJ3B4J30pO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuY29udGVudC0tYnJhbmRzX2xpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgYnJhbmRzID0gJCh0aGlzKS5hdHRyKCdkYXRhLWJyYW5kcycpO1xyXG4gICAgJCgnI2JyYW5kcycpLnRleHQoYnJhbmRzKTtcclxuICAgICQoJyNicmFuZHNJbnB1dCcpLnZhbChicmFuZHMpO1xyXG4gICAgJCgnLmNvbnRlbnQtLWJyYW5kcycpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gIH0pO1xyXG5cclxuJCgnLmNvbnRlbnQtLWdvb2RzX2J1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICB2YXIgeCA9IGUucGFnZVg7XHJcbiAgdmFyIHkgPSBlLnBhZ2VZO1xyXG4gICQoJy5jb250ZW50LS1maWx0ZXJfcG9wdXAnKS5mYWRlSW4oeydkaXNwbGF5JzonYmxvY2snfSk7XHJcbn0pXHJcbi8vanF1ZXJ5IFVJIHNsaWRlciByYW5nZVxyXG4gICQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKHtcclxuICAgIHJhbmdlOiB0cnVlLFxyXG4gICAgbWluOiAwLFxyXG4gICAgbWF4OiAxMDAwLFxyXG4gICAgdmFsdWVzOiBbMCwgMTAwMCBdLFxyXG4gICAgc2xpZGU6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XHJcbiAgICAgICQoIFwiLmNvbnRlbnQtLWZpbHRlcl9pdGVtX3ZhbF9jb250YWluZXIxXCIgKS52YWwoIHVpLnZhbHVlc1sgMCBdICk7XHJcbiAgICAgICQoIFwiLmNvbnRlbnQtLWZpbHRlcl9pdGVtX3ZhbF9jb250YWluZXIyXCIgKS52YWwoIHVpLnZhbHVlc1sgMSBdICk7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xyXG4gICAgICAgICQoJy51aS1zbGlkZXItaGFuZGxlOmVxKDApJykuYXBwZW5kKCQoXCIuY29udGVudC0tZmxpdGVyX3ByaWNlX2NvbnRhaW5lcjFcIikpO1xyXG4gICAgICAgICQoJy51aS1zbGlkZXItaGFuZGxlOmVxKDEpJykuYXBwZW5kKCQoXCIuY29udGVudC0tZmxpdGVyX3ByaWNlX2NvbnRhaW5lcjJcIikpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKCBcIi5jb250ZW50LS1maWx0ZXJfaXRlbV92YWxfY29udGFpbmVyMVwiICkudmFsKCAkKCBcIiNzbGlkZXItcmFuZ2VcIiApLnNsaWRlciggXCJ2YWx1ZXNcIiwgMCApICk7XHJcbiAgJCggXCIuY29udGVudC0tZmlsdGVyX2l0ZW1fdmFsX2NvbnRhaW5lcjJcIiApLnZhbCgkKCBcIiNzbGlkZXItcmFuZ2VcIiApLnNsaWRlciggXCJ2YWx1ZXNcIiwgMSApICk7XHJcblxyXG59KTtcclxuIl19
