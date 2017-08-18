var inquirer= require("inquirer");
var fs= require("fs");


var Card= require("./ClozeCard.js");
var BasicCard= require("./basicCard.js");
var questions =require("./questions.js");

//length is the size of the questions array
console.log(questions.questions.length);
var length= questions.questions.length;

//holds the questions
var clozeQArr=[];

//target the index of the questions array
var targetQIndex= questions.questions[i];

var currentQuestion=0;
var correct=0;
var incorrect=0;

var playGame=false;

//length is the size of the questions array
//Card is the ClozeCard constructor
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
	    		console.log("\n------------------------------------------")
	    		console.log("The Game has Started!\n");

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

	//length is the size of questions array
	if(currentQuestion < length-1){

		inquirer.prompt([
		{
			type: "input",
			name: "clozeQuestion",
			message: clozeQArr[currentQuestion].partial
		}
		]).then(function(answers){
			if(answers.clozeQuestion == clozeQArr[currentQuestion].cloze){
				console.log("__________________________________________")
				console.log("Correct Answer!");
				console.log("__________________________________________\n")
				correct++;
			}
			else{
				console.log("__________________________________________")
				console.log("That's wrong!! C'mon /:");
				console.log("__________________________________________\n")
				incorrect++;
			}

			currentQuestion++;
			start();
		})
	}
	else{
		console.log("\n__________________________________________________________")
		console.log("you completed all the flash cards!\n\nHere your stats: ");
		console.log("-----------------------------------------");
		console.log("Correct: " + correct);
		console.log("Incorrect: " + incorrect);
		console.log("-----------------------------------------");
	}
}


//start the game!!
start();