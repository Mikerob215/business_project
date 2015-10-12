var footbox_index = false;
    var footbox_pos = 0;
    var footbox_interval;
    var framespeed = 5;
function offer_mouseover() {
    if (footbox_index == false) {
        // clear previous interval
        stop_function();

        footbox_interval = setInterval(function () {
            footbox_add();
        }, 35);
    }
}

function footbox_mouseout() {
    // clear previous interval
    stop_function();

    footbox_interval = setInterval(function () {
        footbox_subtract();
    }, 50);
    console.log("mouseout");
}