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

document.addEventListener("DOMContentLoaded", () => {
  const userClickFile = document.getElementById("fileButton");
  userClickFile && (userClickFile.onclick = regClickFile);

  const userClickEdit = document.getElementById("editButton");
  userClickEdit && (userClickEdit.onclick = regClickEdit);

  const windows = document.getElementsByClassName("window");
  for (let i = 0; i < windows.length; i++) {
    windows[i].addEventListener("mousedown", regWindowClick);
  }
});

function checkFileDropdown() {
  if (document.getElementById("fileDropdown").classList.contains("hidden")) {
  } else {
    document.getElementById("fileDropdown").classList.toggle("hidden");
  }
}

function checkEditDropdown() {
  if (document.getElementById("editDropdown").classList.contains("hidden")) {
  } else {
    document.getElementById("editDropdown").classList.toggle("hidden");
  }
}

function regClickFile() {
  checkEditDropdown();
  var x = document.getElementById("fileDropdown");
  x.classList.toggle("hidden");
}

function regClickEdit() {
  checkFileDropdown();
  var x = document.getElementById("editDropdown");
  x.classList.toggle("hidden");
}

function closeTab(id) {
  id = id || "window1";
  document.getElementById(id).classList.toggle("hidden");
}

function openTab(id) {
  id = id || "window1";
  document.getElementById(id).classList.toggle("hidden");
}

function bringToFront(el) {
  if (!el) return;
  var max = 0;
  var ws = document.getElementsByClassName("window");
  for (var i = 0; i < ws.length; i++) {
    // always use the genuine global object
    var comp = document.defaultView || window;
    var z = parseInt(comp.getComputedStyle(ws[i]).zIndex, 10) || 0;
    if (z > max) max = z;
  }
  el.style.zIndex = max + 1;
}

function regWindowClick(event) {
  bringToFront(this);
}

const win = document.getElementById("window");
if (win) dragElement(win);

document.querySelectorAll(".draggable").forEach(function (el) {
  dragElement(el);
});

