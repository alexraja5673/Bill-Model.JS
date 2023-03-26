function find(){
	a=document.getElementById("amount").value;
	b=document.getElementById("tax").value;
	c=a*b*1/100;
    document.getElementById("tips").value=c;
	d=1*a+c;
	document.getElementById("total").value=d;
}
