<?php 
    require 'db_connection.php';

    $json = file_get_contents("php://input");
    $abc = json_decode($json);

    if (
        isset($abc->user_name) && !empty($abc->user_name) &&
        isset($abc->mobile) && !empty($abc->mobile) &&
        isset($abc->course_name) && !empty($abc->course_name) &&
        isset($abc->price) && !empty($abc->price)
    ) {
        $user_name = $abc->user_name;
        $mobile = $abc->mobile;
        $course_name = $abc->course_name;
        $price = $abc->price;

        $sql = "INSERT INTO enrolls VALUES (NULL, '$user_name', '$mobile', '$course_name', '$price')";
        $db->query($sql);

        if ($db->affected_rows > 0) {
            echo json_encode(["msg" => "Successfully Inserted"]);
        } else {
            echo json_encode(["msg" => "Problem"]);
        }
    } else {
        echo json_encode(["msg" => "Empty Not allowed"]);
    }
?>
