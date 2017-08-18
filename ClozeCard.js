function ClozeCard(fullText, cloze){

	//use partial to eventually make the complete partial sentence
	var partial= fullText;

	// this.fullArr= fullText.split(" ");
	//split the cloze term if it's multiple words and store into an array
	this.clozeArr= cloze.split(" ");


	//loop through the clozeArr to replace the cloze word(s) with ...
	for(var i=0; i<this.clozeArr.length; i++){
		partial=partial.replace(this.clozeArr[i], "...");
	}

	//check to see if the full sentence actually contains the cloze string
	if(!fullText.includes(cloze)){
		console.log("error");

		return;
	}

	this.partial=partial;
	this.cloze= cloze;
	this.fullText= fullText;

//Use prototypes to attach these methods, wherever possible??
//when to create prototypes for a constructor
}

module.exports= ClozeCard;


// var card2= new ClozeCard("This is how we do it", "me");

// console.log(card2)

//testing
// var card= new ClozeCard("this is how we do it", "how we do");
// console.log(card.partial);

// console.log(card.clozeArr);	