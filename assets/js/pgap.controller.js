document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {

          var pictureSource=navigator.camera.PictureSourceType;
          var destinationType=navigator.camera.DestinationType;        
                
          
         try{
          
             window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, fil_ok("File"), null);

           
           }
           catch(e)
           {

            alert("error obteniendo sistema de archivos local");

           }


           try{

                 navigator.accelerometer.getCurrentAcceleration(fil_ok("Acelerometro"), null);

           }
           catch(e){

               alert("No hay aceletometro");

           }
           

         ini_pgap();      
         alert(typeof (pictureSource))
        
        }



//-------------- iniciado 


function ini_pgap(){

    alert("phonegap listo");

    shake.startWatch(shake);

}



function shake(){

  alert("you shake me");

}




function fil_ok( what ){

             console.log("ok "+ what)

 }