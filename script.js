document.addEventListener("DOMContentLoaded", function(event) {
	checkTextOverflow(".card");
});


function checkTextOverflow(element) {
	var elements = document.querySelectorAll(element);
	console.log(elements);
	elements.forEach(function (el) {
		console.log(el);
		var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
		var fontSize = parseFloat(style);


		if (el.querySelector('.title').scrollHeight > 300){

			while (el.querySelector('.title').scrollHeight > 300) {
				el.style.fontSize = fontSize+"px";
				fontSize = fontSize - 1;
				if (fontSize < 58) {
					break;
				}
			}
		}


		if (el.querySelector('.title').scrollWidth > 320){
			while (el.querySelector('.title').scrollWidth > 320) {
				el.style.fontSize = fontSize+"px";
				fontSize = fontSize - 1;
				if (fontSize < 58) {
					break;
				}
			}
		}







		if (el.querySelector('.name').scrollHeight > 120){
			while (el.querySelector('.name').scrollHeight > 120 || el.querySelector('.name').scrollWidth > 320) {
				el.querySelector('.name').style.fontSize = fontSize+"px";
				el.querySelector('.course').style.fontSize = fontSize*0.6+"px";
				el.querySelector('.supervision').style.fontSize = fontSize*0.3+"px";
				fontSize = fontSize - 1;
				if (fontSize < 28) {
					el.querySelector('.course').style.fontSize = "20px";
					el.querySelector('.supervision').style.fontSize = "16px";
					break;
				}
			}

		}



	});
}