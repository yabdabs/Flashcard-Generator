var inquirer= require("inquirer");
var fs= require("fs");


var Card= require("./ClozeCard.js");
var BasicCard= require("./basicCard.js");
var questions =require("./questions.js");


console.log(questions.questions.length);
var length= questions.questions.length;

var clozeQArr=[];
var targetQIndex= questions.questions[i];
var currentQuestion=0;
var correct=0;
var incorrect=0;


var playGame=false;

for(var i=0; i<length; i++){
	var clozeQ= new Card(questions.questions[i].question, questions.questions[i].answer);
	clozeQArr.push(clozeQ);
}

// console.log(clozeQArr)

function start(){

	if(playGame==false){
		inquirer.prompt([
		{
			type: "confirm",
			name: "startGame",
			message: "Do you want to start the flashcards?"
		}
		]).then(function (answers) {
	    	if(answers.startGame){
	    		console.log("it worked");

	    		playGame=true;
	    		startQuestions();
	    	}
	    	else{
	    		console.log("ok, catch ya later")
	    	}
		});
	}
	else{
		startQuestions();
	}
}

function startQuestions(){

	if(currentQuestion < length-1){

		inquirer.prompt([
		{
			type: "input",
			name: "clozeQuestion",
			message: clozeQArr[currentQuestion].partial
		}
		]).then(function(answers){
			if(answers.clozeQuestion==clozeQArr[currentQuestion].cloze){
				console.log("Correct Answer!\n");
				correct++;
			}
			else{
				console.log("That's wrong dumbass\n");
				incorrect++;
			}

			currentQuestion++;
			start();
		})
	}
	else{
		console.log("you completed all the flash cards!\n Here your stats: ");
		console.log("-----------------------------------------");
		console.log("Correct: " + correct);
		console.log("Incorrect: " + incorrect);
	}
}


//start the game!!
start();