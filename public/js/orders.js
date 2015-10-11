$(document).ready(function() {
  console.log("sanity test");

 //inc/dev qty1
$('.up1').on('click', function(event) {
  event.preventDefault();
  console.log("sanity check");
  currentValue = parseInt($('.qty1').val())
  $('.qty1').val(currentValue + 1)
});
$('.down1').on('click', function(event) {
  event.preventDefault();
  console.log("sanity check");
  if ($('.qty1').val() > 0) {
  currentValue = parseInt($('.qty1').val())
  $('.qty1').val(currentValue - 1)
}

});
//inc/dev qty3
$('.up2').on('click', function(event) {
  event.preventDefault();
  console.log("sanity check");
  currentValue = parseInt($('.qty2').val())
  $('.qty2').val(currentValue + 1)
});
$('.down2').on('click', function(event) {
  event.preventDefault();
  console.log("sanity check");
  if ($('.qty2').val() > 0) {
  currentValue = parseInt($('.qty2').val())
  $('.qty2').val(currentValue - 1)
}
});
//inc/dev qty3
$('.up3').on('click', function(event) {
  event.preventDefault();
  console.log("sanity check");
  currentValue = parseInt($('.qty3').val())
  $('.qty3').val(currentValue + 1)
});
$('.down3').on('click', function(event) {
  event.preventDefault();
  console.log("sanity check");
  if ($('.qty3').val() > 0) {
  currentValue = parseInt($('.qty3').val())
  $('.qty3').val(currentValue - 1)
}
});
});
