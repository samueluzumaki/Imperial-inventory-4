<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  require("../conexion.php");
  $con=retornarConexion();
  
  mysqli_query($con, "UPDATE pedido set Nombre_pedido='$params->Nombre_pedido',
  Cantidad='$params->Cantidad',
  idProveedor='$params->idProveedor',
  id_Producto='$params->id_Producto'
  where idPedido='$params->idPedido'");


  
  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'datos modificados';

  header('Content-Type: application/json');
  echo json_encode($response);  
?>

