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
var hour9 =document.querySelector("#hour-9");//assign variable to hour-9 id
var hour9 = 9//assigns numerical value to variable hour9
var hour10 = document.querySelector("#hour-10");//assign variable to hour-10 id
var hour10 = 10//assigns numerical value to variable hour10
var hour11= document.querySelector("#hour-11");//assign variable to hour-11 id
var hour11=11//assigns numerical value to variable hour11
var hour12 =document.querySelector("#hour-12");//assign variable to hour-12 id
var hour12 = 12//assigns numerical value to variable hour12
var hour13 =document.querySelector("#hour-13");//assign variable to hour-13 id
var hour13 = 13//assigns numerical value to variable hour13
var hour14 =document.querySelector("#hour-14");//assign variable to hour-14 id
var hour14 = 14//assigns numerical value to variable hour14
var hour15 =document.querySelector("#hour-15");//assign variable to hour-15 id
var hour15 = 15//assigns numerical value to variable hour15
var hour16 =document.querySelector("#hour-16");//assign variable to hour-16 id
var hour16 = 16//assigns numerical value to variable hour16
var hour17 =document.querySelector("#hour-17");//assign variable to hour-17 id
var hour17 = 17//assigns numerical value to variable hour17
//sets an array with all different containers as value for timeframe variable
var timeframe = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17]

// creates function to colorcode timeframes
function colorCode(){
	//for loop to go thru each timeframe index
	for(i= 0;i<timeframe.length;i++){
		//if currenthour value is equal to timeframe value of specific index
	if(currentHour==timeframe[i])
		//add present class to timeframe variable at specific index
	timeframe[i].addclass(present);
	//if currenthour value is less than the timeframe value at specific index
	if(currentHour<timeframe[i])
	//add future class to timeframe var at specific index 
	timeframe[i].addclass(future);
	//otherwise
	else	
	//add past class to timeframe var at specific index
	timeframe[i].addclass(past);
	

}}






//WHEN I click into a timeblock//THEN I can enter an event
//WHEN I click the save button for that timeblock
// variables for html classes
var savebutton = document.querySelectorAll(".btn saveBtn")
var description= document.querySelectorAll(".description")
//create function to add description to timeframe
function addDescription(){
savebutton.addEventListener("click",function(){
    preventDefault();
	//if the input of description is nothing (less than 1) return
    if (description.length < 1) return;
	//the text of description var is equal to the input of description
    description.innerHTML =description.value;
	// Save the list to localStorage
	window.localStorage.setItem('description', JSON.stringify(description.innerHTML));
	// function for each description
	description.forEach(function() {
        var inits = score.initials;
         var score = score.score;
         description.innerText = description.value
         timeframe.append(description.innerText);
	
     


})})}
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist