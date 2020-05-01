// TABLE OF CONTENTS  //
// 1. Modal Functionality
// 2. Theme Change Functionality
// 3. Font Size Incrementing
// 4. Change Font Styling Functionality
// 5. Local Music Play/Display Functionality
// 6. Timer Functionality
// 7. Word & Character Counter Functionality
// 8. Save Option Functionality
// 9. Moveable and Resizable Console Functionality
// ?. Console Display/Hide Animations with setTimeOut & Event Handlers
// ?. Notes on Implementing Accessibility Functionality with for() loops.


// 1111111
// 1. Modal Functionality
const demoModal = document.getElementById('demo');
const loginModal = document.getElementById('login');
const signupModal = document.getElementById('signup');
const openLoginModal = document.getElementById('open-login');
const openSignupModal = document.getElementById('open-signup');
const openDemoModal = document.getElementById('open-demo');
const closeButton = document.getElementById('demo-close');
const cancelLogin = document.getElementById('cancel-login');
const cancelSignup = document.getElementById('cancel-signup');
const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('.signup');
const noLoginMsg = document.querySelector('.no-login');
const noSignupMsg = document.querySelector('.no-signup');

//Login Modal Functionality
openLoginModal.onclick = () => loginModal.style.display = "block";
openSignupModal.onclick = () => signupModal.style.display = "block";
cancelLogin.onclick = () => loginModal.style.display = "none";
cancelSignup.onclick = () => signupModal.style.display = "none";

window.onclick = function(e) {
  if (e.target == signupModal) {
    signupModal.style.display = "none";
  } else if (e.target == loginModal) {
    loginModal.style.display = "none";
  }
}

loginBtn.onclick = () => noLoginMsg.innerText = "Sorry, login and signup are currently unavailable!";
signupBtn.onclick = () => noSignupMsg.innerText = "Sorry, login and signup are currently unavailable!";

//Demo Modal Functionality
const textarea = document.getElementById('console-text');
openDemoModal.onclick = () => {
  demoModal.style.display = "block";
  textarea.focus();
};
closeButton.onclick = () => demoModal.style.display = "none";

// 2222222222
// 2. Theme Change Functionality
const bgBtn1 = document.getElementById('bg1');
const bgBtn2 = document.getElementById('bg2');
const bgBtn3 = document.getElementById('bg3');
const bgBtn4 = document.getElementById('bg4');
const bgBtn5 = document.getElementById('bg5');

const defaultTheme = document.getElementById('default-theme');
const note = document.getElementById('note');

bgBtn1.onclick = () => {
  defaultTheme.href = "./fog.css";
  note.href = "https://unsplash.com/@mrmrs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
  note.innerText = "Skull Kat";
}
bgBtn2.onclick = () => {
  defaultTheme.href = "./ocean.css";
  note.href = "https://unsplash.com/@hermansyah?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
  note.innerText = "Hermansyah";
}
bgBtn3.onclick = () => {
  defaultTheme.href = "./sunset.css";
  note.href = "https://unsplash.com/@paul_nic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
  note.innerText = "Paolo Nicolello";
}
bgBtn4.onclick = () => {
  defaultTheme.href = "./night.css";
  note.href = "https://unsplash.com/@verstuyftj?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
  note.innerText = "Jonas Verstuyft";
};
bgBtn5.onclick = () => {
  defaultTheme.href = "./wood.css";
  note.href = "https://unsplash.com/@davidboca?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
  note.innerText = "David Boca";
};

// 3333333333
// 3. Font Size Incrementing
const defaultSizeBtn = document.getElementById('sz');
const szBtn1 = document.getElementById('sz1');
const szBtn2 = document.getElementById('sz2');
const szBtn3 = document.getElementById('sz3');
const szBtn4 = document.getElementById('sz4');


defaultSizeBtn.onclick = () => textarea.style.fontSize = "1em";
szBtn1.onclick = () => textarea.style.fontSize = "1.1em";
szBtn2.onclick = () => textarea.style.fontSize = "1.2em";
szBtn3.onclick = () => textarea.style.fontSize = "1.3em";
szBtn4.onclick = () => textarea.style.fontSize = "1.4em";

// 44444444
// 4. Change Font Styling Functionality
const fontBtn1 = document.getElementById('ltr1');
const fontBtn2 = document.getElementById('ltr2');
const fontBtn3 = document.getElementById('ltr3');
const fontBtn4 = document.getElementById('ltr4');
const fontBtn5 = document.getElementById('ltr5');

