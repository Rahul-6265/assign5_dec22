var array =[];
   var num1 = parseInt(prompt("Enter first number"));
  array.push(num1);
   var num2 = parseInt(prompt("Enter second number"));
  array.push(num2);
   var num3 = parseInt(prompt("Enter third number"));
  array.push(num3);
   console.log(array);

    if  (num1 > num2) {
       if(num1 > num3) {
          alert("The greater number is " + num1);
          } else {
             alert("The greater number is " + num3);
          }
      } else {
         if(num2 > num3) {
            alert("The greater number is " + num2);
         } else {
            alert("The greater number is " + num3)
         }
       }