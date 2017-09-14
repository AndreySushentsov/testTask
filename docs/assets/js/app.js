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

// add class ACTIVE
$('.content--goods_sort_link').on('click', function(e) {
  e.preventDefault();
  $('.content--goods_sort_link').removeClass('active');
  $(this).addClass('active');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgJCgnLnJ1YmxlJykuY3NzKHsnZGlzcGxheSc6J2lubGluZS1ibG9jayd9KTtcclxuXHJcbi8vICBwb3B1cCBib2xjayBwb3NpdGlvblxyXG4gICQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24oZSkge1xyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGVCbG9jayh4KSB7XHJcbiAgICAgIGlmKCF4LmlzKGUudGFyZ2V0KSAmJiB4LmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKXtcclxuICAgICAgICB4LmhpZGUoKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlQmxvY2soJCgnI2NvbG9ycycpKTtcclxuICAgIGhpZGVCbG9jaygkKCcuY29udGVudC0tYnJhbmRzJykpO1xyXG4gICAgaGlkZUJsb2NrKCQoJy5jb250ZW50LS1maWx0ZXJfcG9wdXAnKSk7XHJcbiAgICAvLyB2YXIgZGl2ID0gJCgnI2NvbG9ycycpO1xyXG4gICAgLy8gdmFyIGRpdjIgPSAkKCcuY29udGVudC0tYnJhbmRzJyk7XHJcbiAgICAvLyB2YXIgZGl2MyA9ICQoJy5jb250ZW50LS1maWx0ZXJfcG9wdXAnKTtcclxuXHJcbiAgICAgIC8vIGlmKCFkaXYuaXMoZS50YXJnZXQpICYmIGRpdi5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgIC8vICAgZGl2LmhpZGUoKTtcclxuICAgICAgLy8gfVxyXG4gICAgICAvL1xyXG4gICAgICAvLyBpZighZGl2Mi5pcyhlLnRhcmdldCkgJiYgZGl2Mi5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgIC8vICAgZGl2Mi5oaWRlKCk7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy9cclxuICAgICAgLy8gaWYoIWRpdjMuaXMoZS50YXJnZXQpICYmIGRpdjMuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApe1xyXG4gICAgICAvLyAgIGRpdjMuaGlkZSgpO1xyXG4gICAgICAvLyB9XHJcbiAgfSk7XHJcblxyXG4vL3JlbW92ZSBwYWRkaW5nLWJvdHRvbSBvbiBnb29kcyBsaXN0XHJcbiAgLy8kKCcuY29udGVudC0tZ29vZHNfaXRlbTplcSgzKScpLmNzcyh7J21hcmdpbi1ib3R0b20nOicyMHB4J30pO1xyXG4gIC8vJCgnLmNvbnRlbnQtLWdvb2RzX2l0ZW06ZXEoNyknKS5jc3MoeydtYXJnaW4tYm90dG9tJzonMjBweCd9KTtcclxuXHJcblxyXG4vL2ZpbHRlciByZW1vdmVcclxuICAkKCcuY29udGVudC0tZmlsdGVyX2l0ZW1fbGluay1yZW1vdmUnKS5vbiAoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgZnVuY3Rpb24gZW1wdHlWYWwoc2VsZWN0b3IpIHtcclxuICAgICAgc2VsZWN0b3IudmFsKCcnKTtcclxuICAgIH07XHJcbiAgICBlbXB0eVZhbCgkKCcuY29udGVudC0tZmlsdGVyX2l0ZW1faW5wdXQnKSk7XHJcbiAgICBlbXB0eVZhbCgkKCcuY29udGVudC0taW5wdXRfZmllbGQnKSk7XHJcbiAgICBlbXB0eVZhbCgkKCcjYnJhbmRzSW5wdXQnKSk7XHJcbiAgICBlbXB0eVZhbCgkKCcjY29sb3JJbnB1dCcpKTtcclxuXHJcbiAgICAkKCcjY29sb3JzTGluaycpLnRleHQoJ9Cb0Y7QsdC+0LknKTtcclxuICAgICQoJyNicmFuZHMnKS50ZXh0KCfQm9GO0LHQvtC5Jyk7XHJcblxyXG4gICAgLy8gJCgnLmNvbnRlbnQtLWZpbHRlcl9pdGVtX2lucHV0JykudmFsKCcnKTtcclxuICAgIC8vICQoJy5jb250ZW50LS1pbnB1dF9maWVsZCcpLnZhbCgnJyk7XHJcbiAgICAvLyAkKCcjYnJhbmRzSW5wdXQnKS52YWwoJycpO1xyXG4gICAgLy8gJCgnI2NvbG9ySW5wdXQnKS52YWwoJycpO1xyXG5cclxuICAgICQoICcjc2xpZGVyLXJhbmdlJyApLnNsaWRlciggXCJ2YWx1ZXNcIiwgWyAwLCAxMDAwIF0gKTtcclxuICAgICQoICcuY29udGVudC0tZmlsdGVyX2l0ZW1fdmFsX2NvbnRhaW5lcjEnICkudGV4dCggJCggXCIjc2xpZGVyLXJhbmdlXCIgKS5zbGlkZXIoIFwidmFsdWVzXCIsIDAgKSApO1xyXG4gICAgJCggJy5jb250ZW50LS1maWx0ZXJfaXRlbV92YWxfY29udGFpbmVyMicgKS50ZXh0KCQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKCBcInZhbHVlc1wiLCAxICkgKTtcclxuICB9KVxyXG5cclxuLy8gYWRkIGNsYXNzIEFDVElWRVxyXG4kKCcuY29udGVudC0tZ29vZHNfc29ydF9saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKCcuY29udGVudC0tZ29vZHNfc29ydF9saW5rJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG59KVxyXG5cclxuXHJcbi8vIGNvbG9ycyBsaW5rIGZpbHRlXHJcbi8vIGZ1bmN0aW9uIGJsb2NrUG9zaXRpb24oZSwgc2VsZWN0b3IpIHtcclxuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgdmFyIHggPSBlLnBhZ2VYO1xyXG4vLyAgIHZhciB5ID0gZS5wYWdlWTtcclxuLy8gICBpZihzZWxlY3RvciA9PSAkKCcjY29sb3JzTGluaycpKXtcclxuLy8gICAgICQoJyNjb2xvcnMnKS5jc3MoeydkaXNwbGF5JzonYmxvY2snLCd0b3AnOiAoeSArIDEwKSArICdweCcsJ2xlZnQnOiAoeCAtIDUwKSArICdweCd9KTtcclxuLy8gICB9XHJcbi8vXHJcbi8vICAgaWYoc2VsZWN0b3IgPT0gJCgnI2JyYW5kcycpKXtcclxuLy8gICAgICQoJy5jb250ZW50LS1icmFuZHMnKS5jc3MoeydkaXNwbGF5JzonZmxleCcsJ3RvcCc6ICh5ICsgMTApICsgJ3B4JywnbGVmdCc6ICh4IC0gNTApICsgJ3B4J30pO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gJCgnI2NvbG9yc0xpbmsnKS5vbignY2xpY2snLCBibG9ja1Bvc2l0aW9uKGUsICQoJyNjb2xvcnNMaW5rJykpKTtcclxuLy8gJCgnI2JyYW5kcycpLm9uKCdjbGljaycsIGJsb2NrUG9zaXRpb24oZSwgJCgnI2JyYW5kcycpKSk7XHJcbiAgJCgnI2NvbG9yc0xpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgeCA9IGUucGFnZVg7XHJcbiAgICB2YXIgeSA9IGUucGFnZVk7XHJcbiAgICAkKCcjY29sb3JzJykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJywndG9wJzogKHkgKyAxNSkgKyAncHgnLCdsZWZ0JzogKHggLSA1NSkgKyAncHgnfSk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5jb250ZW50LS1jb2xvcnNfbGluaycpLm9uKCdjbGljaycsZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIGNvbG9yID0gJCh0aGlzKS5hdHRyKCdkYXRhLWNvbG9yJyk7XHJcbiAgICAkKCcjY29sb3JzTGluaycpLnRleHQoY29sb3IpO1xyXG4gICAgJCgnI2NvbG9ySW5wdXQnKS52YWwoY29sb3IpO1xyXG4gICAgJCgnI2NvbG9ycycpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gIH0pO1xyXG5cclxuXHJcbiAvL2JybmFkcyBmaWx0ZXJcclxuICAkKCcjYnJhbmRzJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIHggPSBlLnBhZ2VYO1xyXG4gICAgdmFyIHkgPSBlLnBhZ2VZO1xyXG4gICAgJCgnLmNvbnRlbnQtLWJyYW5kcycpLmNzcyh7J2Rpc3BsYXknOidibG9jaycsJ3RvcCc6ICh5ICsgMTUpICsgJ3B4JywnbGVmdCc6ICh4IC0gNTUpICsgJ3B4J30pO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuY29udGVudC0tYnJhbmRzX2xpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgYnJhbmRzID0gJCh0aGlzKS5hdHRyKCdkYXRhLWJyYW5kcycpO1xyXG4gICAgJCgnI2JyYW5kcycpLnRleHQoYnJhbmRzKTtcclxuICAgICQoJyNicmFuZHNJbnB1dCcpLnZhbChicmFuZHMpO1xyXG4gICAgJCgnLmNvbnRlbnQtLWJyYW5kcycpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gIH0pO1xyXG5cclxuJCgnLmNvbnRlbnQtLWdvb2RzX2J1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgdmFyIHggPSBlLnBhZ2VYO1xyXG4gIHZhciB5ID0gZS5wYWdlWTtcclxuICAkKCcuY29udGVudC0tZmlsdGVyX3BvcHVwJykuZmFkZUluKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xyXG59KVxyXG5cclxuLy9qcXVlcnkgVUkgc2xpZGVyIHJhbmdlXHJcbiAgICQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKHtcclxuICAgIHJhbmdlOiB0cnVlLFxyXG4gICAgIG1pbjogMCxcclxuICAgICBtYXg6IDEwMDAsXHJcbiAgICAgdmFsdWVzOiBbMCwgMTAwMCBdLFxyXG4gICAgIHNsaWRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xyXG4gICAgICAkKCBcIi5jb250ZW50LS1maWx0ZXJfaXRlbV92YWxfY29udGFpbmVyMVwiICkudGV4dCggIHVpLnZhbHVlc1sgMCBdICk7XHJcbiAgICAgICQoIFwiLmNvbnRlbnQtLWZpbHRlcl9pdGVtX3ZhbF9jb250YWluZXIyXCIgKS50ZXh0KCAgdWkudmFsdWVzWyAxIF0gKTtcclxuICAgICAgJCggXCIubWluUHJpY2UgXCIgKS52YWwoIHVpLnZhbHVlc1sgMCBdICk7XHJcbiAgICAgICQoIFwiLm1heFByaWNlIFwiICkudmFsKCB1aS52YWx1ZXNbIDEgXSApO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcclxuICAgICAgICAkKCcudWktc2xpZGVyLWhhbmRsZTplcSgwKScpLmFwcGVuZCgkKFwiLmNvbnRlbnQtLWZsaXRlcl9wcmljZV9jb250YWluZXIxXCIpKTtcclxuICAgICAgICAkKCcudWktc2xpZGVyLWhhbmRsZTplcSgxKScpLmFwcGVuZCgkKFwiLmNvbnRlbnQtLWZsaXRlcl9wcmljZV9jb250YWluZXIyXCIpKTtcclxuICAgIH1cclxuICAgfSk7XHJcblxyXG4gICQoIFwiLmNvbnRlbnQtLWZpbHRlcl9pdGVtX3ZhbF9jb250YWluZXIxXCIgKS50ZXh0KCAkKCBcIiNzbGlkZXItcmFuZ2VcIiApLnNsaWRlciggXCJ2YWx1ZXNcIiwgMCApICk7XHJcbiAgJCggXCIuY29udGVudC0tZmlsdGVyX2l0ZW1fdmFsX2NvbnRhaW5lcjJcIiApLnRleHQoICQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKCBcInZhbHVlc1wiLCAxICkgKTtcclxuXHJcbn0pO1xyXG4iXX0=
