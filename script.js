//Modal & Modal Open Variables
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


//Background Changes
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

//Font Size Incrementing
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


//Save functionality
