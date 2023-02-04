var disPlayCalc = document.getElementById("disPlayCalc");
var disPlayCalc2 = document.getElementById("disPlayCalc2");

var num1;
var op;
var num2;
var newval;
var prev;
var dotArray =  [];

function pressButton(value) { 
    prev = disPlayCalc2.value;
    dotArray = [prev, value];
    if (prev.includes(".") &&  (value ==".") ) {
        value = "";
    }

    if (!prev.lenght > 0 && prev != "Nincs értelmezve"){
        newval = prev  + value;
        disPlayCalc2.value = newval; 
   } 

}

function pressOperator(operator){
    num1 ="";
    op = operator;
    var display = disPlayCalc2.value;
    var numTest1 = parseFloat(display);

    if (!isNaN(numTest1)) {
        num1 = numTest1;
        disPlayCalc2.value = "" ;
    } 

    if (op == "P" && (num1 != "")) {
        disPlayCalc.innerHTML = "<p>"+num1+"+</p>"; 
    } else if (op == "M" && (num1 != "")) {
        disPlayCalc.innerHTML = "<p>"+num1+"-</p>";
    } else if (op == "SZ" && (num1 != "")) {
        disPlayCalc.innerHTML = "<p>"+num1+"x</p>";
    } else if (op == "O" && (num1 != "")) {
        disPlayCalc.innerHTML = "<p>"+num1+"/</p>";
    }

}


function pressEqual(){
    num2 ="";
    var display = disPlayCalc2.value;
    var numTest2 = parseFloat(display);

    if (!isNaN(numTest2)) {
       num2 = numTest2;
    }

    switch(op){
        case "P":
            var ans=num1+num2;
            break;
        case "M":
            var ans=num1-num2;
            break;	
        case "SZ":
            var ans=num1*num2;
            break;
        case "O":
            var ans=num1/num2;
            break;
        default:
            var ans=num2;
            break
    }

    if (op == "P") {
        disPlayCalc.innerHTML = "<p>"+num1+"+"+num2+"=</p>";
    } else if (op == "M") {
        disPlayCalc.innerHTML = "<p>"+num1+"-"+num2+"=</p>";
    } else if (op == "SZ") {
        disPlayCalc.innerHTML = "<p>"+num1+"x"+num2+"=</p>";
    } else if (op == "O") {
       disPlayCalc.innerHTML = "<p>"+num1+"/"+num2+"=</p>";
    }

    if (ans == "Infinity") {
        ans = "";
       disPlayCalc2.value = "Nincs értelmezve";
       return disPlayCalc.innerHTML = "";
        
    }

    
    disPlayCalc2.value = ans;
}

function pressClear(value) {
    if (value == "C") {
        disPlayCalc.innerHTML = "";
        disPlayCalc2.value = "";
        num1 ="";
        ans = "";
        op="";
        return num2 ="";
    }
    if (value == "Clear") {
    if (disPlayCalc2.value != "")  {
     disPlayCalc2.value = "";
        }
    }
}

function pressNegPos() {
   var disp = disPlayCalc2.value;
   
   if (num2 ==""){ 
    disPlayCalc2.value = 0 - disp;
   } else if(num2 !="") {

    disPlayCalc2.value = 0 - disp;
   }

}