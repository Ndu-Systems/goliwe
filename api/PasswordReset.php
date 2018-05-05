<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));
            
			  $Password     = $data->Password;              
			  $Email     = $data->Email;            						
					
$result = $conn->prepare("UPDATE  users  SET	 
                 Password =?
				WHERE Email=?"); 
if($result->execute(array($password,$email))){
		echo 1;
}				
				
?>


