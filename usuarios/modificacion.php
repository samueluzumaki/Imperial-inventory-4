<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  require("../conexion.php");
  $con=retornarConexion();
  
  $hashed_password = password_hash($params->Password, PASSWORD_DEFAULT);

  mysqli_query($con, "UPDATE usuarios set 
  Nom_usuario='$params->Nom_usuario',
  Ape_usuario='$params->Ape_usuario',
  Rol ='$params->Rol', 
  Password ='$hashed_password'
  where idUsuarios='$params->idUsuarios'");

    
  
  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'datos modificados';

  header('Content-Type: application/json');
  echo json_encode($response);  
?>