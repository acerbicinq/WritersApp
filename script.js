// TABLE OF CONTENTS  //
// 1. Modal Functionality
// 2. Background Change Functionality
// 3. Font Size Incrementing
// 4. Font Styling
// 5. Local Music Play/Display Functionality
// 6. Timer Functionality
// 7. Word Counter Functionality
// 8.

// ?. Save Option Functionality
// ?. Share Option Functionality
// ?. Notes on Implementing Accessibility Functionality with for() loops.


// 1. Modal & Modal Open Variables
const demoModal = document.getElementById('demo');
const loginModal = document.getElementById('login');
const openLoginModal = document.getElementById('open-login');
const openSignupModal = document.getElementById('open-signup');
const openDemoModal = document.getElementById('open-demo');
const closeButton = document.getElementsByClassName('close-btn')[0];
const cancelButton = document.getElementsByClassName('cancel-btn')[0];

//Login Modal Functionality
openLoginModal.onclick = () => loginModal.style.display = "block";
openSignupModal.onclick = () => loginModal.style.display = "block";
cancelButton.onclick = () => loginModal.style.display = "none";
window.onclick = function(e) {
  if (e.target == loginModal) {
    loginModal.style.display = "none";
  }
}

//Demo Modal Functionality
openDemoModal.onclick = () => demoModal.style.display = "block";
closeButton.onclick = () => demoModal.style.display = "none";

// 2222222222
// 2. Background Changes
const bgBtn1 = document.getElementById('bg1');
const bgBtn2 = document.getElementById('bg2');
const bgBtn3 = document.getElementById('bg3');
const bgBtn4 = document.getElementById('bg4');
const bgBtn5 = document.getElementById('bg5');

bgBtn1.onclick = () => demoModal.style.background = "url('./img/fog.jpg') no-repeat scroll center/cover";
bgBtn2.onclick = () => {
  demoModal.style.background = "rgba(255, 255, 255, 0.5) url('./img/ocean.jpg') no-repeat scroll center/cover";
  demoModal.style.backgroundBlendMode = "overlay";
}
bgBtn3.onclick = () => demoModal.style.background = "url('./img/sunset.jpg') no-repeat scroll center/cover";



bgBtn4.onclick = () => {
  demoModal.style.background = "rgba(0, 0, 0, 0.7) url('./img/night.jpg') no-repeat scroll center/cover";
  demoModal.style.backgroundBlendMode = "multiply";
};

bgBtn5.onclick = () => {
  demoModal.style.background = "rgba(0, 0, 0, 0.75) url('./img/wood.jpg') no-repeat scroll center/cover";
  demoModal.style.backgroundBlendMode = "multiply";
};

// 3333333333
// 3. Font Size Incrementing
const textarea = document.getElementById('console-text');

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
// 4. Font Styling
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
// 5. Music Play/Display
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
// 6. Timer!
const countdown = document.getElementById('countdown');
const minutesInput = document.getElementById('minutesInput');
const secondsInput = document.getElementById('secondsInput');
const timerStartBtn = document.getElementById('timerStartBtn');
const timerPauseBtn = document.getElementById('timerPauseBtn');
const timerResumeBtn = document.getElementById('timerResumeBtn');
const timerStopBtn = document.getElementById('timerStopBtn');
const timesUpNotification = document.getElementById('timer-sound');



timerStartBtn.addEventListener('click', startTimer);
//It begins. Lol.

