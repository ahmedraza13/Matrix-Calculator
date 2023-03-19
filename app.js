

          // Function to add two matrix

function AddMatrix() {

let a1 = document.querySelector("#a1").value;
         a1 = Number(a1)
let a2 = document.querySelector("#a2").value;
         a2 = Number(a2)
let a3 = document.querySelector("#a3").value;
         a3 = Number(a3)
let a4 = document.querySelector("#a4").value;
         a4 = Number(a4)
let a5 = document.querySelector("#a5").value;
         a5 = Number(a5)
let a6 = document.querySelector("#a6").value;
         a6 = Number(a6)
let a7 = document.querySelector("#a7").value;
         a7 = Number(a7)
let a8 = document.querySelector("#a8").value;
         a8 = Number(a8)
let a9 = document.querySelector("#a9").value;
         a9 = Number(a9)
let b1 = document.querySelector("#b1").value;
         b1 = Number(a1)
let b2 = document.querySelector("#b2").value;
        b2 = Number(b2)
let b3 = document.querySelector("#b3").value;
        b3 = Number(b3)
let b4 = document.querySelector("#b4").value;
        b4 = Number(b4)
let b5 = document.querySelector("#b5").value;
        b5 = Number(b5)
let b6 = document.querySelector("#b6").value;
       b6 = Number(b6)
let b7 = document.querySelector("#b7").value;
       b7 = Number(b7)
let b8 = document.querySelector("#b8").value;
       b8 = Number(b8)
let b9 = document.querySelector("#b9").value;
       b9 = Number(b9)

var matrix1 = [a1, a2, a3, a4, a5, a6, a7, a8, a9]
var matrix2 = [b1, b2, b3, b4, b5, b6, b7, b8, b9]

var result1 = matrix1[0] + matrix2[0]
var result2 = matrix1[1] + matrix2[1]
var result3 = matrix1[2] + matrix2[2]
var result4 = matrix1[3] + matrix2[3]
var result5 = matrix1[4] + matrix2[4]
var result6 = matrix1[5] + matrix2[5]
var result7 = matrix1[6] + matrix2[6]
var result8 = matrix1[7] + matrix2[7]
var result9 = matrix1[8] + matrix2[8]



 document.getElementById("c1").value =result1
 document.getElementById("c2").value =result2
 document.getElementById("c3").value =result3
 document.getElementById("c4").value =result4
 document.getElementById("c5").value =result5
 document.getElementById("c6").value =result6
 document.getElementById("c7").value =result7
 document.getElementById("c8").value =result8
 document.getElementById("c9").value =result9


    

  
}
