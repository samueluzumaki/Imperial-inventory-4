
<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  require("../conexion.php");
  $con=retornarConexion();
  mysqli_query($con, "UPDATE inventario set 
  idInventario='$params->idInventario',
  Id_Productos='$params->Id_Productos',
  Entradas='$params->Entradas',
  Salidas='$params->Salidas',
  Saldo='$params->Saldo'
  where idInventario='$params->idInventario'");

    
  
  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'datos modificados';

  header('Content-Type: application/json');
  echo json_encode($response);  
?>
