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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAkKCcuY29udGVudC0tYnJhbmRzJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgLy8gdmFyIHRhcmdldCA9IGRvY3VtZW50LmJvZHk7XHJcbiAgLy8gJCh0YXJnZXQpLm9uKCdja2ljaycsIGZ1bmN0aW9uKCl7XHJcbiAgLy8gICBjb25zb2xlLmxvZygnY2xvc2UnKTtcclxuICAvLyAgICQoJy5jb250ZW50LS1icmFuZHMnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAvLyAgICQoJyNjb2xvcnMnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAvLyB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgZGl2ID0gJCgnI2NvbG9ycycpO1xyXG4gICAgdmFyIGRpdjIgPSAkKCcuY29udGVudC0tYnJhbmRzJyk7XHJcblxyXG4gICAgICBpZighZGl2LmlzKGUudGFyZ2V0KSAmJiBkaXYuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApe1xyXG4gICAgICAgIGRpdi5oaWRlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKCFkaXYyLmlzKGUudGFyZ2V0KSAmJiBkaXYyLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKXtcclxuICAgICAgICBkaXYyLmhpZGUoKTtcclxuICAgICAgfVxyXG4gIH0pXHJcbiAgJCgnLmNvbnRlbnQtLWZpbHRlcl9pdGVtX2xpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KVxyXG4gICQoJy5jb250ZW50LS1maWx0ZXJfaXRlbV9saW5rLXJlbW92ZScpLm9uICgnY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgJCgnLmNvbnRlbnQtLWZpbHRlcl9pdGVtX2lucHV0JykudmFsKCcnKTtcclxuICAgICQoJy5jb250ZW50LS1pbnB1dF9maWVsZCcpLnZhbCgnJyk7XHJcbiAgfSlcclxuICAkKCcjY29sb3JzTGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgdmFyIHggPSBlLnBhZ2VYO1xyXG4gIHZhciB5ID0gZS5wYWdlWTtcclxuICAvLyAgY29uc29sZS5sb2coeCk7XHJcbiAgICAkKCcjY29sb3JzJykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJywndG9wJzogeSArICdweCcsJ2xlZnQnOiB4ICsgJ3B4J30pO1xyXG4gIH0pO1xyXG4gICQoJy5jb250ZW50LS1jb2xvcnNfbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAkKCcjY29sb3JzJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNicmFuZHMnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgdmFyIHggPSBlLnBhZ2VYO1xyXG4gICAgdmFyIHkgPSBlLnBhZ2VZO1xyXG4gIC8vICBjb25zb2xlLmxvZyh4KTtcclxuICAgICQoJy5jb250ZW50LS1icmFuZHMnKS5jc3MoeydkaXNwbGF5JzonZmxleCcsJ3RvcCc6IHkgKyAncHgnLCdsZWZ0JzogeCArICdweCd9KTtcclxuICB9KTtcclxuXHJcbiAgJCgnLmNvbnRlbnQtLWJyYW5kc19saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgJCgnLmNvbnRlbnQtLWJyYW5kcycpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gIH0pO1xyXG5cclxuLy9qcXVlcnkgVUlcclxuICAkKCBcIiNzbGlkZXItcmFuZ2VcIiApLnNsaWRlcih7XHJcbiAgICByYW5nZTogdHJ1ZSxcclxuICAgIG1pbjogMCxcclxuICAgIG1heDogMTAwMCxcclxuICAgIHZhbHVlczogWzAsIDEwMDAgXSxcclxuICAgIHNsaWRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xyXG4gICAgICAkKCBcIi5jb250ZW50LS1maWx0ZXJfaXRlbV92YWxfY29udGFpbmVyMVwiICkudmFsKCB1aS52YWx1ZXNbIDAgXSApO1xyXG4gICAgICAkKCBcIi5jb250ZW50LS1maWx0ZXJfaXRlbV92YWxfY29udGFpbmVyMlwiICkudmFsKCB1aS52YWx1ZXNbIDEgXSApO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcclxuICAgICAgICAkKCcudWktc2xpZGVyLWhhbmRsZTplcSgwKScpLmFwcGVuZCgkKFwiLmNvbnRlbnQtLWZsaXRlcl9wcmljZV9jb250YWluZXIxXCIpKTtcclxuICAgICAgICAkKCcudWktc2xpZGVyLWhhbmRsZTplcSgxKScpLmFwcGVuZCgkKFwiLmNvbnRlbnQtLWZsaXRlcl9wcmljZV9jb250YWluZXIyXCIpKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJCggXCIuY29udGVudC0tZmlsdGVyX2l0ZW1fdmFsX2NvbnRhaW5lcjFcIiApLnZhbCggJCggXCIjc2xpZGVyLXJhbmdlXCIgKS5zbGlkZXIoIFwidmFsdWVzXCIsIDAgKSApO1xyXG4gICQoIFwiLmNvbnRlbnQtLWZpbHRlcl9pdGVtX3ZhbF9jb250YWluZXIyXCIgKS52YWwoJCggXCIjc2xpZGVyLXJhbmdlXCIgKS5zbGlkZXIoIFwidmFsdWVzXCIsIDEgKSApO1xyXG5cclxuXHJcbn0pO1xyXG4iXX0=
