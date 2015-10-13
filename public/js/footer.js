// var footbox_index = false;
//     var footbox_pos = 0;
//     var footbox_interval;
//     var framespeed = 5;
// function offer_mouseover() {
//     if (footbox_index == false) {
//         // clear previous interval
//         stop_function();

//         footbox_interval = setInterval(function () {
//             footbox_add();
//         }, 35);
//     }
// }

// function footbox_mouseout() {
//     // clear previous interval
//     stop_function();

//     footbox_interval = setInterval(function () {
//         footbox_subtract();
//     }, 50);
//     console.log("mouseout");
// }

 $(".footbox").ready(function(){
    var boxHeight = $(".footbox").height();
        $(".footbox").mouseenter(function(){
            $(this).animate({
                height: "-300px"
            });
        }).mouseleave(function(){
            $(this).animate({
                height: boxHeight
            });
        });
    });
// $(".footbox")
//   .hover(function() {
//     $(this).animate({ height: 250 }, 'fast');
//   }, function() {
//     $(this).animate({ height: 200 }, 'fast');
//   });
// $('.footbox').on('mouseover', function (event) {
//     $('.footbox').css('max-height', '250px');
// });
// $('.footbox').on('mouseout', function (event) {
//     $('.footbox').css('max-height', '200px');
// });
