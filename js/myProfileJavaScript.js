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

			if(menu[0].style.display=="block") 
			{  
				menu[0].style.display = "none";  
			}    
			else {  
				menu[0].style.display = "block";  
			}
					});

	btnclose[0].addEventListener("click",
		function fecharMenu() {

			if(menu[0].style.display=="block") 
			{  
				menu[0].style.display = "none";  
			}    
			else {  
				menu[0].style.display = "block";  
			}
		});

	for(var i=2;i<=5; i++){
	a[i].addEventListener("click", 
		function closeMenuToSee(){
			if(menu[0].style.display=="block") 
			{  
				menu[0].style.display = "none";  
			}    
			else {  
				menu[0].style.display = "block";  
			}
					
		})};




window.onscroll = function beginAnimation(){

	if(window.pageYOffset > 1400){

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
}


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