function startTimer() {
  //Grabs input values from fields.
  minutesInput.onfocus = (e) => {
  return e.target.value;
  }
  minutesInput.onchange = (e) => {
  return e.target.value;
  }
  secondsInput.onfocus = (e) => {
  return e.target.value;
  }
  secondsInput.onchange = (e) => {
  return e.target.value;
  }
//Translates seconds into minutes
const seconds = secondsInput.value % 60;
//Grabs minutes for calculation
const minutes = minutesInput.value;

//Keeps timer looking consistent as counts down (00:00 format);
  if (minutes < 10 && seconds < 10) {
    countdown.innerHTML = `0${minutes}:0${seconds}`;
  } else if (minutes > 10 && seconds < 10) {
    countdown.innerHTML = `${minutes}:0${seconds}`;
  } else if (minutes > 10 && seconds > 10) {
    countdown.innerHTML = `${minutes}:${seconds}`;
  } else if (minutes < 10 && seconds > 10) {
    countdown.innerHTML = `0${minutes}:${seconds}`;
  }
  //Sets up values for countdown
const convertMinsToSecs = minutesInput.value * 60;
let secondsTotal = convertMinsToSecs + seconds;

//CountDown Function
const countDown = setInterval(function() {
  secondsTotal--;
  const remainingMinutes = Math.floor(secondsTotal / 60 % 60);
  const remainingSeconds = secondsTotal % 60;
    if (secondsTotal < 0 || secondsTotal === 0) {
      clearInterval(countDown);
      countdown.innerHTML = `Time's up, friend. Great job today!`;
      timesUpNotification.play();
    } else if (secondsTotal < 60) {
      countdown.innerHTML = `0:${secondsTotal}`;
    } else if (secondsTotal >= 60) {
          if (remainingMinutes < 10 && remainingSeconds < 10) {
            countdown.innerHTML = `0${remainingMinutes}:0${remainingSeconds}`;
          } else if (remainingMinutes > 10 && remainingMinutes < 10) {
            countdown.innerHTML = `${remainingMinutes}:0${remainingSeconds}`;
          } else if (remainingMinutes > 10 && seconds > 10) {
            countdown.innerHTML = `${remainingMinutes}:${remainingSeconds}`;
          } else if (remainingMinutes < 10 && seconds > 10) {
            countdown.innerHTML = `0${remainingMinutes}:${remainingSeconds}`;
          }
        }
  //Stop & Clear Timer
      timerStopBtn.onclick = () => {
          clearInterval(countDown);
          countdown.innerHTML = "";
        }
  //Pause timer
      timerPauseBtn.onclick = () => {
        clearInterval(countDown);
        console.log(`There are ${remainingMinutes} minutes and ${remainingSeconds} seconds left. That's ${secondsTotal} seconds! Resume?`);
      }
    }, 1000);

  //Resume Timer
      timerResumeBtn.onclick = () => {
        clearInterval(countDown);
        const resumeCountDown = setInterval( function() {
            secondsTotal--;
              const remainingMinutes = Math.floor(secondsTotal / 60 % 60);
              const remainingSeconds = secondsTotal % 60;
                if (secondsTotal < 0 || secondsTotal === 0) {
                  clearInterval(resumeCountDown);
                  countdown.innerHTML = `Time's up, friend. Great job today!`;
                  timesUpNotification.play();
                  }  else if (secondsTotal < 60) {
                    countdown.innerHTML = `0:${secondsTotal}`;
                  } else if (secondsTotal > 0) {
                      if (remainingMinutes < 10 && remainingSeconds < 10) {
                        countdown.innerHTML = `0${remainingMinutes}:0${remainingSeconds}`;
                      } else if (remainingMinutes > 10 && remainingMinutes < 10) {
                        countdown.innerHTML = `${remainingMinutes}:0${remainingSeconds}`;
                      } else if (remainingMinutes > 10 && seconds > 10) {
                        countdown.innerHTML = `${remainingMinutes}:${remainingSeconds}`;
                      } else if (remainingMinutes < 10 && seconds > 10) {
                        countdown.innerHTML = `0${remainingMinutes}:${remainingSeconds}`;
                      }
                    }

              //Post Resume: Stop & Clear Timer
                  timerStopBtn.onclick = () => {
                      clearInterval(resumeCountDown);
                      countdown.innerHTML = "";
                    }
              //Post Resume: Pause Timer
                  timerPauseBtn.onclick = () => {
                    clearInterval(resumeCountDown);
                    console.log(`Post Resume: There are ${remainingMinutes} minutes and ${remainingSeconds} seconds left. That's ${secondsTotal} seconds! Resume Again?`);
                  }
          }, 1000);
      };
}; //End of startTimer Function.






//Save functionality

function saveUserFileName() {
  const text = prompt("Please enter the file name to save as");
  console.log(text);
  return;
}

function download(filename, text) {

  const saveLink = document.createElement('a');
  saveLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textarea.value));
  saveLink.setAttribute('download', filename);

  saveLink.style.display = 'none';
  document.body.appendChild(saveLink);

  saveLink.click();
  saveUserFileName();
  document.body.removeChild(saveLink);
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
