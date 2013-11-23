window.route = function(where){
		

	   switch(where){

	      case "home":

	       var data = {};

           var view = new EJS({url:"views/home.ejs"})
                   .render(data);

           data.view = view;

           var layout = new EJS({url:"views/layout.ejs"}).render(data);

           document.getElementById("content-wrapper").innerHTML = layout;

           window.con.ini_render();


	      break;


	      case "login":

	           var layout = new EJS({url:"views/login.ejs"}).render();

               document.getElementById("content-wrapper").innerHTML = layout;

	      break;

	   }
	

}