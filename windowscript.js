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

/* document.getElementById("window3").addEventListener(""); */
