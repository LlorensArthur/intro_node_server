const questions = [
	{question : "Quelle est la couleur du cheval blanc d'henry 4?", response : "rouge"},
	{question : `En javascript, "1" + "1" = ? `, response : 11},
	{question : "Quel est le sens de la vie?", response : "42"},
]

let iterator = 0;
process.stdout.write(`${questions[iterator].question}\n`);

process.stdin.on("data", (chunk) => {
	let userInput = chunk.toString().trim();
	if(isGoodAnswer(questions[iterator].response, userInput)) process.stdout.write("bonne réponse\n");
	else process.stdout.write("mauvaise réponse\n");

	iterator++;
	if(iterator > questions.length -1){
		console.log("le quizz est fini\n");
		process.exit();
	}

	process.stdout.write(`${questions[iterator].question}\n`);
})	

function isGoodAnswer(response, answer){
	if(typeof response === "number"){
		answer = parseInt(answer);
	}
	return response === answer;
}