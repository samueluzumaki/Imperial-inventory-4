<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("../conexion.php");
  $con=retornarConexion();

  $registros=mysqli_query($con,"select id_Movimiento_inventario,Fecha_movimiento,Tipo_movimiento,Id_producto,Cantidad,Factura,Orden_pedido,Venta_producto,Id_Usuarios from movimiento_inventario");
  $vec=[];  
  while ($reg=mysqli_fetch_array($registros))  
  {
    $vec[]=$reg;
  }
  
  $cad=json_encode($vec);
  echo $cad;
  header('Content-Type: application/json');
?>