function dragElement(elmnt) {
  if (!elmnt) return;
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "Drag")) {
    document.getElementById(elmnt.id + "Drag").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var theme = document.querySelector("#theme-link");
var cdwpopup = document.getElementById("cdwpopup");
var buglepopup = document.getElementById("buglepopup");
var aolpopup = document.getElementById("aolpopup");
var noaolpopup = document.getElementById("antiaolpopup");
var netscapepopup = document.getElementById("nspopup");
var dailymp3popup = document.getElementById("mp3popup");

function userEntry() {
  var darkMode = document.querySelector("#darkMode");
  var popups = document.querySelector("#popupSelector");
  if (darkMode.checked == true) {
    console.error("dark mode doesn't work by the way");
    darkModeEnable();
  }
  darkModeDisable();
  if (popups.checked == true) {
    popupsDisable();
  }
  updateTime();
  entryTitleFunction();
  closeEntryMessage();
}

function closeEntryMessage() {
  document.getElementById("entryMessage").classList.toggle("hidden");
}

/* function darkModeEnable() {
  theme.href = "dark-mode.css";
} */

function darkModeDisable() {
  theme.href = "light-mode.css";
}

function popupsDisable() {
  cdwpopup.classList.add("hidden");
  buglepopup.classList.add("hidden");
  aolpopup.classList.add("hidden");
  noaolpopup.classList.add("hidden");
  netscapepopup.classList.add("hidden");
  dailymp3popup.classList.add("hidden");
}

function userChoseGuest() {
  document.getElementById("title").innerHTML = "Guest Login";
  const login = document.getElementById("welcomeUserLogin");
  const settings = document.getElementById("guestUserSettings");
  login.style.opacity = "0";
  login.classList.add("hidden");
  settings.classList.add("guestUserSettingsTransition");
}

function fileExplorerHideAll() {
  document.getElementById("cMyDocumentsMusicFiles").classList.add("hidden");
  document.getElementById("eMusicTVGirl").classList.add("hidden");
}

function regFileExploreVocaloidClick() {
  document.getElementById("addressAddressBoxText").innerHTML =
    "C:&#92;Users&#92;Guest&#92;My Documents&#92;Vocaloid";
  fileExplorerHideAll();
  document.getElementById("cMyDocumentsMusicFiles").classList.remove("hidden");
  document.getElementById("window5Name").innerHTML = "Vocaloid - File Explorer";
}

function regFileExploreTVGirlClick() {
  document.getElementById("addressAddressBoxText").innerHTML =
    "E:&#92;Music&#92;TV Girl";
  fileExplorerHideAll();
  document.getElementById("eMusicTVGirl").classList.remove("hidden");
  document.getElementById("window5Name").innerHTML = "TV Girl - File Explorer";
}

function regFileExplorefemtanylClick() {
  document.getElementById("addressAddressBoxText").innerHTML =
    "E:&#92;Music&#92;femtanyl";
  fileExplorerHideAll();
  document.getElementById("eMusicfemtanyl").classList.remove("hidden");
  document.getElementById("window5Name").innerHTML = "femtanyl - File Explorer";
}

function regFileExploreLovejoyClick() {
  document.getElementById("addressAddressBoxText").innerHTML =
    "E:&#92;Music&#92;Lovejoy";
  fileExplorerHideAll();
  document.getElementById("eMusicLovejoy").classList.remove("hidden");
  document.getElementById("window5Name").innerHTML = "Lovejoy - File Explorer";
}

function resetAddressNavigation() {
  document.getElementById("addressAddressBoxText").innerHTML = "C:&#92;";
  document.getElementById("cMyDocumentsMusicFiles").classList.add("hidden");
  document.getElementById("window5Name").innerHTML = "File Explorer";
}

var mediaPlayeriFrame = document.getElementById("mediaPlayeriFrame");

function regFileMusicStaticClick() {
  var mediaplayer = document.getElementById("window6");
  mediaplayer.classList.remove("hidden");
  bringToFront(mediaplayer);
  document.getElementById("mediaPlayerWindowName").innerHTML = "Static.mp4";
  mediaPlayeriFrame.src =
    "https://www.youtube.com/embed/KlTNKOnfXFk?si=N1fmvjAxYjO3welF&amp;controls=1&amp;autoplay=1";
  mediaPlayeriFrame.title = "Static ft. Hatsune Miku";
  mediaplayer.style.height = "371px";
}

function regFileMusicWhatchaClick() {
  var mediaplayer = document.getElementById("window6");
  mediaplayer.classList.remove("hidden");
  bringToFront(mediaplayer);
  document.getElementById("mediaPlayerWindowName").innerHTML =
    "WhatchaCallItsName.mp4";
  mediaPlayeriFrame.src =
    "https://www.youtube.com/embed/bzWs0VpYftE?si=GEMuFtMBL7f-b9Zw&amp;controls=1&amp;autoplay=1";
  mediaPlayeriFrame.title = "WhatchaCallItsName";
  mediaplayer.style.height = "483px";
}

function stopMediaPlayerPlaying() {
  document.getElementById("mediaPlayeriFrame").src = "";
}

function reboot() {
  location.reload();
}

function updateTime() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  let ampm = "am";

  if (hours >= 12) {
    ampm = "pm";
    if (hours > 12) hours -= 12;
  }
  if (hours === 0) hours = 12;

  const formattedMinutes = minutes.toString().padStart(2, "0");

  document.getElementById("userTimeDisplay").textContent =
    `it is ${hours}:${formattedMinutes} ${ampm} :)`;

  document.getElementById("taskbarUserTimeDisplay").textContent =
    `${hours}:${formattedMinutes} ${ampm}`;

  const delay = 60000 - (now.getSeconds() * 1000 + now.getMilliseconds());

  setTimeout(updateTime, delay);
}

function entryTitleFunction() {
  /* var el = document.getElementById("title");

  var message = "   Welcome!!!   ";
  var viewWidth = 20;
  var offset = 0;

  var buffer = message.repeat(50);

  setInterval(function () {
    el.innerHTML = buffer.substr(offset, viewWidth);

    offset = (offset + 1) % buffer.length; // wrap across entire buffer
  }, 120); */

  document.getElementById("title").innerHTML = "Desktop";
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// document.getElementById("window9").style.top = getRandomInt(86) + "vh";
// document.getElementById("window9").style.left = getRandomInt(91) + "vw";

document.querySelectorAll(".popup").forEach(function (el) {
  el.style.left = getRandomInt(91) + "vw";
  el.style.top = getRandomInt(86) + "vh";
});
