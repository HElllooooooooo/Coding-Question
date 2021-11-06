let myKeys = document.querySelectorAll('.key');


for (let x = 0; x < myKeys.length; x++) {
    myKeys[x].addEventListener('click', function () {
		// alert("button " + myKeys[x].innerHTML + " is clicked");
		// let snd = new Audio('doremi/do.mp3');
		// snd.play();
		// playSnd('f');
		playSnd(myKeys[x].innerHTML.toLowerCase());

    })
}

document.addEventListener('keydown', function (btn) {

	playSnd(btn.key.toLowerCase());

	let pressed_key = btn.key.toLowerCase();

	for (let x = 0; x < myKeys.length; x++ ) {
		myKeys[x].classList.remove('activated');
	}

	for (let x = 0; x < myKeys.length; x++ ) {
		if (pressed_key == myKeys[x].innerHTML.toLowerCase()) {
			myKeys[x].classList.add('activated');
		}
	}

})

function playSnd(key) {
	switch (key) {
		case 'c':
			var snd = new Audio('316899__jaz-the-man-2__do-stretched.wav');
			snd.play();
			break;
		case 'd':
			var snd = new Audio('442983__pacway__re-d (1).mp3');
			snd.play();
			break;
		case 'e':
			var snd = new Audio('442977__pacway__mi-e.mp3');
			snd.play();
			break;
		case 'f':
			var snd = new Audio('392397__themineway__fa.wav');
			snd.play();
			break;
		case 'g':
			var snd = new Audio('442981__pacway__sol-g.mp3');
			snd.play();
			break;
		case 'a':
			var snd = new Audio('442978__pacway__la-a.mp3');
			snd.play();
			break;
		case 'b':
			var snd = new Audio('Ti Sound ‐ Made with Clipchamp (1).mp4');
			snd.play();
			break;
		case 'k':
			var snd = new Audio('316899__jaz-the-man-2__do-stretched.wav');
			snd.play();
			break;
		default:
			console.log(key);
	}
}










