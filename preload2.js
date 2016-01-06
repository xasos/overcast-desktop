'use strict';

var theNewScript = document.createElement("script");
theNewScript.type = "text/javascript";
theNewScript.src = "http://code.jquery.com/jquery-1.10.2.js";
document.getElementsByTagName("head")[0].appendChild(theNewScript);
// jQuery MAY OR MAY NOT be loaded at this stage
var waitForLoad = function () {
    if (typeof jQuery != "undefined") {
        $.get("http://google.com");
    } else {
        window.setTimeout(waitForLoad, 1000);
    }
};
window.setTimeout(waitForLoad, 1000);


window.playPause = function () {
  document.getElementById('playpausebutton').click()
};

window.previous = function() {
  document.getElementById('seekbackbutton').click()
};

window.next = function() {
  document.getElementById('seekforwardbutton').click()
};
