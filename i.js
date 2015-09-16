
 function startTime()
{

 var today=new Date();
 var h=today.getHours();
 var m=today.getMinutes();
var s=today.getSeconds();
m = checkTime(m);
 s = checkTime(s);

 document.getElementById('txt').innerHTML ="Current time is: " + h+":"+m+":"+s;
 var t = setTimeout(function(){startTime()},10000);
 }

 function checkTime(i) {
 if (i<10) {i = "0" + i}; // add zero in front of numbers < 10
 return i;
 }


 function checkNum()
 {
var nTest=(isNaN(myForm.CellNum.value));

 if ( (nTest ==true) )
 {
 alert(" Cell number cannot contain letters or special symbols"); myForm.CellNum.value="";
myForm.CellNum.focus();
 }

 }
