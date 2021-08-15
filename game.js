var seq = [];
var seqT = [];
var level = 0;
var bgColor = ["#edeeed","#edeeed","#ffbdccbd", "#eca2b3bd", "#3ef5f5bd", "#7cf53ebd", "#ffc5c5bd", "#35bfffbd", "#f3ff35bd"];

$("body").css("backgroundColor",bgColor[Math.floor(Math.random()*bgColor.length)]);

var time = 3
var myVar = setInterval(function(){
        $("h1").text("Game starts in " + time);
        time--;
        if(time==0){
            clearInterval(myVar);
            start();
        }

    }, 1000);


$(document).keypress(function(){
    start();
    $(document).unbind("keypress");
});


function display(n){
    $("#button"+n).addClass("highlightButton"+n);
    setTimeout(function(){
        $("#button"+n).removeClass("highlightButton"+n);
    },400);
}

function rewind(rn){
    var t = 0;
    var myVar = setInterval(function(){
        display(seq[t]);
        t++;
        if(t>seq.length){
            clearInterval(myVar);
        }

    }, 1000);


}

function gameOver(){
    $("h1").text("Game Over ! Reload to restart !!")
    seq = [];
    seqT = [];
    level = 0;
}

function levelGenerator(){
    $("h1").text("Level : " + level);
    var rn = Math.floor(Math.random()*4)+1;
    rewind(rn);
    seq.push(rn);
    levelChecker();
}

function levelChecker(){
    seqT = seq.slice();
}

function check(button){
    console.log(button.id.slice(6,7));
    console.log(seqT[0]);
    console.log(button.id.slice(6,7) == seqT[0]);

    if (button.id.slice(6,7) == seqT[0]){
        seqT.shift();
        if(seqT.length==0){
            level++;
            levelGenerator();
        }
        else{
            console.log(seqT);
        }

    }
    else{
        gameOver();
    }
}


function start(){
    levelGenerator();
    $("#button1").click(function(){ check(this); });
    $("#button2").click(function(){ check(this); });
    $("#button3").click(function(){ check(this); });
    $("#button4").click(function(){ check(this); });
}
