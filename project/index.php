<?php
$servername = "localhost";
$username = "root";
$password = "";
$abc="MySQL";

// 创建连接
$conn = new mysqli($servername, $username, $password,$abc);

// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}
else
    echo "连接成功";
//$name=$_GET["name"];
//$age=$_GET["age"];
$name="许航";
$age=18;
$Job="Coder";
$aaa="INSERT INTO student (name,age,job) VALUES ('".$name."','".$age."','".$Job."')";
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