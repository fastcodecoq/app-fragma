document.addEventListener("deviceready", onDeviceReady, false);



function onDeviceReady() {

          window.pictureSource=navigator.camera.PictureSourceType;
          window.destinationType=navigator.camera.DestinationType;        
                
          
         try{
          
             window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, fil_ok("File"), null);

           
           }
           catch(e)
           {

            console.log("error obteniendo sistema de archivos local");

           }


           try {

                                      
                FB.init({ appId: "1437152043163607", nativeInterface: CDV.FB,  status: true, useCachedDialogs: false });         
                                      
           } catch (e) {
                
                 console.log(e);
                                      
             }


          try{

                 if(navigator.accelerometer instanceof Object)
                  {
                    ini_pgap();
                    console.log("Acelerometro on");
                  }

           }
           catch(e){

               console.log("Dispositivo sin Acelerometro, no se podrá detectar shake");

           } 





var loginStatusChange = function(response){ 

    alert(JSON.stringify(response))
  
   if (response.authResponse && window.localStorage.logged) {
        
                  

          if(window.localStorage.token){
              alert(window.localStorage.token + " | " + response.authResponse.accessToken);
              window.localStorage.token = response.authResponse.accessToken;    
            }else
              window.localStorage.token = response.authResponse.accessToken;    


          if(response.authResponse.userID && window.localStorage.uid)  
             {
              alert(window.localStorage.uid + " " + response.authResponse.userID);              
              window.localStorage.uid = response.authResponse.userID;
            }else if(response.authResponse.userID)
              window.localStorage.uid = response.authResponse.userID;



          

          window.route("home");
  
    } else {
  

          window.route("login");
  
     }
  

}


var login = function(){ window.localStorage.logged = true; }

var logout = function(){ window.route("login"); window.localStorage.logged = false; }

 FB.Event.subscribe('auth.login', login);
 FB.Event.subscribe('auth.logout', logout);
 FB.Event.subscribe('auth.statusChange', loginStatusChange);      

 FB.getLoginStatus(loginStatusChange); 
                            

        
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