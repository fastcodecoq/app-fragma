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

                    var loginStatusChange = function(response){ 
                      
        
                        
                        if (response.authResponse && response.authResponse.userId != "null"  && response.status === "connected") {
                        
                          FB.api("/me", function(rs){
                            window.userInfo = rs;
                            console.log(rs);
                          });
  
                        if(window.localStorage.token){                        
                        window.localStorage.token = response.authResponse.accessToken;    
                        }else
                        window.localStorage.token = response.authResponse.accessToken;    
                        
                        
                        if(response.authResponse.userId&& window.localStorage.uid)  
                        {                            
                        window.localStorage.uid = response.authResponse.userId;
                        }else if(response.authResponse.userId)
                        window.localStorage.uid = response.authResponse.userId;
                        
                        console.log(response);                                            
                        
                        window.route("home");
                        
                        } else {
                        
                        
                        window.route("login");
                        
                        }
                    
                    
                    }


var login = function(response){   }

var logout = function(){ window.route("login"); window.localStorage.removeItem("token"); window.localStorage.removeItem("uid"); }

 FB.Event.subscribe('auth.login', login);
 FB.Event.subscribe('auth.logout', logout);
 FB.Event.subscribe('auth.statusChange', loginStatusChange);      
 FB.getLoginStatus(loginStatusChange);

 window.route("home");
                                      
           } catch (e) {
                
                 console.log(e);
                                      
             }


          try{

               
                    ini_pgap();
                    console.log("Acelerometro on");
                  

           }
           catch(e){

               console.log("Dispositivo sin Acelerometro, no se podrá detectar shake");

           } 


           try{
            
            window.plugins.BackgroundService.callService('callService', callServiceSuccessCallBack, callServiceFailCallBack);

            var callServiceSuccessCallBack = function(e) {
            console.log("Success");
            }
            
            var callServiceFailCallBack = function(f) {
            console.log("Failure");
            }

           }catch(e){
             console.log("Error", e);
           }



                            

        
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