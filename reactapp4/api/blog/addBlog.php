<?php 
include_once("../db_config.php");

// echo "Hello";
$data = file_get_contents("php://input");
$data= json_decode($data);
// print_r($data);
$title= $data->title;
$description= $data->description;
if($title!='' && $description!=''){
    $db->query("INSERT INTO blogs VALUES (NULL,'$title','$description')");

}


if($db->affected_rows){
    echo "Sucessfully Inserted";
}
?>