<?php
 header('application/x-www-form-urlencoded; charset=utf-8');
 header('Access-Control-Allow-Origin: *');
 header('Access-Control-Allow-Methods:*');
 $servername = "192.168.100.19";
 $database = "soatividades";
 $username = "Acesso";
 $password = "nostadramus1";
 $conn = mysqli_connect($servername, $username, $password, $database);
 $steps = '';
 $rest_json = file_get_contents("php://input");
 $_POST = json_decode(file_get_contents('php://input'), true);
 
 if($conn){
        $query = "Insert into atividade(descricao,matRel) Values ('".$_POST['descricao']."' , '".$_POST['id']."');";
        if($result = mysqli_query($conn,$query)){
            $steps = array('Sucesso'=>1); 
        }else{  
            $steps = array('erro'=>$query); 
        }
        mysqli_close($conn);
 }else{
    $steps = array('erro'=>mysqli_error($conn)); 
 }
 echo Json_encode($steps);

?>