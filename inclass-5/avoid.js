window.onload = function() {

	var congrats = document.getElementById("congratulations");
	var button = document.getElementById("clickMe");
	button.onclick = function () {
		var x = window.innerWidth;
		var y = window.innerHeight;

		if (button.innerHTML == "Click me!") {
			congrats.style.display = "block";
			button.innerHTML = "Play Again";
		} else {
			congrats.style.display = "none";
			button.innerHTML = "Click me!";
			var newx = Math.floor((Math.random()-0.5) * x * 1);
			var newy = Math.floor((Math.random()-0.5)* y * 1);

			button.style.top = newx + "px";
			button.style.left = newy + "px";


		}
	}
	button.onmouseover = function() {
		var x = window.innerWidth;
		var y = window.innerHeight;

		if (event.shiftKey || button.innerHTML == "Play Again") {
			
		} else {
			var newx = Math.floor((Math.random()-0.5) * x * 1);
			var newy = Math.floor((Math.random()-0.5) * y * 1);

			button.style.top = newy + "px";
			button.style.left = newx + "px";
		}
	}

}
