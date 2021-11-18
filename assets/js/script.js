// Moment.js for times 
// initialize with time of day

var presentDay = moment().format('LLL');

$("#currentDay").append(presentDay);

// Local Storage 
$(".saveBtn").on("click", function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //Store Area
    localStorage.setItem(time, value);
}); 