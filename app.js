var sayi1=document.getElementById("s1");
var sayi2=document.getElementById("s2");
var hesapBtnPlus =document.getElementById("hesapplus");
var hesapBtnMinus=document.getElementById("hesapayirma");
var hesapBtnCarpma=document.getElementById("hesapcarpma");
var hesapBtnBolme=document.getElementById("hesapbolme");
var hesapBtnFaiz=document.getElementById("hesapfaiz");
var sonuc=document.getElementById("sonuc");

hesapBtnPlus.onclick=function(){
    var toplam= Number(sayi1.value) + Number(sayi2.value);
    sonuc.innerHTML=toplam;
}
hesapBtnMinus.onclick=function(){
    var toplam= Number(sayi1.value) - Number(sayi2.value);
    sonuc.innerHTML=toplam;
}
hesapBtnCarpma.onclick=function(){
    var toplam= Number(sayi1.value) * Number(sayi2.value);
    sonuc.innerHTML=toplam;
}
hesapBtnBolme.onclick=function(){
    var toplam= Number(sayi1.value) / Number(sayi2.value);
    sonuc.innerHTML=toplam;
}
hesapBtnFaiz.onclick=function(){
    var toplam= Number(sayi1.value) / Number(sayi2.value);
    sonuc.innerHTML=toplam;
}