function IsLeapYear(year){
    if((year%4==0&&year%100!=0)||year%400==0){
        return true;
    }
    else{
        return false;
    }
}
function DayOfYear(d){
    var months=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
    if(IsLeapYear(d.getFullYear())){
        months[1]=29;
    }
    var ans=0;
    for(var i=0;i<d.getMonth();i++){
        ans+=months[i];
    }
    ans+=d.getDate();
    console.log(ans);
}
var d=new Date(2000,1,8);
DayOfYear(d);