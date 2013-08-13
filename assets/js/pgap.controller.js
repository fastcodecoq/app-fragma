document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {

          pictureSource=navigator.camera.PictureSourceType;
          destinationType=navigator.camera.DestinationType;        
          

          
         try{
          
             window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, ini, null);
           
           }
           catch(e)
           {

            alert("error obteniendo sistema de archivos local");

           }
           

           ini();

        
        }



//-------------- iniciado 



function ini(){

  alert("hola")

     shake.startWatch(shake);

}



function shake(){

  alert("you shake me");

}