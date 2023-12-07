
<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  require("../conexion.php");
  $con=retornarConexion();
  
  mysqli_query($con, "UPDATE proveedor set Nombre='$params->Nombre',
  Telefono='$params->Telefono',
  Direccion='$params->Direccion',
  Email='$params->Email',
  id_Producto='$params->id_Producto'
  where idProveedor='$params->idProveedor'");

    
  
  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'datos modificados';

  header('Content-Type: application/json');
  echo json_encode($response);  
?>

