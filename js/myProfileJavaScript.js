window.onload = function(){

	var btnmenu = document.getElementsByClassName("btn-menu");
	var menu = document.getElementsByClassName("menu");
	btnclose = document.getElementsByClassName("btn-close");
	var a = document.getElementsByTagName("a");

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

}