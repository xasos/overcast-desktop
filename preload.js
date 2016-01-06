window.onload = function() {
    var script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-2.1.4.min.js";
    script.onload = script.onreadystatechange = function() {
      $(document).ready(function() {
        //$("#lst-ib").val("Hello, World!");
        setTimeout(function(){
          if(newState == -1){alert("ayy");}
        }, 1000);

        $('#playpausebutton')[0].click()
      });
    };
    document.body.appendChild(script);
};
