// Declaring variables
var $today = $("#currentDay");
var $saveBtn = $(".saveBtn");
var $timeBlockEl = $(".time-block");
var $feedback = $(".notification");

// Function to initialize scheduler
// jQuery requirement
$(document).ready(function() {

    // get and display today's date above calendar
    $today.text(moment().format('dddd, MMMM Do YYYY'));

    // saveBtn event listener
    $saveBtn.on('click', function() {

        // saves textarea's input under description class as 'text'
        var text = $(this).siblings('.description').val();

        // saves this TimeBlock's name as it's ID
        // replacing 'hour-' in element's ID
        var block = $(this).parent().attr('id').replace('hour-','');

        // save to localStorage
        localStorage.setItem(block, text);

        // Display feedback on save
        $('.feedback').addClass('show');

        // hide feedback after 2 seconds
        setTimeout(function () {
            $('.feedback').removeClass('show');
        }, 2000);
    
    });

    // Load previously saved data from LocalStorage
    $('#hour-8 .description').val(localStorage.getItem('8'));
    $('#hour-9 .description').val(localStorage.getItem('9'));
    $('#hour-10 .description').val(localStorage.getItem('10'));
    $('#hour-11 .description').val(localStorage.getItem('11'));
    $('#hour-12 .description').val(localStorage.getItem('12'));
    $('#hour-1 .description').val(localStorage.getItem('1'));
    $('#hour-2 .description').val(localStorage.getItem('2'));
    $('#hour-3 .desription').val(localStorage.getItem('3'));
    $('#hour-4 .description').val(localStorage.getItem('4'));
    $('#hour-5 .description').val(localStorage.getItem('5'));
    $('#hour-6 .description').val(localStorage.getItem('6'));

    // Create function to color time blocks based on time
    function timeBlocks() {
        // current real-time hour
        var currentHour = moment().hour();
    
        $timeBlockEl.each(function() {
            // give each block an ID of that hour
            var blockId = parseInt($(this).attr('id').split('-')[1]);
            console.log(this, blockId, currentHour)

            // checks time for past/present/future
            if(blockId < currentHour) {
                $(this).addClass('past');
                $(this).removeClass('present');
                $(this).removeClass('future');
            } else if (blockId > currentHour) {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            } else {
                $(this).removeClass('past');
                $(this).addClass('present');
                $(this).removeClass('future');
            }
        })
    }
    timeBlocks(); // initialize function
});
