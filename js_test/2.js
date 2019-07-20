var today = new Date();   //获取当天日期
var year = today.getFullYear();   //获取当天年份
if((year%4==0&&year%100!=0)||year%400==0){
    alert("是闰年");
}
else{
    alert("不是");
}