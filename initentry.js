var theme = document.querySelector("#theme-link");
var cdwpopup = document.getElementById("cdwpopup");
var buglepopup = document.getElementById("buglepopup");

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
}

function userChoseGuest() {
  const login = document.getElementById("welcomeUserLogin");
  const settings = document.getElementById("guestUserSettings");
  login.style.opacity = "0";
  login.classList.add("hidden");
  settings.classList.add("guestUserSettingsTransition");
}

/* function userEntry() { window.myGlobalVar = "I am global!"; }

    userEntry();

    console.log(myGlobalVar); // "I am global!" (accessible globally)
*/
