

 function checkNum()
 {
var nTest=(isNaN(myForm.CellNum.value));

 if ( (nTest ==true) )
 {
 alert(" Cell number cannot contain letters or special symbols"); myForm.CellNum.value="";
myForm.CellNum.focus();
 }

 }
