// DOM elements
const time = document.querySelector('#time');
const greeting = document.querySelector('#greeting');
const myName = document.querySelector('#name');
const focus = document.querySelector('#focus');

// Show time
function showTime() {
  // Dummy hour
  // let today = new Date(2020, 02, 07, 15, 30);

  let today = new Date();
  // Hour is a number from 0 to 23
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12 hour format
  hour = hour % 12 || 12;

  // Output time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;

  setTimeout(showTime, 1000);
}

// Add zero to min and sec
function addZero(n) {
  return(parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set background and greeting
function setBgGreet() {
  // Dummy date
  // let today = new Date(2020, 02, 07, 12, 30);
  let today = new Date();
  let hour = today.getHours();

  if(hour < 12) {
    // Morning
    greeting.textContent = 'Good morning, ';
    document.body.style.backgroundImage = "url(./img/morning.jpg)";
  } else if (hour < 19) {
    // Afternoon
    greeting.textContent = 'Good afternoon, ';
    document.body.style.backgroundImage = "url(./img/afternoon.jpg)";
  } else {
    // Evening
    greeting.textContent = 'Good evening, ';
    document.body.style.backgroundImage = "url(./img/evening.jpg)";
    // document.body.style.color = 'white';
  }
}

// Get name
function getName() {
  if(localStorage.getItem('name') === null) {
    myName.textContent = '[Enter your name]';
  } else {
    myName.textContent = localStorage.getItem('name');
  }
}

//Set name
function setName(e) {
  if(e.type === 'keypress') {
    // Make sure enter is pressed
    if(e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      myName.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get focus
function getFocus() {
  if(localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set focus
function setFocus(e) {
  if(e.type === 'keypress') {
    // Make sure enter is pressed
    if(e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

myName.addEventListener('keypress', setName)
myName.addEventListener('blur', setName)
focus.addEventListener('keypress', setFocus)
focus.addEventListener('blur', setFocus)

// Run
showTime();
setBgGreet();
getName();
getFocus();