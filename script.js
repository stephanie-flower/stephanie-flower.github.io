

document.addEventListener("DOMContentLoaded", function(event) {
    dragElement(document.getElementById("mainbox"));
    dragElement(document.getElementById("skillsbox"));
    dragElement(document.getElementById("projectsbox"));
    dragElement(document.getElementById("contactmebox"));
    setInterval(getCurrentTime, 1000);
});

function showWindow(window) {
  document.getElementById(window).style.display = "block";
  document.getElementById(window + "Taskbar").style.display = "block";
}

function hideWindow(window) {
  document.getElementById(window).style.display = "none";
  document.getElementById(window + "Taskbar").style.display = "none";
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
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
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function getCurrentTime() {
  var now = new Date();
  var time = now.getHours() + ":" + now.getMinutes().padStart(2, 0);
  document.getElementById('clock').innerHTML = time;
}