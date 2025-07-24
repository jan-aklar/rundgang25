document.addEventListener("DOMContentLoaded", function(event) {
	checkTextOverflow(".card");
});


function checkTextOverflow(element) {

	var h1 = 400;
	var h2 = 200;
	var h3 = 120;

	var elements = document.querySelectorAll(element);
	console.log(elements);
	elements.forEach(function (el) {
		console.log(el);
		var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
		var fontSize = parseFloat(style);


		if (el.querySelector('.course').scrollHeight > h1){

			while (el.querySelector('.course').scrollHeight > h1) {
				el.style.fontSize = fontSize+"px";
				fontSize = fontSize - 1;
				if (fontSize < 20) {
					break;
				}
			}
		}


		if (el.querySelector('.course').scrollWidth > h1){
			while (el.querySelector('.course').scrollWidth > h1) {
				el.style.fontSize = fontSize+"px";
				fontSize = fontSize - 1;
				if (fontSize < 33) {
					break;
				}
			}
		}

		if (el.querySelector('.course-text').scrollHeight > h2){
			while (el.querySelector('.course-text').scrollHeight > h2) {
				el.style.fontSize = fontSize+"px";
				fontSize = fontSize - 1;
				if (fontSize < 45) {
					break;
				}
			}
		}

		if (el.querySelector('.name').scrollHeight > h3){
			while (el.querySelector('.name').scrollHeight > h3) {
				el.style.fontSize = fontSize+"px";
				fontSize = fontSize - 1;
				if (fontSize < 34) {
					break;
				}
			}
		}






		// if (el.querySelector('.course-text').scrollHeight > 120){
		// 	while (el.querySelector('.course-text').scrollHeight > 120 || el.querySelector('.name').scrollWidth > 320) {
		// 		el.querySelector('.course-text').style.fontSize = fontSize+"px";
		// 		el.querySelector('.name').style.fontSize = fontSize*0.6+"px";
		// 		el.querySelector('.supervision').style.fontSize = fontSize*0.3+"px";
		// 		fontSize = fontSize - 1;
		// 		if (fontSize < 28) {
		// 			el.querySelector('.name').style.fontSize = "20px";
		// 			el.querySelector('.supervision').style.fontSize = "16px";
		// 			break;
		// 		}
		// 	}

		// }



	});
}