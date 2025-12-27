<?php 
include_once("../db_config.php");

// echo "Hello";
$data = file_get_contents("php://input");
$data= json_decode($data);
print_r($data);
echo $data->title;
echo $data->description;
?>