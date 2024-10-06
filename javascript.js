let txtData=document.getElementById("txtData");

let btnAC=document.getElementById("btnAC");
let btnDE=document.getElementById("btnDE");
let btnDot=document.getElementById("btnDot");
let btnDiv=document.getElementById("btnDiv");

let btn7=document.getElementById("btn7");
let btn8=document.getElementById("btn8");
let btn9=document.getElementById("btn9");
let btnMul=document.getElementById("btnMul");

let btn4=document.getElementById("btn4");
let btn5=document.getElementById("btn5");
let btn6=document.getElementById("btn6");
let btnMin=document.getElementById("btnMin");

let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let btnAdd=document.getElementById("btnAdd");

let btn00=document.getElementById("btn00");
let btn0=document.getElementById("btn0");
let btnEqu=document.getElementById("btnEqu");


let op;
let num1;
let num2;
let data;

btn1.addEventListener("click",()=>{
    txtData.value+=1;
});

btn2.addEventListener("click",()=>{
    txtData.value+=2;
});

btn3.addEventListener("click",()=>{
    txtData.value+=3;
});

btn4.addEventListener("click",()=>{
    txtData.value+=4;
});

btn5.addEventListener("click",()=>{
    txtData.value+=5;
});

btn6.addEventListener("click",()=>{
    txtData.value+=6;
});

btn7.addEventListener("click",()=>{
    txtData.value+=7;
});

btn8.addEventListener("click",()=>{
    txtData.value+=8;
});

btn9.addEventListener("click",()=>{
    txtData.value+=9;
});

btn0.addEventListener("click",()=>{
    txtData.value+=0;
});

btn00.addEventListener("click",()=>{
    txtData.value+="00";
});

btnAC.addEventListener("click",()=>{
    txtData.value='';
});

btnDE.addEventListener("click", ()=>{
    txtData.value=txtData.value.substr(0,txtData.value.length-1);
});

btnDot.addEventListener("click",()=>{
    if(!txtData.value.includes(".")){
        txtData.value+=".";
    }
});

btnAdd.addEventListener("click",()=>{
    op="+";
    num1=parseFloat(txtData.value);
    txtData.value='';
});

btnMin.addEventListener("click",()=>{
    op="-";
    num1=parseFloat(txtData.value);
    txtData.value='';
});

btnMul.addEventListener("click",()=>{
    op="x";
    num1=parseFloat(txtData.value);
    txtData.value='';
});

btnDiv.addEventListener("click",()=>{
    op="/";
    num1=parseFloat(txtData.value);
    txtData.value='';
});

btnEqu.addEventListener("click",()=>{
    num2=parseFloat(txtData.value);
    solution();
    txtData.value=data;
});

function solution(){
    switch(op){
        case "+":
            data=num1+num2;
            break;
        case "-":
            data=num1-num2;
            break;
        case "x":
            data=num1*num2;
            break;
        case "/":
            if(num2!==0){
                data=num1/num2;
                break;
            }else{
                data="Error";
                break;
            }
    }
}
