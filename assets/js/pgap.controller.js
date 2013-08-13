document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {

          pictureSource=navigator.camera.PictureSourceType;
          destinationType=navigator.camera.DestinationType;

          function fil_ok(){

             console.log("ok")

          }

          
         try{
          
             window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, fil_ok, null);
           
           }
           catch(e)
           {

            alert("error obteniendo sistema de archivos local");

           }
           

        }


//-------------- iniciado 