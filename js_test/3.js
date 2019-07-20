var age=prompt("请输入你的年龄",);
if(age<14){
    console.log("儿童");
}
else if(age>=14&&age<24){
    console.log("青少年");
}
else if(age>=24&&age<40){
    console.log("青年");
}
else if(age>=40&&age<60){
    console.log("中年");
}
else if(age>=60){
    console.log("老年");
}