
$(document).ready(function () {

  // The current date that is displayed in the header
  // "dddd" will display the current day, while the rest will display the 
  // month day and year.
 var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D YYYY'));

  //This is the save button so that the description and the time will 
  // be saved to the local storage.
  $( ".saveBtn" ).on( "click", function() {
    var text = $(this).siblings(".description").val();
    var time =$(this).parent().attr("id");

    // Adds the save button clicks into the local storage of the site.
    localStorage.setItem(time,text);
  } );

  // This section of code allows use to change the css of each box within
  // the html to their corresponding colors for past, present and future.
  function timeTracker() {
    
    // Setting timeCurrent with the dayjs and the hour
    var timeCurrent = dayjs().hour();

    // This calls the time-block and shows that each block will change
    // at different intervals of the day that corresponds to that hour.
    $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id").split("_")[1]);

      // This time block represents if the time is less than the current
      // hour. This will change the block to grey.
      if(timeBlock < timeCurrent) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      // This timeblock represents the time if it is currently at the same hour
      // which will allow the block to turn red.
      else if (timeBlock == timeCurrent)
      {
          $(this).removeClass("past");
          $(this).removeClass("future");
          $(this).addClass("present");

      }
      // If the time is not before or at the current time it will be
      // displayed as a future block which is in green.
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })


  }

  //This is the area that stores all the data for the local storage
  // and allows it to be called up when needed for the site.
  $("#hour_9 .description").val(localStorage.getItem("hour_9"));
  $("#hour_10 .description").val(localStorage.getItem("hour_10"));
  $("#hour_11 .description").val(localStorage.getItem("hour_11"));
  $("#hour_12 .description").val(localStorage.getItem("hour_12"));
  $("#hour_13 .description").val(localStorage.getItem("hour_13"));
  $("#hour_14 .description").val(localStorage.getItem("hour_14"));
  $("#hour_15 .description").val(localStorage.getItem("hour_15"));
  $("#hour_16 .description").val(localStorage.getItem("hour_16"));
  $("#hour_17 .description").val(localStorage.getItem("hour_17"));
  

  // This calls the function back
  timeTracker();

});