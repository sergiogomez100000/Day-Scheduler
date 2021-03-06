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
var currentHour=moment().format("HH");//got military hour
console.log(currentHour); //logd in military number
var hour9 =document.querySelector("#hour-9");
var hour9 = 9
console.log(hour9)



//WHEN I click into a timeblock
//THEN I can enter an event
//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist
//Global Variables using moment script link
