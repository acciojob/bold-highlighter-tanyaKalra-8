let elements = document.getElementsByTagName("strong")
function highlight() {
    //Write your code here
	for (let i = 0; i < elements.length; i++) {
		elements[i].style.color = "green";
	}
}


function return_normal() {
    //Write your code here
	for (let i = 0; i < elements.length; i++) {
		elements[i].style.color = "";
	}
}
