<?php
$servername = "localhost";
$username = "root";
$password = "";
$DataBase="111";

// 创建连接
$conn = new mysqli($servername, $username, $password,$DataBase);

// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}
else
    echo "连接成功";

$username=$_POST["username"];
$password=$_POST["password"];
$TEXT="INSERT INTO user (username,password) VALUES ('$username','$password')";
if(mysqli_query($conn,$TEXT))
    echo"添加成功";
else
    echo"添加失败";
?>