fontBtn1.onclick = () => textarea.style.fontFamily = "libre_caslon_displayregular";
fontBtn2.onclick = () => {
  textarea.style.fontFamily = "pistararegular";
  textarea.style.letterSpacing = "0.2em";
};
fontBtn3.onclick = () => textarea.style.fontFamily = "nimbus_monoregular";
fontBtn4.onclick = () => {
  textarea.style.fontFamily = "montezregular";
  textarea.style.letterSpacing = "0.2em";
}
fontBtn5.onclick = () => {
  textarea.style.fontFamily = "darkwomanregular";
  textarea.style.letterSpacing = "0.2em";
}
// 5555555
// 5. Local Music Play/Display Functionality
const playMusicBtn = document.getElementById('play');
const pauseMusicBtn = document.getElementById('pause');

const musicBtn1 = document.getElementById('mu1');
const musicBtn2 = document.getElementById('mu2');
const musicBtn3 = document.getElementById('mu3');
const musicBtn4 = document.getElementById('mu4');

const musicConsole1 = document.getElementById('controls1');
const musicConsole2 = document.getElementById('controls2');
const musicConsole3 = document.getElementById('controls3');
const musicConsole4 = document.getElementById('controls4');

playMusicBtn.onclick = () => {
  musicConsole1.style.display = "block";
  musicConsole1.play();
  playMusicBtn.style.display = "none";
  pauseMusicBtn.style.display = "inline-block";
}
pauseMusicBtn.onclick = () => {
  musicConsole1.style.display = "none";
  musicConsole2.style.display = "none";
  musicConsole3.style.display = "none";
  musicConsole4.style.display = "none";
  musicConsole1.pause();
  musicConsole2.pause();
  musicConsole3.pause();
  musicConsole4.pause();
  playMusicBtn.style.display = "inline-block";
  pauseMusicBtn.style.display = "none";
}
musicBtn1.onclick = () => {
  playMusicBtn.style.display = "none";
  pauseMusicBtn.style.display = "inline-block";
  if (musicConsole1.paused) {
    musicConsole1.play();
    musicConsole1.style.display = "block";
    musicConsole2.style.display = "none";
    musicConsole3.style.display = "none";
    musicConsole4.style.display = "none";
    musicConsole2.pause();
    musicConsole3.pause();
    musicConsole4.pause();
  } else {
    console.log("You are currently listening to this track.");
  }
}
musicBtn2.onclick = () => {
  playMusicBtn.style.display = "none";
  pauseMusicBtn.style.display = "inline-block";
  if (musicConsole2.paused) {
    musicConsole2.play();
    musicConsole2.style.display = "block";
    musicConsole1.style.display = "none";
    musicConsole3.style.display = "none";
    musicConsole4.style.display = "none";
    musicConsole1.pause();
    musicConsole3.pause();
    musicConsole4.pause();
  } else {
    console.log("You are currently listening to this track.");
  }
}
musicBtn3.onclick = () => {
  playMusicBtn.style.display = "none";
  pauseMusicBtn.style.display = "inline-block";
  if (musicConsole3.paused) {
    musicConsole3.play();
    musicConsole3.style.display = "block";
    musicConsole1.style.display = "none";
    musicConsole2.style.display = "none";
    musicConsole4.style.display = "none";
    musicConsole1.pause();
    musicConsole2.pause();
    musicConsole4.pause();
  } else {
    console.log("You are currently listening to this track.");
  }
}
musicBtn4.onclick = () => {
  playMusicBtn.style.display = "none";
  pauseMusicBtn.style.display = "inline-block";
  if (musicConsole4.paused) {
    musicConsole4.play();
    musicConsole4.style.display = "block";
    musicConsole1.style.display = "none";
    musicConsole2.style.display = "none";
    musicConsole3.style.display = "none";
    musicConsole1.pause();
    musicConsole2.pause();
    musicConsole3.pause();
  } else {
    console.log("You are currently listening to this track.");
  }
}


// 6666666
// 6. Timer Functionality
const countdown = document.getElementById('countdown');
const minutesInput = document.getElementById('minutesInput');
const timerStartBtn = document.getElementById('timerStartBtn');
const timerPauseBtn = document.getElementById('timerPauseBtn');
const timerResumeBtn = document.getElementById('timerResumeBtn');
const timerStopBtn = document.getElementById('timerStopBtn');
const timesUpNotification = document.getElementById('timer-sound');


// ======== TIMER START!!!! =========//
timerStartBtn.addEventListener('click', startTimer);

