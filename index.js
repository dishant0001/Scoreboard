
var add1=0;
var add2=0;
var gameover=false;
var winnerscore = 0;
var numinput = document.querySelector("input");
var but_1_d = document.getElementById("but_1");
var but_2_d = document.getElementById("but_2");
var playno_d = document.getElementById("playno");
var play1_d = document.getElementById("play1");
var play2_d = document.getElementById("play2");

function resetf()
{
    add2=0;
    add1=0;
    gameover=false;
    play1_d.textContent=0;
    play2_d.textContent=0;
    play2_d.classList.remove("winner");
    play1_d.classList.remove("winner");
}

reset.addEventListener("click",function(){
    resetf();
})


numinput.addEventListener("change",function(){
    playno_d.textContent=this.value;
    winnerscore=Number(this.value);
    resetf();
});

but_1_d.addEventListener("click",function(){
    if(!gameover)
{add1++;
if(add1>=winnerscore)
{gameover=true;
play1_d.classList.add("winner")}
play1_d.textContent=add1;}});

but_2_d.addEventListener("click",function(){
    if(!gameover)
{add2++;
if(add2>=winnerscore)
{gameover=true;
play2_d.classList.add("winner")}
play2_d.textContent=add2;}});



