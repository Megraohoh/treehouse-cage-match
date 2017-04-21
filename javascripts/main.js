$(document).ready(function() {

	$(".btn").click(function(){ 
		let player1String = $("#player1").val();
		let player2String = $("#player2").val();

		    if(player1String === "") {
			alert("Which mortal do you wish to sacrifice to the cage?!");
			}
			if(player2String === "") {
			alert("Which mortal do you wish to sacrifice to the cage?!");
			}

		const player1 = [];
		const player2 = [];


	const loadPlayer1 = () => {
		return new Promise((resolve, reject) => {
			$.ajax("https://teamtreehouse.com/" + player1String + ".json")
			.done((data) => resolve(data))
			.fail((error) => reject(error));
		});
	};

	const loadPlayer2 = () => {
		return new Promise((resolve, reject) => {
			$.ajax("https://teamtreehouse.com/" + player2String + ".json")
			.done((data1) => resolve(data1))
			.fail((error1) => reject(error1));
		});
	};


	
console.log("p1", player1String);
console.log("p2", player2String);


	});

});