function startTimer() {
  timerStartBtn.style.display = "none";
  timerPauseBtn.style.display = "inline-block";

  function getMinutesValue() {
    //Grabs input values from fields.
    minutesInput.onfocus = (e) => {
    return e.target.value;
    }
    minutesInput.onchange = (e) => {
    return e.target.value;
    }
    //Grabs minutes for calculation
    if (minutesInput.value === "") {
      return 0;
    } else {
      return minutesInput.value;
    }
  }; //End of getMinutesValue function.

  const minutesValue = getMinutesValue();
  const remainingTime = minutesValue * 60;

  function convertToSeconds(s) {
    let min = Math.floor(s / 60);
    let secs = s % 60;
      if (min < 10 && secs < 10) {
        return `${min}:0${secs}`;
      } else if (min < 10 && secs >= 10) {
        return `0${min}:${secs}`;
      } else if (min >= 10 && secs > 10) {
        return `${min}:${secs}`;
      } else if (min >= 10 && secs < 10) {
        return `${min}:0${secs}`;
      }
  }

  let counter = 0;
  countdown.innerHTML = convertToSeconds(remainingTime - counter);
//CountDown Function
  const countDown = setInterval(function() {
    counter++;
    countdown.innerHTML = convertToSeconds(remainingTime - counter);
    if (remainingTime == counter || remainingTime == 0) {
      clearInterval(countDown);
      countdown.innerHTML = `Time's up, friend. Great job today!`;
      countdown.style.margin = "0";
      timesUpNotification.play();
    }

  //Stop & Clear Timer
      timerStopBtn.onclick = () => {
          clearInterval(countDown);
          countdown.innerHTML = "Timer";
          countdown.style.margin = "0 3em";
          timerStartBtn.style.display = "inline-block"
          timerResumeBtn.style.display = "none";
          timerPauseBtn.style.display = "none";
        }
        timerStopBtn.ondblclick = () => {
            clearInterval(countDown);
            countdown.innerHTML = "Timer";
            countdown.style.margin = "0 3em";
            minutesInput.value = "";
            timerStartBtn.style.display = "inline-block"
            timerResumeBtn.style.display = "none";
            timerPauseBtn.style.display = "none";
          }
  //Pause timer
      timerPauseBtn.onclick = () => {
        clearInterval(countDown);
        timerPauseBtn.style.display = "none";
        timerResumeBtn.style.display = "inline-block";
      }
    }, 1000);

  //Resume Timer
    timerResumeBtn.onclick = () => {
      clearInterval(countDown);
      timerResumeBtn.style.display = "none";
      timerPauseBtn.style.display = "inline-block";
      const resumeCountDown = setInterval(function() {
        counter++;
        countdown.innerHTML = convertToSeconds(remainingTime - counter);
        if (remainingTime == counter || remainingTime == 0) {
          clearInterval(resumeCountDown);
          countdown.innerHTML = `Time's up, friend. Great job today!`;
          countdown.style.margin = "0";
          timesUpNotification.play();
        }
        //Post Resume: Stop & Clear Timer
            timerStopBtn.onclick = () => {
                clearInterval(resumeCountDown);
                countdown.innerHTML = "Timer";
                countdown.style.margin = "0 3em";
                timerStartBtn.style.display = "inline-block"
                timerResumeBtn.style.display = "none";
                timerPauseBtn.style.display = "none";
              }
              timerStopBtn.ondblclick = () => {
                  clearInterval(resumeCountDown);
                  countdown.innerHTML = "Timer";
                  countdown.style.margin = "0 3em";
                  minutesInput.value = "";
                  timerStartBtn.style.display = "inline-block"
                  timerResumeBtn.style.display = "none";
                  timerPauseBtn.style.display = "none";
                }
        //Post Resume: Pause timer
            timerPauseBtn.onclick = () => {
              clearInterval(resumeCountDown);
              timerPauseBtn.style.display = "none";
              timerResumeBtn.style.display = "inline-block";
            }
        }, 1000);
      }
}; //End of startTimer Function.





// 77777777777
// 7. Word & Character Counter Functionality
const wordCount = document.getElementById('wordCount');
textarea.addEventListener('keydown', countWords);
textarea.addEventListener('keyup', countWords);
textarea.addEventListener('change', countWords);

wordCount.onclick = () => {
  wordCount.style.display = "none";
  characterCount.style.display = "block";
};

function countWords() {
  const words = textarea.value.trim().match(/\b\S+\b/g);
  if (words === null) {
    wordCount.innerText = 0;
  }
  wordCount.innerText = words.length;
}
//Character Counter
const characterCount = document.getElementById('characterCount');
textarea.addEventListener('keydown', countCharacters);
textarea.addEventListener('keyup', countCharacters);
textarea.addEventListener('change', countCharacters);

