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


           try {

                                      
                FB.init({ appId: "1437152043163607", nativeInterface: CDV.FB, useCachedDialogs: false });
                alert("FB iniciado");
                                      
           } catch (e) {
                
                 alert(e);
                                      
             }


          try{

                 if(navigator.accelerometer)
                  {
                    ini_pgap();
                    alert("Acelerometro on");
                  }

           }
           catch(e){

               alert("Dispositivo sin Acelerometro, no se podrá detectar shake");

           } 
                    
         alert(JSON.stringify(FB));            

        
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




function uploadPhoto(imageUri) {

        var url = "http://fragmaclub.com/uploads";

        alert("imageUri")

        var params = new Object();
        params.otherinfo =  {

             user: "demo",
             text: "some text demo",             

        };  

        var options = new FileUploadOptions();
        options.fileKey = "file";
        options.fileName = imageUri.substr(imageUri.lastIndexOf('/')+1);
        options.mimeType = "image/jpeg";
        options.params = params;
        options.chunkedMode = false;

        var ft = new FileTransfer();
        ft.upload(imageUri, url, successCallback, errorCallback, options);
     
      } 