$('#menu').click(function() {
  $('#menu-items').slideToggle();
});
$('#bloghead1').click(function() {
  $('#blog1').slideToggle();
  $('#blog2').slideUp();
  $('#blog3').slideUp();
});
$('#bloghead2').click(function() {
  $('#blog2').slideToggle();
  $('#blog1').slideUp();
  $('#blog3').slideUp();

});
$('#bloghead3').click(function() {
  $('#blog3').slideToggle();
  $('#blog1').slideUp();
  $('#blog2').slideUp();
});