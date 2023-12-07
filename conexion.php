<?php
function retornarConexion() {
  $con=mysqli_connect("localhost","root","","imperial_inventory");
  return $con;
}
?>