$(document).ready(function(){
  $('.ruble').css({'display':'inline-block'});

//  popup bolck position
  $(document).mouseup(function(e) {

    function hideBlock(x) {
      if(!x.is(e.target) && x.has(e.target).length === 0){
        x.hide();
      };
    }

    hideBlock($('#colors'));
    hideBlock($('.content--brands'));
    hideBlock($('.content--filter_popup'));
    // var div = $('#colors');
    // var div2 = $('.content--brands');
    // var div3 = $('.content--filter_popup');

      // if(!div.is(e.target) && div.has(e.target).length === 0){
      //   div.hide();
      // }
      //
      // if(!div2.is(e.target) && div2.has(e.target).length === 0){
      //   div2.hide();
      // }
      //
      // if(!div3.is(e.target) && div3.has(e.target).length === 0){
      //   div3.hide();
      // }
  });

//remove padding-bottom on goods list
  //$('.content--goods_item:eq(3)').css({'margin-bottom':'20px'});
  //$('.content--goods_item:eq(7)').css({'margin-bottom':'20px'});


//filter remove
  $('.content--filter_item_link-remove').on ('click', function(e) {
    function emptyVal(selector) {
      selector.val('');
    };
    emptyVal($('.content--filter_item_input'));
    emptyVal($('.content--input_field'));
    emptyVal($('#brandsInput'));
    emptyVal($('#colorInput'));

    $('#colorsLink').text('Любой');
    $('#brands').text('Любой');

    // $('.content--filter_item_input').val('');
    // $('.content--input_field').val('');
    // $('#brandsInput').val('');
    // $('#colorInput').val('');

    $( '#slider-range' ).slider( "values", [ 0, 1000 ] );
    $( '.content--filter_item_val_container1' ).text( $( "#slider-range" ).slider( "values", 0 ) );
    $( '.content--filter_item_val_container2' ).text($( "#slider-range" ).slider( "values", 1 ) );
  })


// colors link filte
// function blockPosition(e, selector) {
//   e.preventDefault();
//   var x = e.pageX;
//   var y = e.pageY;
//   if(selector == $('#colorsLink')){
//     $('#colors').css({'display':'block','top': (y + 10) + 'px','left': (x - 50) + 'px'});
//   }
//
//   if(selector == $('#brands')){
//     $('.content--brands').css({'display':'flex','top': (y + 10) + 'px','left': (x - 50) + 'px'});
//   }
// }

// $('#colorsLink').on('click', blockPosition(e, $('#colorsLink')));
// $('#brands').on('click', blockPosition(e, $('#brands')));
  $('#colorsLink').on('click', function(e) {
    e.preventDefault();
    var x = e.pageX;
    var y = e.pageY;
    $('#colors').css({'display':'block','top': (y + 15) + 'px','left': (x - 55) + 'px'});
  });

  $('.content--colors_link').on('click',function(e) {
    e.preventDefault();
    var color = $(this).attr('data-color');
    $('#colorsLink').text(color);
    $('#colorInput').val(color);
    $('#colors').css({'display':'none'});
  });


 //brnads filter
  $('#brands').click(function(e) {
    e.preventDefault();
    var x = e.pageX;
    var y = e.pageY;
    $('.content--brands').css({'display':'block','top': (y + 15) + 'px','left': (x - 55) + 'px'});
  });

  $('.content--brands_link').on('click', function(e) {
    e.preventDefault();
    var brands = $(this).attr('data-brands');
    $('#brands').text(brands);
    $('#brandsInput').val(brands);
    $('.content--brands').css({'display':'none'});
  });

$('.content--goods_button').on('click', function(e) {
  e.preventDefault();
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICQoJy5ydWJsZScpLmNzcyh7J2Rpc3BsYXknOidpbmxpbmUtYmxvY2snfSk7XHJcblxyXG4vLyAgcG9wdXAgYm9sY2sgcG9zaXRpb25cclxuICAkKGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlQmxvY2soeCkge1xyXG4gICAgICBpZigheC5pcyhlLnRhcmdldCkgJiYgeC5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgeC5oaWRlKCk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUJsb2NrKCQoJyNjb2xvcnMnKSk7XHJcbiAgICBoaWRlQmxvY2soJCgnLmNvbnRlbnQtLWJyYW5kcycpKTtcclxuICAgIGhpZGVCbG9jaygkKCcuY29udGVudC0tZmlsdGVyX3BvcHVwJykpO1xyXG4gICAgLy8gdmFyIGRpdiA9ICQoJyNjb2xvcnMnKTtcclxuICAgIC8vIHZhciBkaXYyID0gJCgnLmNvbnRlbnQtLWJyYW5kcycpO1xyXG4gICAgLy8gdmFyIGRpdjMgPSAkKCcuY29udGVudC0tZmlsdGVyX3BvcHVwJyk7XHJcblxyXG4gICAgICAvLyBpZighZGl2LmlzKGUudGFyZ2V0KSAmJiBkaXYuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApe1xyXG4gICAgICAvLyAgIGRpdi5oaWRlKCk7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy9cclxuICAgICAgLy8gaWYoIWRpdjIuaXMoZS50YXJnZXQpICYmIGRpdjIuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApe1xyXG4gICAgICAvLyAgIGRpdjIuaGlkZSgpO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vXHJcbiAgICAgIC8vIGlmKCFkaXYzLmlzKGUudGFyZ2V0KSAmJiBkaXYzLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKXtcclxuICAgICAgLy8gICBkaXYzLmhpZGUoKTtcclxuICAgICAgLy8gfVxyXG4gIH0pO1xyXG5cclxuLy9yZW1vdmUgcGFkZGluZy1ib3R0b20gb24gZ29vZHMgbGlzdFxyXG4gIC8vJCgnLmNvbnRlbnQtLWdvb2RzX2l0ZW06ZXEoMyknKS5jc3MoeydtYXJnaW4tYm90dG9tJzonMjBweCd9KTtcclxuICAvLyQoJy5jb250ZW50LS1nb29kc19pdGVtOmVxKDcpJykuY3NzKHsnbWFyZ2luLWJvdHRvbSc6JzIwcHgnfSk7XHJcblxyXG5cclxuLy9maWx0ZXIgcmVtb3ZlXHJcbiAgJCgnLmNvbnRlbnQtLWZpbHRlcl9pdGVtX2xpbmstcmVtb3ZlJykub24gKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGZ1bmN0aW9uIGVtcHR5VmFsKHNlbGVjdG9yKSB7XHJcbiAgICAgIHNlbGVjdG9yLnZhbCgnJyk7XHJcbiAgICB9O1xyXG4gICAgZW1wdHlWYWwoJCgnLmNvbnRlbnQtLWZpbHRlcl9pdGVtX2lucHV0JykpO1xyXG4gICAgZW1wdHlWYWwoJCgnLmNvbnRlbnQtLWlucHV0X2ZpZWxkJykpO1xyXG4gICAgZW1wdHlWYWwoJCgnI2JyYW5kc0lucHV0JykpO1xyXG4gICAgZW1wdHlWYWwoJCgnI2NvbG9ySW5wdXQnKSk7XHJcblxyXG4gICAgJCgnI2NvbG9yc0xpbmsnKS50ZXh0KCfQm9GO0LHQvtC5Jyk7XHJcbiAgICAkKCcjYnJhbmRzJykudGV4dCgn0JvRjtCx0L7QuScpO1xyXG5cclxuICAgIC8vICQoJy5jb250ZW50LS1maWx0ZXJfaXRlbV9pbnB1dCcpLnZhbCgnJyk7XHJcbiAgICAvLyAkKCcuY29udGVudC0taW5wdXRfZmllbGQnKS52YWwoJycpO1xyXG4gICAgLy8gJCgnI2JyYW5kc0lucHV0JykudmFsKCcnKTtcclxuICAgIC8vICQoJyNjb2xvcklucHV0JykudmFsKCcnKTtcclxuXHJcbiAgICAkKCAnI3NsaWRlci1yYW5nZScgKS5zbGlkZXIoIFwidmFsdWVzXCIsIFsgMCwgMTAwMCBdICk7XHJcbiAgICAkKCAnLmNvbnRlbnQtLWZpbHRlcl9pdGVtX3ZhbF9jb250YWluZXIxJyApLnRleHQoICQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKCBcInZhbHVlc1wiLCAwICkgKTtcclxuICAgICQoICcuY29udGVudC0tZmlsdGVyX2l0ZW1fdmFsX2NvbnRhaW5lcjInICkudGV4dCgkKCBcIiNzbGlkZXItcmFuZ2VcIiApLnNsaWRlciggXCJ2YWx1ZXNcIiwgMSApICk7XHJcbiAgfSlcclxuXHJcblxyXG4vLyBjb2xvcnMgbGluayBmaWx0ZVxyXG4vLyBmdW5jdGlvbiBibG9ja1Bvc2l0aW9uKGUsIHNlbGVjdG9yKSB7XHJcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgIHZhciB4ID0gZS5wYWdlWDtcclxuLy8gICB2YXIgeSA9IGUucGFnZVk7XHJcbi8vICAgaWYoc2VsZWN0b3IgPT0gJCgnI2NvbG9yc0xpbmsnKSl7XHJcbi8vICAgICAkKCcjY29sb3JzJykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJywndG9wJzogKHkgKyAxMCkgKyAncHgnLCdsZWZ0JzogKHggLSA1MCkgKyAncHgnfSk7XHJcbi8vICAgfVxyXG4vL1xyXG4vLyAgIGlmKHNlbGVjdG9yID09ICQoJyNicmFuZHMnKSl7XHJcbi8vICAgICAkKCcuY29udGVudC0tYnJhbmRzJykuY3NzKHsnZGlzcGxheSc6J2ZsZXgnLCd0b3AnOiAoeSArIDEwKSArICdweCcsJ2xlZnQnOiAoeCAtIDUwKSArICdweCd9KTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vICQoJyNjb2xvcnNMaW5rJykub24oJ2NsaWNrJywgYmxvY2tQb3NpdGlvbihlLCAkKCcjY29sb3JzTGluaycpKSk7XHJcbi8vICQoJyNicmFuZHMnKS5vbignY2xpY2snLCBibG9ja1Bvc2l0aW9uKGUsICQoJyNicmFuZHMnKSkpO1xyXG4gICQoJyNjb2xvcnNMaW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIHggPSBlLnBhZ2VYO1xyXG4gICAgdmFyIHkgPSBlLnBhZ2VZO1xyXG4gICAgJCgnI2NvbG9ycycpLmNzcyh7J2Rpc3BsYXknOidibG9jaycsJ3RvcCc6ICh5ICsgMTUpICsgJ3B4JywnbGVmdCc6ICh4IC0gNTUpICsgJ3B4J30pO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuY29udGVudC0tY29sb3JzX2xpbmsnKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBjb2xvciA9ICQodGhpcykuYXR0cignZGF0YS1jb2xvcicpO1xyXG4gICAgJCgnI2NvbG9yc0xpbmsnKS50ZXh0KGNvbG9yKTtcclxuICAgICQoJyNjb2xvcklucHV0JykudmFsKGNvbG9yKTtcclxuICAgICQoJyNjb2xvcnMnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICB9KTtcclxuXHJcblxyXG4gLy9icm5hZHMgZmlsdGVyXHJcbiAgJCgnI2JyYW5kcycpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciB4ID0gZS5wYWdlWDtcclxuICAgIHZhciB5ID0gZS5wYWdlWTtcclxuICAgICQoJy5jb250ZW50LS1icmFuZHMnKS5jc3MoeydkaXNwbGF5JzonYmxvY2snLCd0b3AnOiAoeSArIDE1KSArICdweCcsJ2xlZnQnOiAoeCAtIDU1KSArICdweCd9KTtcclxuICB9KTtcclxuXHJcbiAgJCgnLmNvbnRlbnQtLWJyYW5kc19saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIGJyYW5kcyA9ICQodGhpcykuYXR0cignZGF0YS1icmFuZHMnKTtcclxuICAgICQoJyNicmFuZHMnKS50ZXh0KGJyYW5kcyk7XHJcbiAgICAkKCcjYnJhbmRzSW5wdXQnKS52YWwoYnJhbmRzKTtcclxuICAgICQoJy5jb250ZW50LS1icmFuZHMnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICB9KTtcclxuXHJcbiQoJy5jb250ZW50LS1nb29kc19idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHZhciB4ID0gZS5wYWdlWDtcclxuICB2YXIgeSA9IGUucGFnZVk7XHJcbiAgJCgnLmNvbnRlbnQtLWZpbHRlcl9wb3B1cCcpLmZhZGVJbih7J2Rpc3BsYXknOidibG9jayd9KTtcclxufSlcclxuXHJcbi8vanF1ZXJ5IFVJIHNsaWRlciByYW5nZVxyXG4gICAkKCBcIiNzbGlkZXItcmFuZ2VcIiApLnNsaWRlcih7XHJcbiAgICByYW5nZTogdHJ1ZSxcclxuICAgICBtaW46IDAsXHJcbiAgICAgbWF4OiAxMDAwLFxyXG4gICAgIHZhbHVlczogWzAsIDEwMDAgXSxcclxuICAgICBzbGlkZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcclxuICAgICAgJCggXCIuY29udGVudC0tZmlsdGVyX2l0ZW1fdmFsX2NvbnRhaW5lcjFcIiApLnRleHQoICB1aS52YWx1ZXNbIDAgXSApO1xyXG4gICAgICAkKCBcIi5jb250ZW50LS1maWx0ZXJfaXRlbV92YWxfY29udGFpbmVyMlwiICkudGV4dCggIHVpLnZhbHVlc1sgMSBdICk7XHJcbiAgICAgICQoIFwiLm1pblByaWNlIFwiICkudmFsKCB1aS52YWx1ZXNbIDAgXSApO1xyXG4gICAgICAkKCBcIi5tYXhQcmljZSBcIiApLnZhbCggdWkudmFsdWVzWyAxIF0gKTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGU6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XHJcbiAgICAgICAgJCgnLnVpLXNsaWRlci1oYW5kbGU6ZXEoMCknKS5hcHBlbmQoJChcIi5jb250ZW50LS1mbGl0ZXJfcHJpY2VfY29udGFpbmVyMVwiKSk7XHJcbiAgICAgICAgJCgnLnVpLXNsaWRlci1oYW5kbGU6ZXEoMSknKS5hcHBlbmQoJChcIi5jb250ZW50LS1mbGl0ZXJfcHJpY2VfY29udGFpbmVyMlwiKSk7XHJcbiAgICB9XHJcbiAgIH0pO1xyXG5cclxuICAkKCBcIi5jb250ZW50LS1maWx0ZXJfaXRlbV92YWxfY29udGFpbmVyMVwiICkudGV4dCggJCggXCIjc2xpZGVyLXJhbmdlXCIgKS5zbGlkZXIoIFwidmFsdWVzXCIsIDAgKSApO1xyXG4gICQoIFwiLmNvbnRlbnQtLWZpbHRlcl9pdGVtX3ZhbF9jb250YWluZXIyXCIgKS50ZXh0KCAkKCBcIiNzbGlkZXItcmFuZ2VcIiApLnNsaWRlciggXCJ2YWx1ZXNcIiwgMSApICk7XHJcblxyXG59KTtcclxuIl19
