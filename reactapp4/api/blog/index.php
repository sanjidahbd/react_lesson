<?php 
include_once("../db_config.php");
$rawdata=$db->query("SELECT* From blogs");
$output=[];
while( $row=$rawdata->fetch_object()){
    $output[]=$row;

}
echo json_encode($output);


?>