characterCount.onclick = () => {
  wordCount.style.display = "block";
  characterCount.style.display = "none";
};

function countCharacters() {
  const characters = textarea.value.split('');
  characterCount.innerText = characters.length;
}

// 888888888
// 8. Save Option Functionality
const saveBtn = document.getElementById('sv2');

saveBtn.onclick = function download(filename) {
  saveAsTextFile = document.createElement('a');
  const userFilename = prompt("Please enter the file name to save as");
  saveAsTextFile.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textarea.value));
  saveAsTextFile.setAttribute('download', userFilename);
  saveAsTextFile.style.display = 'none';
  document.body.appendChild(saveAsTextFile);
  saveAsTextFile.click();
  document.body.removeChild(saveAsTextFile);
}


// 9999999999
// 9. Moveable and Resizable Console Functionality
const moveableDiv = document.querySelector('.demo-content');
let isResizing = false;
let isWriting = false;

textarea.addEventListener("mousedown", writing);
textarea.addEventListener("mouseup", notWriting);
function writing(e) {
    isWriting = true;
    console.log('Totally writing!');
}
function notWriting() {
  isWriting = false;
  console.log('Not writing anymore.');
}


moveableDiv.addEventListener("mousedown", mousedown);
function mousedown(e) {
  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseup", mouseup);

  let prevX = e.clientX;
  let prevY = e.clientY;

  function mousemove(e) {
    if (!isResizing && !isWriting) {
    let newX = prevX - e.clientX;
    let newY = prevY - e.clientY;

    const rect = moveableDiv.getBoundingClientRect();
    moveableDiv.style.left = rect.left - newX + "px";
    moveableDiv.style.top = rect.top - newY + "px";

    prevX = e.clientX;
    prevY = e.clientY;
    }
  }
  function mouseup() {
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
  }
}

const resizers = document.querySelectorAll(".resizable");
let currentResizer;

for(let resizer of resizers) {
  resizer.addEventListener("mousedown", mousedown);

  function mousedown(e) {
    currentResizer = e.target;
    isResizing = true;

    let prevX = e.clientX;
    let prevY = e.clientY;

    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);
    function mousemove(e) {
      const rect = textarea.getBoundingClientRect();

      if (currentResizer.classList.contains('se')) {
        textarea.style.width = rect.width - (prevX - e.clientX) + "px";
        textarea.style.height = rect.height - (prevY - e.clientY) + "px";
      } else if (currentResizer.classList.contains('sw')) {
        textarea.style.width = rect.width + (prevX - e.clientX) + "px";
        textarea.style.height = rect.height - (prevY - e.clientY) + "px";
        textarea.style.left = rect.left - (prevX - e.clientX) + "px";
      } else if (currentResizer.classList.contains('ne')) {
        textarea.style.width = rect.width - (prevX - e.clientX) + "px";
        textarea.style.height = rect.height + (prevY - e.clientY) + "px";
        textarea.style.top = rect.top - (prevY - e.clientY) + "px";
      } else if (currentResizer.classList.contains('nw')) {
        textarea.style.width = rect.width + (prevX - e.clientX) + "px";
        textarea.style.height = rect.height + (prevY - e.clientY) + "px";
        textarea.style.top = rect.top - (prevY - e.clientY) + "px";
        textarea.style.left = rect.left - (prevX - e.clientX) + "px";
      }
      prevX = e.clientX;
      prevY = e.clientY;
    }
    function mouseup() {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseup", mouseup);
      isResizing = false;
    }
  }
};


// Animations & Set Timeout

const wordCountItems = document.getElementById('word-count-items');
const sidebar = document.getElementById('sidebar');
const navpanel = document.getElementById('navpanel');

moveableDiv.addEventListener("mouseover", showConsole);
moveableDiv.addEventListener("mouseleave", hideConsole);
navpanel.onmouseover = () => navpanel.style.opacity = 1;
function hideConsole() {
    sidebar.style.opacity = 0;
    navpanel.style.opacity = 0;
    wordCountItems.style.opacity = 0;
    console.log("I am hidden.")
};
function showConsole() {
  sidebar.style.opacity = 1;
  wordCountItems.style.opacity = 1;
  console.log("I am visible!");
}



//// ?. Notes on Implementing Accessibility Functionality with for() loops.
/*
var eventList = ["change", "keyup", "paste", "input", "propertychange", "..."];
for(event of eventList) {
    element.addEventListener(event, function() {
        // your function body...
        console.log("you inserted things by paste or typing etc.");
    });
}
*/
