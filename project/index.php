<?php
$servername = "localhost";
$username = "root";
$password = "";
$abc="111";

// 创建连接
$conn = new mysqli($servername, $username, $password,$abc);

// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}
else
    echo "连接成功";
$name=$_GET["name"];
$age=$_GET["age"];
$aaa="INSERT INTO student (name,phone_number,time_leave,time_arrive,train_number) VALUES ('".$name."','".$age."','1','1','1')";
if(mysqli_query($conn,$aaa)){
    echo"添加成功";
}
else
    echo"添加失败";
/*$create="CREATE DATABASE myDB";
if(mysqli_query($conn,$create)){
    echo"创建成功";
}
else{
    echo"创建失败";
}*/
?>