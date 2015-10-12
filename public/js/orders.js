$(document).ready(function() {
  console.log("sanity test");
// increase quantity
  $('.up').on('click', function(event) {
    event.preventDefault();
    var currentValue = parseInt($(this).siblings('.qty').val());
    if (currentValue >= 0) {
      $(this).siblings('.qty').val(currentValue + 1)
    };
  });
// decrease quantity
    $('.down').on('click', function(event) {
      event.preventDefault();
      var currentValue = parseInt($(this).siblings('.qty').val());
      if (currentValue >= 0) {
        $(this).siblings('.qty').val(currentValue - 1)
      };
    });
});
