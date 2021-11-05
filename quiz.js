
function checkQuiz(){

	let q1 = document.quiz.question1.value;
	let q2 = document.quiz.question2.value;
    let q3 = document.quiz.question3.value;
	let cnt = 1;


// 	if (q1 == "Nursezim") {
// 		cnt++;
// }
	if (q2 == "Willy Wonka") {
		cnt++;
}	
	if (q3 == "I'm Harry Styles") {
		cnt++;
	}
	
	let pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	let messages = ["Good job!", "Not bad!", "Well, its okay!"];
	let score;

	if (cnt == 0) {
		score = 2;
	}

	if (cnt > 0 && correct < 3) {
		score = 1;
	}

	if (cnt == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + cnt+ " correct.";
	document.getElementById("picture").src = pictures[score];
	}