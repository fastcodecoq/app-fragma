document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {

          pictureSource=navigator.camera.PictureSourceType;
          destinationType=navigator.camera.DestinationType;

          function fil_ok(){

             alert("ok")

          }


          ini();

          
         try{
          
             window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, fil_ok, null);
           
           }
           catch(e)
           {

            alert("error obteniendo sistema de archivos local");

           }
           

        }


//-------------- iniciado 



function ini(){

     shake.startWatch(shake);

}



function shake(){

  alert("you shake me");

}