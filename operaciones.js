"use strict"

var n1, n2, res;

function sumar(){
    n1=parseFloat(document.getElementById("num1").value);
    n2=parseFloat(document.getElementById("num2").value);
    res= n1+n2;
    document.getElementById("result").innerHTML=res;
    if(isNaN(parseFloat(document.getElementById("num1").value))){
        alert("Ingresa el primer valor");
        document.getElementById("result").innerHTML="";
        document.getElementById("num1").focus();    
    }
    if(isNaN(parseFloat(document.getElementById("num2").value))){
        alert("Ingresa el segundo valor");
        document.getElementById("result").innerHTML="";
        document.getElementById("num2").focus();  
    }
}

function restar(){
    n1=parseFloat(document.getElementById("num1").value);
    n2=parseFloat(document.getElementById("num2").value);
    res= n1-n2;
    document.getElementById("result").innerHTML=res;
    if(isNaN(parseFloat(document.getElementById("num1").value))){
        alert("Ingresa el primer valor");
        document.getElementById("result").innerHTML="";
        document.getElementById("num1").focus();    
    }
    if(isNaN(parseFloat(document.getElementById("num2").value))){
        alert("Ingresa el segundo valor");
        document.getElementById("result").innerHTML="";
        document.getElementById("num2").focus();  
    }
}

function multiplicar(){
    n1=parseFloat(document.getElementById("num1").value);
    n2=parseFloat(document.getElementById("num2").value);
    res= n1*n2;
    document.getElementById("result").innerHTML=res;
    if(isNaN(parseFloat(document.getElementById("num1").value))){
        alert("Ingresa el primer valor");
        document.getElementById("result").innerHTML="";
        document.getElementById("num1").focus();    
    }
    if(isNaN(parseFloat(document.getElementById("num2").value))){
        alert("Ingresa el segundo valor");
        document.getElementById("result").innerHTML="";
        document.getElementById("num2").focus();  
    }
}

function dividir(){
    n1=parseFloat(document.getElementById("num1").value);
    n2=parseFloat(document.getElementById("num2").value);
    res= n1/n2;
    document.getElementById("result").innerHTML=res;
    if(isNaN(parseFloat(document.getElementById("num1").value))){
        alert("Ingresa el primer valor");
        document.getElementById("result").innerHTML="";
        document.getElementById("num1").focus();    
    }
    if(isNaN(parseFloat(document.getElementById("num2").value))){
        alert("Ingresa el segundo valor");
        document.getElementById("result").innerHTML="";
        document.getElementById("num2").focus();  
    }
}