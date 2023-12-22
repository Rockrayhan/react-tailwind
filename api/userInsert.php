<?php 
    
    require 'db_connection.php';

    $abc = json_decode(file_get_contents("php://input"));

    if(isset($abc->data->name) && !empty($abc->data->name) && isset($abc->data->role) && !empty($abc->data->role) && isset($abc->data->comment) && !empty($abc->data->comment)  ){
        $name =  $abc->data->name;
        $role =  $abc->data->role;
        $comment =  $abc->data->comment;

        $sql = "INSERT INTO testimonials
        VALUES(NULL, '$name', '$role', '$comment')";
    $db->query($sql);

    if($db->affected_rows>0){
        echo json_encode(["msg"=>"Successfully Inserted"]) ;
    } else {
        echo json_encode(["msg"=>"Problem"]) ;
    }
    } else {
        echo json_encode(["msg"=>"Empty Not allowed"]) ;
    }






?>