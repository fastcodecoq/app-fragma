<?php

function get_vista( ){
   


  if(!isset($_GET["v"]))
      return "home.php";
   else
     switch ($_GET["v"]) {
     
              case 'productos':        
              
              return  "productos.php";
              
              break;

              case 'como_comprar':

              return "_como_comprar.php";

              break;

              case 'contacto':

              return "_contacto.php";

              break;

              case 'producto':

              return "producto.php?id=" . $_GET["id"] ;

              break;

              case 'summary':

              return "summary.html" ;

              break;


              case 'order':

              return "order.php" ;

              break;

            
              case 'checkout':

              return "checkout.html" ;

              break;

              case 'thanks':

              return "thanks.html" ;

              break;



              
              default:              

              return "home.php";

              break;



    }


  }