document.addEventListener("DOMContentLoaded", () => {
  const audioElement = document.querySelector("audio");
  audioElement.crossOrigin = "anonymous";
  const playButton = document.querySelector(".player-play-btn");
  const playIcon = playButton.querySelector(".player-icon-play");
  const pauseIcon = playButton.querySelector(".player-icon-pause");
  const progress = document.querySelector(".player-progress");
  const progressFilled = document.querySelector(".player-progress-filled");
  const playerCurrentTime = document.querySelector(".player-time-current");
  const playerDuration = document.querySelector(".player-time-duration");
  const volumeControl = document.querySelector(".player-volume");

  let audioCtx = null;
  let track = null;
  let gainNode = null;

  function initAudioContext() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      track = audioCtx.createMediaElementSource(audioElement);
      gainNode = audioCtx.createGain();
      track.connect(gainNode).connect(audioCtx.destination);
    }
  }

  function formatTime(seconds) {
    if (isNaN(seconds)) return "00:00";

    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  }

  function setTimes() {
    playerCurrentTime.textContent = formatTime(audioElement.currentTime);
    playerDuration.textContent = formatTime(audioElement.duration);
  }

  function progressUpdate() {
    if (isNaN(audioElement.duration)) return;
    const percent = (audioElement.currentTime / audioElement.duration) * 100;
    progressFilled.style.flexBasis = `${percent}%`;
  }

  playButton.addEventListener("click", () => {
    initAudioContext();

    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    if (playButton.dataset.playing === "false") {
      audioElement.play();
      playButton.dataset.playing = "true";
      playIcon.classList.add("hidden");
      pauseIcon.classList.remove("hidden");
    } else {
      audioElement.pause();
      playButton.dataset.playing = "false";
      pauseIcon.classList.add("hidden");
      playIcon.classList.remove("hidden");
    }
  });

  audioElement.addEventListener("timeupdate", () => {
    progressUpdate();
    setTimes();
  });

  audioElement.addEventListener("loadedmetadata", setTimes);

  audioElement.addEventListener("ended", () => {
    playButton.dataset.playing = "false";
    pauseIcon.classList.add("hidden");
    playIcon.classList.remove("hidden");
    progressFilled.style.flexBasis = "0%";
    audioElement.currentTime = 0;
  });

  let mousedown = false;

  function scrub(e) {
    if (isNaN(audioElement.duration)) return;
    const scrubTime =
      (e.offsetX / progress.offsetWidth) * audioElement.duration;
    audioElement.currentTime = scrubTime;
  }

  progress.addEventListener("click", scrub);
  progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
  progress.addEventListener("mousedown", () => (mousedown = true));
  progress.addEventListener("mouseup", () => (mousedown = false));
});
