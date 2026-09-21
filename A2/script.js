const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
const galleryModeBtn = document.querySelector("#gallery-mode-btn");
const body = document.querySelector("body");

let galleryModeOn = false;

video.removeAttribute("controls");

// playPauseBtn.addEventListener("click", togglePlayPause);

video.addEventListener("timeupdate", updateProgressBar);
galleryModeBtn.addEventListener("click", toggleGalleryMode);

/* I kept the starter code for the play and pause button and progress bar. It
removes the browser's default controls and updates the custom progress bar as
the video plays. */
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src =
      "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src =
      "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}

/* Gallery Mode uses a click event and classList methods. A Boolean variable
records whether the mode is on. Adding or removing the gallery-mode class lets
the CSS change the page layout, while textContent updates the button so the
user can see which action will happen next. */
function toggleGalleryMode() {
  if (galleryModeOn === false) {
    body.classList.add("gallery-mode");
    galleryModeBtn.textContent = "Exit Gallery Mode";
    galleryModeOn = true;
  } else {
    body.classList.remove("gallery-mode");
    galleryModeBtn.textContent = "Enter Gallery Mode";
    galleryModeOn = false;
  }
}
