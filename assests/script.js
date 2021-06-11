
//Global Variables
//make variable for today using moment script info and format
var today = moment().format("MMM Do,YYYY");
//make variable for id currentDay
var currentDay = document.querySelector("#currentDay");
console.log(currentDay)
//variable currentday textcontent updated to variable today
currentDay.textContent = today;
//variable for currentHours
var currentHour = moment().format("HH"); 


// eventlistener to savebtn, on click execute function
$(".saveBtn").on("click", function (e) {
	//prevent page refresh
  e.preventDefault();
	//this refers to saveBtn; creates variable for id hour container
  var time = $(this).parent().attr("id");
	//creates variable for textarea value of description class
  var description = $(this).siblings(".description").val();
	//returns a string to local storage, sets key n value
  JSON.stringify(localStorage.setItem(time, description));
});


// creates a function to get descriptions and display
function getDescription(){
	/// creates timeframes 9-17 sets value from local storage
	$("#hour-9 textarea").val(localStorage.getItem("hour-9"));
	$("#hour-10 textarea").val(localStorage.getItem("hour-10"));
	$("#hour-11 textarea").val(localStorage.getItem("hour-11"));
	$("#hour-12 textarea").val(localStorage.getItem("hour-12"));
	$("#hour-13 textarea").val(localStorage.getItem("hour-13"));
	$("#hour-14 textarea").val(localStorage.getItem("hour-14"));
	$("#hour-15 textarea").val(localStorage.getItem("hour-15"));
	$("#hour-16 textarea").val(localStorage.getItem("hour-16"));
	$("#hour-17 textarea").val(localStorage.getItem("hour-17"));
}

//creates a function  to color timeframes
function colorCode() {
  //runs the function for each description class
  $(".description").each(function () {
	//makes variable for id of parent of button ie timeblock
    var timeframe = parseInt($(this).parent().attr("id").split("-")[1]);
	//creates variable for worldly hour
    var currentHour = moment().hours(); //got hour
	// if currenthour less than time frame parseInt(numbervalue)
    if (parseInt(currentHour) > parseInt(timeframe)) {
		//adds class past to description
      $(this).addClass("past");
		//if currenthour is equal to timeframe
    } else if (currentHour === timeframe) {
		//adds class present to description
      $(this).addClass("present");
		//any other otherwise
    } else {
		//add future class to description
      $(this).addClass("future");
    }
  });
}
//invokes functions
getDescription();
colorCode();
