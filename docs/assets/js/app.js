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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICQoJy5jb250ZW50LS1icmFuZHMnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuXHJcbiAgJCgnI2NvbG9yc0xpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgeCA9IGUucGFnZVg7XHJcbiAgICBsZXQgeSA9IGUucGFnZVk7XHJcbiAgLy8gIGNvbnNvbGUubG9nKHgpO1xyXG4gICAgJCgnI2NvbG9ycycpLmNzcyh7J2Rpc3BsYXknOidibG9jaycsJ3RvcCc6IHkgKyAncHgnLCdsZWZ0JzogeCArICdweCd9KTtcclxuICB9KTtcclxuICAkKCcuY29udGVudC0tY29sb3JzX2xpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcjY29sb3JzJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNicmFuZHMnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgeCA9IGUucGFnZVg7XHJcbiAgICBsZXQgeSA9IGUucGFnZVk7XHJcbiAgLy8gIGNvbnNvbGUubG9nKHgpO1xyXG4gICAgJCgnLmNvbnRlbnQtLWJyYW5kcycpLmNzcyh7J2Rpc3BsYXknOidmbGV4JywndG9wJzogeSArICdweCcsJ2xlZnQnOiB4ICsgJ3B4J30pO1xyXG4gIH0pO1xyXG4gICQoJy5jb250ZW50LS1icmFuZHNfbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJy5jb250ZW50LS1icmFuZHMnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICB9KTtcclxuXHJcbiAgJCggXCIjc2xpZGVyLXJhbmdlXCIgKS5zbGlkZXIoe1xyXG4gICAgcmFuZ2U6IHRydWUsXHJcbiAgICBtaW46IDAsXHJcbiAgICBtYXg6IDEwMDAsXHJcbiAgICB2YWx1ZXM6IFswLCAxMDAwIF0sXHJcbiAgICBzbGlkZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcclxuICAgICAgJCggXCIjYW1vdW50XCIgKS52YWwoIHVpLnZhbHVlc1sgMCBdICsgXCIgLSBcIiArIHVpLnZhbHVlc1sgMSBdICk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJCggXCIjYW1vdW50XCIgKS52YWwoICQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKCBcInZhbHVlc1wiLCAwICkgK1xyXG4gICAgXCIgLSBcIiArICQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKCBcInZhbHVlc1wiLCAxICkgKTtcclxufSk7XHJcbiJdfQ==
