<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  require("../conexion.php");
  $con=retornarConexion();
  

  mysqli_query($con,"insert into movimiento_inventario(id_Movimiento_inventario,Fecha_movimiento,Tipo_movimiento,Id_producto,Cantidad,Factura,Orden_pedido,Venta_producto,Id_Usuarios) values
                  ('$params->id_Movimiento_inventario','$params->Fecha_movimiento','$params->Tipo_movimiento','$params->Id_producto' , '$params->Cantidad','$params->Factura','$params->Orden_pedido','$params->Venta_producto','$params->Id_Usuarios' )");
    
  
  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'datos grabados';

  header('Content-Type: application/json');
  echo json_encode($response);  
?>	

