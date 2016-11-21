$(document).ready(function() {

  //var timer = setTimeout('countDown('+secs+', "'+elem+'")', 1000);

  /*function countDown(secs,elem) {
    var element = document.getElementById(elem);
    element.innerHTML = "Time Remaining: " + secs + " seconds"
    secs--;
    var timer = setTimeout('countDown('+secs+', "'+elem+'")', 1000);
    if (secs < 1){
    	clearTimeout(timer);
    	element.innerHTML = '<h2>Countdown complete!</h2>';
    	element.innerHTML += '<a href="#">Click here now</a>';
    };
  };*/

  $("#lonestar").on("click", function() {
    $("#lonestar, #clickbeerbottle").hide("fast");
    $(".QApanel, .timerPanel, .btn-primary").removeClass("hidden");
   	countDown(30, "timer");
  });

});



//Ask why plus signs around secs and elem are necessary
var timer = setTimeout('countDown('+secs+', "'+elem+'")', 1000);

function countDown(secs,elem) {
	var element = document.getElementById(elem);
	element.innerHTML = "Time Remaining: " + secs + " seconds"
	secs--;
	var timer = setTimeout('countDown('+secs+', "'+elem+'")', 1000);
	if (secs < 1){
		clearTimeout(timer);
		element.innerHTML = '<h2>Countdown complete!</h2>';
		element.innerHTML += "<a href='#'>Click here now</a>";
	};
};


  