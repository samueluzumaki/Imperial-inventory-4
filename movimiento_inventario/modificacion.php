
<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  require("../conexion.php");
  $con=retornarConexion();
  
  mysqli_query($con, "UPDATE movimiento_inventario set 
  Fecha_movimiento='$params->Fecha_movimiento',
  Tipo_movimiento='$params->Tipo_movimiento',
  Id_producto='$params->Id_producto',
  Cantidad='$params->Cantidad',
  Factura='$params->Factura',
  Orden_pedido='$params->Orden_pedido',
  Venta_producto='$params->Venta_producto',
  Id_Usuarios='$params->Id_Usuarios'
  where id_Movimiento_inventario='$params->id_Movimiento_inventario'");

  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'datos modificados';

  header('Content-Type: application/json');
  echo json_encode($response);  
?>

