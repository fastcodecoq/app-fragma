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
                      
                        alert(JSON.stringify(response))
                        
                        if (response.authResponse && response.status === "connected") {
                        
                          FB.api("/me", function(rs){
                            alert(JSON.parse(rs));
                          });
  
                        if(window.localStorage.token){                        
                        window.localStorage.token = response.authResponse.accessToken;    
                        }else
                        window.localStorage.token = response.authResponse.accessToken;    
                        
                        
                        if(response.authResponse.userID && window.localStorage.uid)  
                        {                            
                        window.localStorage.uid = response.authResponse.userID;
                        }else if(response.authResponse.userID)
                        window.localStorage.uid = response.authResponse.userID;
                        
                        console.log(response);                                            
                        
                        window.route("home");
                        
                        } else {
                        
                        
                        window.route("login");
                        
                        }
                    
                    
                    }


var login = function(response){ alert("loged + " + JSON.stringify(response));  }

var logout = function(){ window.route("login"); window.localStorage.removeItem("token"); window.localStorage.removeItem("uid"); }

 FB.Event.subscribe('auth.login', login);
 FB.Event.subscribe('auth.logout', logout);
 FB.Event.subscribe('auth.statusChange', loginStatusChange);      
 FB.getLoginStatus(loginStatusChange);
                                      
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