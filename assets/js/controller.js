
function controller(){


 var $t = controller.prototype; 


  $t.slider = function(){


       $t.slider.prototype.toLeft = function(){
            
            var li = $(this);
            var left = $(this).width();
            var uLeft = (!li.parents("ul:first").css("marginLeft")) ? 0 : parseInt(li.parents("ul:first").css("margin-left"));
                 left = uLeft + left; 

            if(parseInt(li.attr("id")) != 0)
            li.parents("ul:first").css({ marginLeft : left + "px"});            


       }


       $t.slider.prototype.toRight = function(){
             
             var li = $(this);          
             var left = $(this).width();
             var uLeft = (!li.parents("ul:first").css("marginLeft")) ? 0 : parseInt(li.parents("ul:first").css("margin-left"));
                 left = uLeft - left; 
           
            if(parseInt(li.attr("id")) != (li.parents("ul:first").find("li").length - 1 ))
            li.parents("ul:first").css({ marginLeft : left + "px"});            

       }

  }


  $t.render_sliders = function(){

  	  var i = 0;
  	  var h = $(window).height();  	  
      var bars = $(".fixed-bottom").height() + $("header").height();

  	      h = h - bars ;  

          $(".events").css({"-webkit-transition" : "all .5s", "transition" : "all .5s"})	       

  	      $(".events li").each( function(){

  	      		  $(this).css({ height : h + "px", overflow : "hidden"});
                $(this).attr("id",i);

                i++;

  	      });

          $(".events").css({marginLeft:"0"})

  }
 
 

  $t.swipeOn = function(){

       var slider = new $t.slider;

      $(".events li").swipe({ 
                     swipeRight : slider.toLeft , 
                     swipeLeft: slider.toRight , 
                     swipeUp : function(e){ e.preventDefault(); },
                     swipeDown : function(e){ e.preventDefault(); }
                      });

          $(".fixed-bottom").swipe({  
                     swipeUp : function(e){ e.preventDefault(); alert("hey"); $(this).addClass("color"); },
                     swipeDown : function(e){ e.preventDefault(); $(this).removeClass("color"); }
                      });
      
      

  }



  $t.render_menu = function( vars , callback){

      $("#menu li").hide();      
  		 
       var w = $(window).width();


  		 wref = { w : 474 , val : 2.3 };

       if(vars instanceof Object)
        $.extend(wref, vars);

  		 var f = (w*wref.val) / wref.w;
  		  
     


       if( w >= 490 && w < 600)
        w = f*1.1;
       else if( w >= 600 && w <768)
        w = f*1.2;        
  		 else if(w >= 768 && w < 900)
  		 	w = f*1.45;
  		 else if(w >= 900 &&  w < 1200)
  		 	w = f*1.7;
  		 else if(w >= 1200)
  		 	w = f*1.86; 
       else if( w > 360 && w < 430) 
        w = f/1.7;
       else if( w >= 430 && w < 490) 
        w = f;
       else if( w <= 360 && w > 320)
        w = f/2.5;
       else if( w > 120 && w <= 320)
        w = f/4.1;
        		 

      if(callback instanceof Function)
        callback(w);
      else{
  		
      $("#menu li").css({marginLeft : w + "em"});
      $("#menu li").show();

       }



  }


  $t.live_render = function(){


  		$(window).on("resize", function(){

  		  	$t.render_sliders();
 	        $t.render_menu();
 	        $t.render_events();

  		

  		});


  }

  $t.render_events = function(){

  	var li = $(".events li");
  	var wli = $(".events-slider").width() + 15;
  	var nli = li.length;
  	var iw = wli;

  	var w = nli * wli;

  	$(".events").css({ width : w + "px"});
  	$(".events li").css({ width : iw + "px"});


  }


 $t.ini_render = function(){

 	  $t.render_sliders();
 	  $t.live_render();
 	  $t.render_menu();
 	  $t.render_events();
    $t.swipeOn();
 

 }


//  phonegap ------------------------






// ---------------------------  phonegap


  $t.ini = function(){

          	  
  	  $t.ini_render();

  	  console.log("Controller iniciado");


    }


}



var con = new controller();
          $(con.ini);




