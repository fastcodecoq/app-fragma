var width_land = undefined;
var width_portrait = undefined;

function controller(){


 var $t = controller.prototype; 


  $t.slider = function(){


       $t.slider.prototype.toLeft = function(e){

            e.preventDefault();
            
            var li = $(this);
            var left = $(this).width();
            var uLeft = (!li.parents("ul:first").css("marginLeft")) ? 0 : parseInt(li.parents("ul:first").css("margin-left"));
                 left = uLeft + left; 

            if(parseInt(li.attr("id")) != 0)
            li.parents("ul:first").css({ marginLeft : left + "px"});            


       }


       $t.slider.prototype.toRight = function(e){

             e.preventDefault();
             
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

  	      h = h - ($(".fixed-bottom").height() + $("header").height());  

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
                     swipeUp : function(e){ e.preventDefault(); $(this).addClass("color"); },
                     swipeDown : function(e){ e.preventDefault(); $(this).removeClass("color"); }
                      });
      
      

  }



  $t.render_menu = function( vars , callback){
    
  		 
       var w = $("header").width();


  		 wref = { w : 474 , val : 2.3 };

       if(vars instanceof Object)
        $.extend(wref, vars);

  		 var f = (w*wref.val) / wref.w;
    		


       if( w > 490 && w < 600)
        w = f*1.1;
       else if( w >= 600 && w <768)
        w = f*1.2;        
  		 else if(w >= 768 && w < 900)
  		 	w = f*1.45;
  		 else if(w >= 900 &&  w < 1200)
  		 	w = f*1.7;
  		 else if(w >= 1200)
  		 	w = f*1.86; 
       else if( w >= 366 && w < 430) 
        w = f/1.7;
       else if( w >= 430 && w <= 490) 
        w = f*.9;
       else if( w > 320 && w < 360)
        w = f/4.3;
      else if( w >= 360 && w < 366)
        w = f/2.4;
       else if( w > 120 && w <= 320)
        w = f/4.8;
        		 

      if(callback instanceof Function)
        callback(w);
      else{


  		
      $("#menu li").css({marginLeft : w + "em"});
      $("#menu li").show();

       }



  }


  $t.live_render = function(){



  		$(window).on("resize", function(e){

          e.preventDefault();
          e.stopPropagation();


          $("#menu li").css({marginLeft : 0 });


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
    $t.swipeOn();
    $t.render_events();  

 }


//  phonegap ------------------------

$t.ini_listeners = function(){

    $("[data-option]").tapOrClik(options_controller);
    $(document).on("viewChanged", viewChanged)
  

}


var viewChanged = function(e){

   var h = $(window).height() - ( $("header").height() + $("footer").height() ) + "px";
   $("#cont-wrapper").css({height: h });

}

var prevents = function(e){
      e.stopPropagation();
      e.preventDefault();
}



$.fn.cmd = function(){ return $(this).attr("data-cmd"); }

var options_controller = function(_this){

       var cmd = _this.cmd();

       switch(cmd){

          case "cam":

             camera_controller(_this);

          break;

           case "home":

             window.route("home");

          break;

          case "map":

             window.route("map", renderMap);

          break;


          case "fb-connect":

            fb_login();

          break;

       }

}


var renderMap = function(){
  
  //require("//maps.googleapis.com/maps/api/js?sensor=true", "body");
        
        var mapOptions = {
          zoom: 17,
          center: new google.maps.LatLng(-34.397, 150.644),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
        
        
        window.MAP = new google.maps.Map(document.getElementById('map'),
        mapOptions);

}

var camera_controller = function(el){
      
     // if(!window.pc)
      navigator.camera.getPicture( picTaked, null, { quality: 50, destinationType: Camera.DestinationType.FILE_URI } );
      /*else{
        window.pic = "assets/img/logo.png";
        window.route("editor");
         }*/

}


var picTaked = function(rs){
    
    window.pic = rs;
    window.route("editor");

}


 var fb_login = function() {


                FB.login( null ,{ scope: ["email", "publish_stream"] });

            }

// ---------------------------  phonegap


  $t.ini = function(){

          	  
  	  $t.ini_render();
      $t.ini_listeners();

  	  console.log("Controller iniciado");


    }


}



window.con = new controller();
          $(con.ini);




var flag = false;
$.fn.tapOrClik = function(action){

  var clickOrTap = ('ontouchstart' in window ) ? "touchstart" : "click";

  $(this).live(clickOrTap, function(e){

    e.stopPropagation();
    e.preventDefault();
  
  if (!flag) {
    flag = true;
  
    setTimeout(function(){ flag = false; }, 100);


     action($(this));

  }

  return false

});

}