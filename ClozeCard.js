function ClozeCard(fullText, cloze){

	var partial= fullText;

	// this.fullArr= fullText.split(" ");
	this.clozeArr= cloze.split(" ");


	for(var i=0; i<this.clozeArr.length; i++){
		partial=partial.replace(this.clozeArr[i], "...");
	}


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
var card= new ClozeCard("this is how we do it", "how we do");
console.log(card.partial);

console.log(card.clozeArr);	