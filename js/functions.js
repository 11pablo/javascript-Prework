function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function printRound(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('round').appendChild(div);
}

function clearRound(){
	document.getElementById('round').innerHTML = '';
}

