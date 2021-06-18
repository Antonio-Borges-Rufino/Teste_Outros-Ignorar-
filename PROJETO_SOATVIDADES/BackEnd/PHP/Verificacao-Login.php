<?php
 header('application/x-www-form-urlencoded; charset=utf-8');
 header('Access-Control-Allow-Origin: *');
 header('Access-Control-Allow-Methods:*');
 $servername = "192.168.100.19";
 $database = "soatividades";
 $username = "Acesso";
 $password = "nostadramus1";
 $conn = mysqli_connect($servername, $username, $password, $database);
 $steps = array();
 $steps2 = array();
 $steps3 = array();
 $query="";
 $contador = 1;
 //$rest_json = file_get_contents("php://input");
 $_POST = json_decode(file_get_contents('php://input'), true);
 
 if($conn){
    $query="SELECT * FROM usuario where matricula= ".$_POST['matricula']." and senha= ".$_POST['senha'];
    if($result = mysqli_query($conn,$query)){
        if(mysqli_num_rows($result)<=0){
            $steps = array('erro'=>1);  
        }else{
            while($row = mysqli_fetch_assoc($result)){
				$steps[$contador] = array('matricula'=>$row['matricula'],'nome'=>$row['nome'],'cargo'=>$row['cargo'],'senha'=>$row['senha']);
				$contador = $contador+1;
			}
            if($result = mysqli_query($conn,"SELECT * FROM atividade where matRel= ".$_POST['matricula'])){
                if(mysqli_num_rows($result)<=0){
                    $steps = array('2'=>'ERROR');  
                }else{
                    while($row = mysqli_fetch_assoc($result)){
                        $steps[$contador] = array('id'=>$row['id'],'descricao'=>$row['descricao'],'matRel'=>$row['matRel']);
                        $contador = $contador+1;
                    }  
                }
            }
        }
    }else{
        $steps = array('erro'=>1);  
    }
    //mysqli_free_result($result);
    //mysqli_close($con);
 }else{
    $steps = array('erro'=>1);
 }





 echo Json_encode($steps);
?>