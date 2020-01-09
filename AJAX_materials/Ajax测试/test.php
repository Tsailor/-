<?php
/**
 * Created by PhpStorm.
 * User: 41714
 * Date: 2017/4/11
 * Time: 16:14
 */
$arr=array("000000","000001","000003");

$num=$_GET["number"];
foreach ($arr as $value){
    if($num==$value){
        echo "请求成功".$num;
    }else{
        echo "请求成功，无此项数据".$num;
    }
}
