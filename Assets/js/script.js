// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. 

  // TODO: Add a listener for click events on the save button. This code should


$(document).ready(function () {

 var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D YYYY'));


  $( ".saveBtn" ).on( "click", function() {
    var text = $(this).siblings(".description").val();
    var time =$(this).parent().attr("id");
    console.log(text);
    console.log(time);

    // Adds the save button clicks into the local storage of the site.
    localStorage.setItem(time,text);
  } );

  function timeTracker() {
    
    var timeCurrent = dayjs().hour();

    $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id").split("_")[1]);

      if(timeBlock < timeCurrent) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (timeBlock == timeCurrent)
      {
          $(this).removeClass("past");
          $(this).removeClass("future");
          $(this).addClass("present");

      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })

    
  // timeTracker();
  }

  $("#hour_9 .description").val(localStorage.getItem("hour_9"));
  $("#hour_10 .description").val(localStorage.getItem("hour_10"));
  $("#hour_11 .description").val(localStorage.getItem("hour_11"));
  $("#hour_12 .description").val(localStorage.getItem("hour_12"));
  $("#hour_13 .description").val(localStorage.getItem("hour_13"));
  $("#hour_14 .description").val(localStorage.getItem("hour_14"));
  $("#hour_15 .description").val(localStorage.getItem("hour_15"));
  $("#hour_16 .description").val(localStorage.getItem("hour_16"));
  $("#hour_17 .description").val(localStorage.getItem("hour_17"));
  

  timeTracker();

});


  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour_x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.



//write a loop for the past, present and future