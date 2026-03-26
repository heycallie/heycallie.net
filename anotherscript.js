document
  .getElementById("startMenuButton")
  .addEventListener("mousedown", regStartMenuPress);
document
  .getElementById("startMenuButton")
  .addEventListener("mouseleave", regStartMenuLeave);
document
  .getElementById("startMenuButton")
  .addEventListener("mouseenter", regStartMenuEnter);

function changeBackgroundWaterlilies() {
  const element = document.querySelector(".fullDocument");
  element.style.backgroundImage = "url('assets/windows_xp_102.jpg')";
}

function changeBackgroundDefault() {
  const element = document.querySelector(".fullDocument");
  element.style.backgroundImage = "url('assets/windows_xp_14.jpg')";
}

function changeBackgroundTulips() {
  const element = document.querySelector(".fullDocument");
  element.style.backgroundImage = "url('assets/windows_xp_35.jpg')";
}

function regStartMenuPress() {
  smb = document.getElementById("startMenuButton");
  if (!document.getElementById("startMenu").classList.contains("hidden")) {
    smb.style.backgroundImage = "url('assets/start_hover_v2.png')";
    sm.classList.toggle("hidden");
  } else {
    smb.style.backgroundImage = "url('assets/start_pressed_v2.png')";
    sm = document.getElementById("startMenu");
    sm.classList.toggle("hidden");
  }
}

function regStartMenuLeave() {
  smb = document.getElementById("startMenuButton");
  if (!document.getElementById("startMenu").classList.contains("hidden")) {
    return;
  }
  smb.style.backgroundImage = "url('assets/start_normal_v2.png')";
}

function regStartMenuEnter() {
  smb = document.getElementById("startMenuButton");
  if (!document.getElementById("startMenu").classList.contains("hidden")) {
    return;
  }
  smb.style.backgroundImage = "url('assets/start_hover_v2.png')";
}
