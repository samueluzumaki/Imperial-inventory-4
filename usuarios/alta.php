<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  require("../conexion.php");
  $con=retornarConexion();
  

  $hashed_password = password_hash($params->Password, PASSWORD_DEFAULT);

  mysqli_query($con, "INSERT INTO usuarios (idUsuarios, Nom_usuario, Ape_usuario, Rol, Password) VALUES
                   ('$params->idUsuarios','$params->Nom_usuario','$params->Ape_usuario','$params->Rol','$hashed_password')");
    
  
  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'datos grabados';

  header('Content-Type: application/json');
  echo json_encode($response);  
?>

