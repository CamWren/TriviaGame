$(document).ready(function() {

//Sets click event for beer bottle
  $("#lonestar").on("click", function() {
  	//Hides beer bottle after click
    $("#lonestar, #clickbeerbottle").hide("fast");
    //Removes hidden class from the question-answer and timer panel divs
    $(".QApanel, .timerPanel, .btn-primary, #nextButton").removeClass("hidden");
    //Calls countDown function to initiate timer
   	countDown(30, "timer");


	 //Defines questions variable and subsequent objects
	 var questions = [{
	 	question: 'What was the term coined by Michael Martin Murphey to describe the cultural confluence of hippies and rednecks in early 1970s Austin?',
	 	choices: ['Longhair Kicker', 'Cosmic Cowboy', 'Hippie Redneck', 'Psychedelic Cowboy'],
	 	correctAnswer: 1
	 },
	 {
	 	question: 'What music venue became the hub of the burgeoning music scene in Austin in the early 1970s?',
	 	choices: ['Armadillo World Headquarters', 'Antones', 'Broken Spoke', 'Hole in the Wall'],
	 	correctAnswer: 0
	 },
	 {
	 	question: 'In what year did Austin City Limits first air on PBS?',
	 	choices: ['1971', '1980', '1968', '1974'],
	 	correctAnswer: 3
	 },
	 {
	 	question: 'What genre of music were The 13th Floor Elevators known for poineering?',
	 	choices: ['Muzak', 'Easy listening', 'Psychedelic rock', 'Country rock'],
	 	correctAnswer: 2
	 },
	 {
	 	question: 'What is the name of the conjunto-rock and roll supergroup formed by Doug Sahm, Flaco Jim&eacute;nez, Freddy Fender, and Augies Meyers?',
	 	choices: ['Asleep at the Wheel', 'Greezy Wheels', 'Balcones Fault', 'Texas Tornados'],
	 	correctAnswer: 3
	 }];


	 //Reference to HTML tags
	var questionPanel = document.getElementById('questionPanel');
	var choicesList = document.getElementById('choicesList');
	var nextButton = document.getElementById('nextButton');

	//Other variables
	var i = 0;
	var lengthL = questions.length;
	var correctAnswer = 0;


	//Itterate through questions when next button is clicked
	nextButton.onclick = function() {
		if (i > questions.length -1) {//go back to first question when finished
			i = 0;
		}
		nextQuestion(i);
		i++;
	};	


	function nextQuestion(qNum) {
		var individualQuestion = questions[i];
		questionPanel.innerText = individualQuestion.question;

		choicesList.innerHTML = ""; //Resets choices list
		for (key in individualQuestion.choices) {
			 var radioBtnName = "question"+i+"_choice";
			 var choiceText = individualQuestion.choices[key];
			 choicesList.appendChild(createLi(radioBtnName,choiceText));
		}
	};


	function createLi(name, choiceText) {
        var e = document.createElement('li');
        var buttonHtml = '<input type="button" name="' + name + '"';    
        buttonHtml += '/>';
        buttonHtml += choiceText;        
        e.innerHTML = buttonHtml;        
        return e;
	};

  });

});


	//Ask why plus signs around secs and elem are necessary
	//var timer = setTimeout('countDown('+secs+', "'+elem+'")', 1000);

	//Function for timer
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




