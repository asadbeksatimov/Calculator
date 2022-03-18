var num1=document.getElementById("n1");
var num2=document.getElementById("n2");
var toCalculateAdd =document.getElementById("add");
var toCalculateSeparate=document.getElementById("separate");
var toCalculateMultiply=document.getElementById("multiply");
var toCalculatePartition=document.getElementById("partition");
var toCalculatePercent=document.getElementById("percent");
var sonuc=document.getElementById("collection");

toCalculateAdd.onclick=function(){
    var toplam= Number(num1.value) + Number(num2.value);
    collection.innerHTML=toplam;
}
toCalculateSeparate.onclick=function(){
    var toplam= Number(num1.value) - Number(num2.value);
    collection.innerHTML=toplam;
}
toCalculateMultiply.onclick=function(){
    var toplam= Number(num1.value) * Number(num2.value);
    collection.innerHTML=toplam;
}
toCalculatePartition.onclick=function(){
    var toplam= Number(num1.value) / Number(num2.value);
    collection.innerHTML=toplam;
}
toCalculatePercent.onclick=function(){
    var toplam= Number(num1.value) / Number(num2.value);
    collection.innerHTML=toplam;
}