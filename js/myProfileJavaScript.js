window.onload = function(){

	var btnmenu = document.getElementsByClassName("btn-menu");
	var menu = document.getElementsByClassName("menu");
	btnclose = document.getElementsByClassName("btn-close");

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


}