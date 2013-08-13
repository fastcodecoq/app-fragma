document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {

          pictureSource=navigator.camera.PictureSourceType;
          destinationType=navigator.camera.DestinationType;        
                
          
         try{
          
             window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, fil_ok, null);
           
           }
           catch(e)
           {

            alert("error obteniendo sistema de archivos local");

           }
           

         ini_pgap();

        
        }



//-------------- iniciado 


function ini_pgap(){

    alert("phonegap listo");

    shake.startWatch(shake);

}



function shake(){

  alert("you shake me");

}




function fil_ok(){

             console.log("ok")

 }