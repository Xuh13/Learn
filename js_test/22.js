function CollectDigits(source){
	var s = new String(source),result="",ch,i
	for(i=0;i<s.length;i++)
	{
		ch = s.charAt(i);
        if (ch>="0" && ch <= "9") {
            result += ch;
        }
	}
	return result;
}

var s;
s = prompt("请输入一个含有数字的字符串:","");
alert("收集的数字串:\n"+CollectDigits(s));
