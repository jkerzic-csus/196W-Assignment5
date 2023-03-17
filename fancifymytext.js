function Bigger(){
	document.getElementById("TextArea").style.fontSize="24pt";
}

function Fancy(){
	alert("Beep!");
	document.getElementById("TextArea").style.fontWeight="bold";
	document.getElementById("TextArea").style.color="blue";
	document.getElementById("TextArea").style.textDecoration="underline";
}

function Boring(){
	alert("Beep!");
	document.getElementById("TextArea").style.fontWeight="normal";
	document.getElementById("TextArea").style.color="black";
	document.getElementById("TextArea").style.textDecoration="none";
}

function Moo(){
	var text = document.getElementById("TextArea").value;
	var sentences = text.split(".");
	sentences.pop(); // Remove empty string
	for (var i = 0; i < sentences.length; i++)
	{
		let sentence = sentences[i].trim();
		sentence += "-Moo.";
		sentences[i] = sentence;
	}
	
	document.getElementById("TextArea").value = sentences.join(" ");
}