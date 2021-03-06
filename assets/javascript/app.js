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
	 	question: 'Which singer-songwriter coined the term "Cosmic Cowboy" to describe the confluence of hippies and rednecks in early 1970s Austin?',
	 	choices: ['Jerry Jeff Walker', 'Michael Martin Murphey', 'Guy Clark', 'Townes Van Zandt'],
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
	 	question: 'What is the name of the conjunto-rock and roll supergroup formed by Doug Sahm, Flaco Jimenez, Freddy Fender, and Augies Meyers?',
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
	var buttonName = "question"+i+"_choices";


	//Itterate through questions when next button is clicked
	nextButton.onclick = function() {
		if (i > questions.length -1) {//go back to first question when finished
			i = 0;
		}
		nextQuestion(i);
		i++;
	};



	function createLi(name, choiceText) {
        var e = document.createElement('li');
        var radioBtnHtml = '<input type="radio" id="radioButton" name="' + name + '"';    
        radioBtnHtml += '/>';
        radioBtnHtml += choiceText;        
        e.innerHTML = radioBtnHtml;        
        return e;
	};


	document.getElementsByName("question"+i+"_choices").click(function() {
		alert("asdlkfja");
	});


	function nextQuestion(qNum) {
		var individualQuestion = questions[i];
		questionPanel.innerText = individualQuestion.question;

		choicesList.innerHTML = ""; //Resets choices list
		for (key in individualQuestion.choices) {
			 var buttonName = "question"+i+"_choices";
			 var choiceText = individualQuestion.choices[key];
			 choicesList.appendChild(createLi(buttonName,choiceText));
		};

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




