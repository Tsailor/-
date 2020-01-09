<?php
     //设置页面内容、编码格式是utf-8
    header("Content-Type: plain/text;charset=utf-8");
    header("Content-Type: application/json;charset=utf-8");
    $filename="package.json";
    $json_string = file_get_contents($filename);
    $data_str = json_decode($json_string, true);
    //print_r($data_str);
      // echo $data_str["data"]["0"]["list"]["0"]["title"];

     if($_SERVER["REQUEST_METHOD"]=="GET"){
        $flog=$_GET["flog"];
         $index=$_GET["index"];
         echo json_encode($data_str["data"][$flog]["list"][$index]);  //转换为json类型


    //     echo $data_str["data"]["0"]["list"]["0"]["title"];
     }
?>