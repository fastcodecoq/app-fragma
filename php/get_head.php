<?php 


function get_head(){
	
	if($_GET)
	$vista = get_vista($_GET["v"]);
    else
    $vista = "home.php";

 $vars = array();
	
 if(preg_match("/^.+[.].+\?/i", $vista)) 
   {

      $temp = explode("?",$vista);
      $vista = $temp[0];

      $temp = explode("=",$temp[1]);

      $vars["id"] = $temp[1];

   } 

   $dev_resc = "";

   $theme_dir = theme_dir;
   


   if(isset($_COOKIE["dev"])) 
           $dev_resc = '<link rel="stylesheet/less"  href="/panel/less/medios.less" />
                <link rel="stylesheet/less"  href="/panel/less/clear-medios.less" />'; 



    switch($vista){


       case "producto.php":

        $id = $vars["id"];

        $con = new Mongo();
        $bd = $con->scholes;
        $_id = new MongoId($id);

        $col = $bd->productos;

        $p = $col->findOne(array( "_id" => $_id));

        $f = explode(";",$p["fotos"]);
        $f = $f[0];

        return '<meta property="og:title" content="'.$p["nombre"].'"/>    
			 <meta property="og:url" content="http://scholes-store.com/producto?id=' . $vars["id"] . '"/>
			<meta property="og:type" content="website" />
			<meta property="og:image" content="http://scholes-store.com/t/250/'.$f.'"/>
			<meta property="og:site_name" content="'.$p["nombre"].'"/>    
			<meta property="og:description"
			content="' . $p["descripcion"] .'"/> 
			
			<title>'. $p["nombre"] .'</title>  
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">  


  <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
  <link rel="stylesheet" type="text/css" href="css/bootstrap-responsive.css" />
  <link rel="stylesheet" type="text/css" href="fontAwesome/css/font-awesome.css" /> 



  <link rel="stylesheet" type="text/css" href="css/ui-lightness/jquery-ui-1.10.3.custom.min.css" /> 
  <link rel="stylesheet/less"  href="less/estilo.less" />
  <link rel="stylesheet" type="text/css" href="http://gomosoft.com/cdn/css/editor.css" />
          '.$dev_resc.'

  
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
  <script src="js/less.js"></script> 
  <script src="js/phpjs.js"></script>  
   ';

       break;


       default:

			return '<meta property="og:title" content="Scholes Store"/>    
			        <meta property="og:url" content="http://scholes-store.com"/>
			<meta property="og:type" content="website" />
			<meta property="og:image" content="http://scholes-store.com/img/logo.png"/>
			<meta property="og:site_name" content="Scholes Store - Regalos en Cartagena"/>    
			<meta property="og:description"
			content=" Regalos en cartagena, Sorprende a esa persona que tanto quieres enviándole un regalo a la puerta de su casa u oficina. Con SCHOLES STORE puedes darle un detalle a ese ser querido en cualquier fecha especial a cualquier hora del día, solo comunícate con nosotros para decirnos que quieres regalar y a donde debemos llevarlo. "/> 
			
			<title>Scholes Store - Regalos en Cartagena</title> 
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">  


  <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
  <link rel="stylesheet" type="text/css" href="css/bootstrap-responsive.css" />
  <link rel="stylesheet" type="text/css" href="fontAwesome/css/font-awesome.css" /> 



  <link rel="stylesheet" type="text/css" href="css/ui-lightness/jquery-ui-1.10.3.custom.min.css" /> 
  <link rel="stylesheet/less"  href="less/estilo.less" />
  <link rel="stylesheet" type="text/css" href="http://gomosoft.com/cdn/css/editor.css" />
              
               '.$dev_resc.'                 

  
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
  <script src="js/less.js"></script>  
  <script src="js/phpjs.js"></script>  ';

       break;

    }



}