var channel1 = document.getElementById("ch1");
var channel2= document.getElementById("ch2");
var channel3 = document.getElementById("ch3");
var select1 = "x";
var select2 = "y";
var select3 = "z";
var zselecta = "a";
var zselectb = "b";
var zselectc = "c";
//for next and previous
var inum = 0;

document.getElementById("b1").addEventListener("click",
function(){
    channel1.style.backgroundImage= "url('imgs/i1.jpg')";
    select1 = channel1.style.backgroundImage= "url('imgs/i1.jpg')";
    channel2.style.backgroundImage= "url('imgs/i2.jpg')";
    select2 = channel2.style.backgroundImage= "url('imgs/i2.jpg')";
    channel3.style.backgroundImage= "url('imgs/i3.jpg')";
    select3 = channel3.style.backgroundImage= "url('imgs/i3.jpg')";
});

document.getElementById("b2").addEventListener("click",
function(){
    channel1.style.backgroundImage= "url('imgs/i4.jpg')";
    select1 = channel1.style.backgroundImage= "url('imgs/i4.jpg')";
    channel2.style.backgroundImage= "url('imgs/i5.jpg')";
    select2 = channel1.style.backgroundImage= "url('imgs/i5.jpg')";
    channel3.style.backgroundImage= "url('imgs/i6.jpg')";
    select3 = channel1.style.backgroundImage= "url('imgs/i6.jpg')";
});

document.getElementById("b3").addEventListener("click",
function(){
    channel1.style.backgroundImage= "url('imgs/i7.jpg')";
    select1 = channel1.style.backgroundImage= "url('imgs/i7.jpg')";
    channel2.style.backgroundImage= "url('imgs/i8.jpg')";
    select2 = channel1.style.backgroundImage= "url('imgs/i8.jpg')";
    channel3.style.backgroundImage= "url('imgs/i9.jpg')";
    select3 = channel1.style.backgroundImage= "url('imgs/i9.jpg')";
});

document.getElementById("b4").addEventListener("click",
function(){
    channel1.style.backgroundImage= "url('imgs/i10.jpg')";
    select1 = channel1.style.backgroundImage= "url('imgs/i10.jpg')";
    channel2.style.backgroundImage= "url('imgs/i11.jpg')";
    select2 = channel1.style.backgroundImage= "url('imgs/i11.jpg')";
    channel3.style.backgroundImage= "url('imgs/i12.jpg')";
    select3 = channel1.style.backgroundImage= "url('imgs/i12.jpg')";
});

//*******MOUSE ENTER JS************

channel1.addEventListener("mouseenter",
function(){
    document.getElementById("zoom").style.backgroundImage= select1;
    zselecta = document.getElementById("zoom").style.backgroundImage= select1;
});

channel2.addEventListener("mouseenter",
function(){
    document.getElementById("zoom").style.backgroundImage= select2;
    zselecta = document.getElementById("zoom").style.backgroundImage= select2;
});

channel3.addEventListener("mouseenter",
function(){
    document.getElementById("zoom").style.backgroundImage= select3;
    zselecta = document.getElementById("zoom").style.backgroundImage= select3;
});

//*********LEFT MENU*********
var bgd = document.getElementById("bg");

document.getElementById("mbg").addEventListener("click",
function(){
    bgd.style.backgroundImage= zselecta;
});

document.getElementById("res").addEventListener("click",
function(){
    bgd.style.backgroundImage= "none";
});

document.getElementById("showa").addEventListener("click",
function(){
    document.getElementById("app1").style.display= "block";
});

document.getElementById("hidea").addEventListener("click",
function(){
    document.getElementById("app1").style.display= "none";
});

//******ZOOOOM ZOOOOOOOM*********
var wsize = 100;
var hsize = 70;

document.getElementById("zoom").addEventListener("click",
function(){
    document.getElementById("zoomcontrols").style.display= "block";
});

document.getElementById("plus").addEventListener("click",
function(){
    if(wsize<91 || hsize<64){
    wsize += 10;
    document.getElementById("zoom").style.width= wsize+"%";
    hsize += 7;
    document.getElementById("zoom").style.height= hsize+"%";
    }
    return 0;
});

document.getElementById("minus").addEventListener("click",
function(){
    if(wsize>11 || hsize>8){
    wsize -= 10;
    document.getElementById("zoom").style.width= wsize+"%";
    hsize -= 7;
    document.getElementById("zoom").style.height= hsize+"%";
    }
    return 0;
});

document.getElementById("numin").addEventListener("change",
function(){
    if(numin.value<=12 && numin.value>=1){
        bgd.style.backgroundImage= "url('imgs/i"+numin.value+".jpg')";
    }
    else{
        alert("Doesn't Exist");
    }
});

document.getElementById("nextset").addEventListener("click",
function(){


  inum++;
  console.log(inum);
  channel1.style.backgroundImage= "url('imgs/i"+inum+".jpg')";
  select1 = channel1.style.backgroundImage= "url('imgs/i"+inum+".jpg')";
  inum++;
  console.log(inum);
  channel2.style.backgroundImage= "url('imgs/i"+inum+".jpg')";
  select2 = channel2.style.backgroundImage= "url('imgs/i"+inum+".jpg')";
  inum++;
  console.log(inum);
  channel3.style.backgroundImage= "url('imgs/i"+inum+".jpg')";
  select3 = channel3.style.backgroundImage= "url('imgs/i"+inum+".jpg')";

  if(inum >= 12){
    inum = 0;
  }
  else {
    return inum;
  }
});

document.getElementById("prevset").addEventListener("click",
function(){

  if(inum == 0){
    inum = 12;
    console.log(inum);
    channel3.style.backgroundImage= "url('imgs/i"+inum+".jpg')";
    select3 = channel3.style.backgroundImage= "url('imgs/i"+inum+".jpg')";
    inum--;
    console.log(inum);
    channel2.style.backgroundImage= "url('imgs/i"+inum+".jpg')";
    select2 = channel2.style.backgroundImage= "url('imgs/i"+inum+".jpg')";
    inum--;
    console.log(inum);
    channel1.style.backgroundImage= "url('imgs/i"+inum+".jpg')";
    select1 = channel1.style.backgroundImage= "url('imgs/i"+inum+".jpg')";
    inum--;
  }
  else {
    console.log(inum);
    channel3.style.backgroundImage= "url('imgs/i"+inum+".jpg')";
    select3 = channel3.style.backgroundImage= "url('imgs/i"+inum+".jpg')";
    inum--;
    console.log(inum);
    channel2.style.backgroundImage= "url('imgs/i"+inum+".jpg')";
    select2 = channel2.style.backgroundImage= "url('imgs/i"+inum+".jpg')";
    inum--;
    console.log(inum);
    channel1.style.backgroundImage= "url('imgs/i"+inum+".jpg')";
    select1 = channel1.style.backgroundImage= "url('imgs/i"+inum+".jpg')";
    inum--;
  if(inum <= 0){
    inum = 12;
  }
  else {
    return inum;
  }
  }
});
