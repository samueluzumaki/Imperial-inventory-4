<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  require("../conexion.php");
  $con=retornarConexion();
  
  mysqli_query($con, "UPDATE detalle_venta set 
  Fecha_venta='$params->Fecha_venta',
  Cantidad='$params->Cantidad',
  Nombre='$params->Nombre',
  idProducto='$params->idProducto'
  where idDetalle_venta='$params->idDetalle_venta'");	


  
  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'datos modificados';

  header('Content-Type: application/json');
  echo json_encode($response);  
?>

