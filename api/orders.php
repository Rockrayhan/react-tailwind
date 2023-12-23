<?php 
    
    require 'db_connection.php';

    $abc = json_decode(file_get_contents("php://input"));

    if(isset($abc->data->user_name) && !empty($abc->data->user_name) && isset($abc->data->mobile) && !empty($abc->data->mobile) && isset($abc->data->course_name) && !empty($abc->data->course_name)   && isset($abc->data->price) && !empty($abc->data->price)){
        $user_name =  $abc->data->user_name;
        $mobile =  $abc->data->mobile;
        $course_name =  $abc->data->course_name;
        $price =  $abc->data->price;

        $sql = "INSERT INTO enrolls
        VALUES(NULL, '$user_name', '$mobile', '$course_name', '$price')";
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