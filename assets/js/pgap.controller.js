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

               alert("Dispositivo sin Acelerometro, no se podrá detectar shake");

           }
           

         ini_pgap();      
         alert(typeof (pictureSource))
        
        }



//-------------- iniciado 


function ini_pgap(){

    shake.startWatch(shake);

}



function shake(){

  alert("you shake me");

}




function fil_ok( what ){

             console.log("ok "+ what)

 }