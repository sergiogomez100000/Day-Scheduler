//GIVEN I am using a daily planner to create a schedule//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
//Global Variables
//make variable for today for the moment script info and format
var today = moment().format("MMM Do,YYYY");
//make variable for id currentDay
var currentDay = document.getElementById("currentDay");
//variable currentday textcontent updated to variable today
currentDay.textContent = today;
//WHEN I scroll down//THEN I am presented with timeblocks for standard business hours//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
var currentHour = moment().format("HH"); //got hour
console.log(currentHour); //logd in military number
//creates variable for (".description")
//var description = document.getElementByClassName(".description");
//creates variable for timeblock
//var timeblock = document.getElementByClassName(".timeblock");
// eventlistener to savebtn on click execute function
$(".saveBtn").on("click", function (e) {
	//prevent page refresh
  e.preventDefault();
	//creates variable for id hour container
  var time = $(this).parent().attr("id");
	//creates variable for textarea value of decription class
  var description = $(this).siblings(".description").val();
	//returns a sstring to local storage a sets to key
  JSON.stringify(localStorage.setItem(time, description));
});
//calls for function
getDescription();
//a function to get todos and display
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
//calls a function  to color timeframes
function colorCode() {
  //runs the function for each description class
  $(".description").each(function () {
	//makes variable for id of parent of button ie timeblock
    var timeframe = $(this).parent().attr("id");
	//creates variable for worldly hour
    var currentHour = moment().format("HH"); //got hour
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
//calls color code function always define it before you call it
colorCode();

//vanilla attempt
//var hour9 = $("#tasks-9");//assign variable to hour-9 id
//var hour9value = 9//assigns numerical value to variable hour9
// var hour10 = document.querySelector("#hour-10");//assign variable to hour-10 id
// //var hour10value = 10//assigns numerical value to variable hour10
// var hour11= document.querySelector("#hour-11");//assign variable to hour-11 id
// //var hour11value =11//assigns numerical value to variable hour11
// var hour12 =document.querySelector("#hour-12");//assign variable to hour-12 id
// //var hour12value = 12//assigns numerical value to variable hour12
// var hour13 =document.querySelector("#hour-13");//assign variable to hour-13 id
// // var hour13value = 13//assigns numerical value to variable hour13
// var hour14 =document.querySelector("#hour-14");//assign variable to hour-14 id
// // var hour14value = 14//assigns numerical value to variable hour14
// var hour15 =document.querySelector("#hour-15");//assign variable to hour-15 id
// //var hour15 = 15//assigns numerical value to variable hour15
// var hour16 =document.querySelector("#hour-16");//assign variable to hour-16 id
// //var hour16 = 16//assigns numerical value to variable hour16
// var hour17 =document.querySelector("#hour-17");//assign variable to hour-17 id
// //var hour17 = 17//assigns numerical value to variable hour17
// //sets an array with all different containers as value for timeframe variable
//var timeframe = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17]
//var timeframe = [hour9]
//console.log(timeframe)
//colorCode(timeframe);
//creates function to colorcode timeframes
//function colorCode(timeframe) {
//for loop to go thru each timeframe index
//for(i=0;i<timeframe.length;i++){
//console.log(timeframe[i])
//if currenthour value is equal to timeframe value of specific index
///if(currentHour==timeframe[i]) {
//add present class to timeframe variable at specific index
//timeframe[i].addClass("present");
// timeframe[i].block.setAttribute("data", )
//}
//if currenthour value is less than the timeframe value at specific index
//else if(currentHour<timeframe[i]) {
//add future class to timeframe var at specific index
//timeframe[i].addClass("future");
// }

//otherwise
//else {
//add past class to timeframe var at specific index
//timeframe[i].addClass("past");
//}
///}
//}

//WHEN I click into a timeblock//THEN I can enter an event
//WHEN I click the save button for that timeblock
// variables for html classes
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist
