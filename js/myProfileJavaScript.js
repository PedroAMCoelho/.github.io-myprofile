window.onload = function(){

	var btnmenu = document.getElementsByClassName("btn-menu");
	var menu = document.getElementsByClassName("menu");
	btnclose = document.getElementsByClassName("btn-close");
	var a = document.getElementsByTagName("a");
	
	var skillsContainer = document.getElementById("skills");
	var li = document.getElementsByTagName("li");
	var lihtml = document.getElementsByClassName("skills-chart");

	btnmenu[0].addEventListener("click",
		function mostrarMenu() {

			if(menu[0].style.visibility=="visible") 
			{  
				menu[0].style.visibility = "hidden";
			}    
			else {  
				menu[0].style.visibility = "visible";
				menu[0].style.zIndex = 1;
				menu[0].style.height = "100%";
				menu[0].style.transition = ".5s linear";  
			}
					});

	btnclose[0].addEventListener("click",
		function fecharMenu() {

			if(menu[0].style.visibility=="visible") 
			{  
				menu[0].style.visibility = "hidden";
				menu[0].style.zIndex = -1;
				menu[0].style.height = "13%"
				menu[0].style.transition = "0s";  
			}    
			else {  
				menu[0].style.visibility = "visible";  
			}
		});

window.onscroll = function beginAnimation(){

	if(window.pageYOffset > 1000){

		for(var i=4;i<=16; i++){
				if(lihtml[0].style.animationPlayState=="paused") 
				{  
					li[i].style.animationPlayState = "running";  
				}    
				else {  
					li[i].style.animationPlayState = "running";  
				}
	}

};
}

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCzV2Dh1_bzzIXgORnmLhr64fh7D5OKzYg",
    authDomain: "myprofileapp-179b8.firebaseapp.com",
    databaseURL: "https://myprofileapp-179b8.firebaseio.com",
    projectId: "myprofileapp-179b8",
    storageBucket: "myprofileapp-179b8.appspot.com",
    messagingSenderId: "863164305036"
  };
  firebase.initializeApp(config);

var txtAreaMsg = document.getElementById("txtAreaMsg");
var submitBtn = document.getElementById("submitBtn");
var userNameInput = document.getElementById("userNameInput");
var userEmailInput = document.getElementById("userEmailInput");
var formId = document.getElementById("formId");

formId.addEventListener('submit',
		function submitClick(evt) {

			evt.preventDefault();

			var firebaseRef = firebase.database().ref(); //database root

			var messageText = txtAreaMsg.value;
			var userName = userNameInput.value;
			var userEmail = userEmailInput.value;
			var regExUserEmail = userEmail.replace(/[\.-]/g,'');

			//firebaseRef.child("Text").set(messageText); // unique id - "Text"
			//firebaseRef.push().set(messageText); //create random id
			firebaseRef.child(userName).child(regExUserEmail).set(messageText);
			formId.reset();
		});


}

/*
  //digitar no firebase e aparecer no site

var holaMundo = document.getElementById('holamundo');
var dbRef = firebase.database().ref().child('text');
dbRef.on('value', snap => holaMundo.innerText = snap.val());
*/

/*
//tst

var h = document.querySelector('textarea');
var valor = document.getElementsByTagName("textarea").value;

var myRef = new Firebase ('https://myprofileapp-179b8.firebaseio.com/data');

function funct1(event){

myRef.push({valor});
event.preventDefault;
}

var submit = document.getElementsByTagName('button')[4];

submit.onclick = funct1; */



/*skillsContainer.addEventListener("mouseover",
		function startSkillsAnimation(){

			for(var i=4;i<=16; i++){
				if(li[4].style.animationPlayState=="paused") 
				{  
					li[i].style.animationPlayState = "running";  
				}    
				else {  
					li[i].style.animationPlayState = "running";  
				} 

			}}); */