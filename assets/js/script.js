// Declaring variables
var $today = $("#currentDay")
var $saveBtn = $(".saveBtn");
var $timeBlockEl = $(".time-block")

// GIVEN I am using a daily planner to create a schedule

// Function to initialize scheduler
$(document).ready(function() {
    // get and display today's date above calendar
    $today.text(moment().format('ddd MMM Do YYYY'));

    // saveBtn event listener
    $saveBtn.on('click', function() {
        // saves textarea's input under description class as 'text'
        var text = $(this).siblings('.description').val();
        // saves this TimeBlock's name as it's ID
        // replacing 'hour-' in element's ID
        var block = $(this).parent().attr('id').replace('hour-', '');

        // save to localStorage
        localStorage.setItem(block, text);
    });
    // Load previously saved data from LocalStorage
    $('#hour-9 .description').val(localStorage.getItem('9'));
    $('#hour-10 .description').val(localStorage.getItem('10'));

})
