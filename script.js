	let resultP1 = document.getElementById("resultP1");
	let seemore1=document.getElementById("seemore1");
	let seeless1=document.getElementById("seeless1");
	let resultP2 = document.getElementById("resultP2");
	let seemore2=document.getElementById("seemore2");
	let seeless2=document.getElementById("seeless2");

function seeMore1(){
	resultP1.classList.remove("hidden");
	seeless1.classList.remove("hidden");
	seemore1.classList.add("hidden");
}
function seeLess1(){
	resultP1.classList.add("hidden");
	seeless1.classList.add("hidden");
	seemore1.classList.remove("hidden");
	
}
function seeMore2(){
	resultP2.classList.remove("hidden");
	seeless2.classList.remove("hidden");
	seemore2.classList.add("hidden");
}
function seeLess2(){
	resultP2.classList.add("hidden");
	seeless2.classList.add("hidden");
	seemore2.classList.remove("hidden");
}
function showResults(){
	let resultDiv=document.getElementById("resultDiv");
	let question1=document.getElementById("question1").value;
	let question2=document.getElementById("question2").value;
	let option1=document.getElementById("option1").value;
	let option2=document.getElementById("option2").value;
	resultDiv.innerHTML="<h3>Quiz Results</h3>";
	 if(question1==option1 && question2==option2){
		 resultDiv.innerHTML+="<p>Question 1 - Correct</p><p>Question 2 - Correct</p><p>Score: 2/2</p>";
	 }
	 else if(question1==option1 && question2 !=option2){
		  resultDiv.innerHTML+="<p>Question 1 - Correct</p><p>Question 2 - Incorrect</p><p>Score: 1/2</p>";
	 }
	  else if(question1 !=option1 && question2 ==option2){
		  resultDiv.innerHTML+="<p>Question 1 - Incorrect</p><p>Question 2 - Correct</p><p>Score: 1/2</p>";
	 }
	 else{
		  resultDiv.innerHTML+="<p>Question 1 - Incorrect</p><p>Question 2 - Incorrect</p><p>Score: 0/2</p>";
	 }
	resultDiv.classList.remove("hidden");
}
var slideIndex = 0;
slideshow();

function slideshow() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(slideshow, 10000); 
}

