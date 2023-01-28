$(document).ready(function () {
  var currentDay = dayjs().hour();
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});

var textArea9 = document.getElementById("text9")
textArea9.value = localStorage.getItem('hour-9')

var textArea9 = document.getElementById("text10")
textArea9.value = localStorage.getItem('hour-10')

var textArea9 = document.getElementById("text11")
textArea9.value = localStorage.getItem('hour-11')

var textArea9 = document.getElementById("text12")
textArea9.value = localStorage.getItem('hour12')

var textArea9 = document.getElementById("text1")
textArea9.value = localStorage.getItem('hour-1')

var textArea9 = document.getElementById("text2")
textArea9.value = localStorage.getItem('hour-2')

var textArea9 = document.getElementById("text3")
textArea9.value = localStorage.getItem('hour-3')

var textArea9 = document.getElementById("text4")
textArea9.value = localStorage.getItem('hour-4')

var textArea9 = document.getElementById("text5")
textArea9.value = localStorage.getItem('hour-5')

var buttonEl = $(".saveBtn");
buttonEl.on("click", saveToStorage);

function saveToStorage() {
  var txtVal = $(this).siblings(".description").val();
  var localId = $(this).parent().attr("id")
  localStorage.setItem(localId, txtVal)
  console.log(txtVal);
}



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
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