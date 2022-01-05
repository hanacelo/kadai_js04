//一応できた
//slotのぐるぐる回るのをここで作っておく
let slotID1 = 0;
let slotID2 = 0;
let slotID3 = 0;
let slotID4 = 0;
let slotID5 = 0;
let slotID6 = 0;


//ここでスロット自体の動きを設定？
function loop_slot1(){
    $(".slot1").html(0);
    $(".slot1").text(4);

    //スロットの流れる速さを1950秒で指定
    slotID1 = setTimeout(loop_slot1,1700);
};

function loop_slot2(){
    $(".slot2").html(0);
    $(".slot2").text(9);
    slotID2 = setTimeout(loop_slot2,1700);
};

function loop_slot3(){
    $(".slot3").html(0);
    $(".slot3").text(9);
    slotID3 = setTimeout(loop_slot3,1700);
};

function loop_slot4(){
    $(".slot4").html(0);
    $(".slot4").text(9);
    slotID4 = setTimeout(loop_slot4,1700);
};

function loop_slot5(){
    $(".slot5").html(0);
    $(".slot5").text(9);
    slotID5 = setTimeout(loop_slot5,1700);
};

function loop_slot6(){
    $(".slot6").html(0);
    $(".slot6").text(9);
    slotID6 = setTimeout(loop_slot6,1700);
};

//spinを押すとスロットが動く
$("#spin").on('click',function(){
    loop_slot1();
    loop_slot2();
    loop_slot3();
    loop_slot4();
    loop_slot5();
    loop_slot6();
});

//stopボタンを押すと、ランダムで数字を表示する
$("#stop1").on('click',function(){
    clearTimeout(slotID1);
    let random = Math.floor(Math.random()*5);
    $(".slot1").text(random);
    $(".slot1").html(random);
});

$("#stop1").on('click',function(){
    clearTimeout(slotID2);
    let random = Math.floor(Math.random()*10);
    $(".slot2").text(random);
    $(".slot2").html(random);
});

$("#stop1").on('click',function(){
    clearTimeout(slotID3);
    let random = Math.floor(Math.random()*10);
    $(".slot3").text(random);
    $(".slot3").html(random);
});

$("#stop1").on('click',function(){
    clearTimeout(slotID4);
    let random = Math.floor(Math.random()*10);
    $(".slot4").text(random);
    $(".slot4").html(random);
});

$("#stop1").on('click',function(){
    clearTimeout(slotID5);
    let random = Math.floor(Math.random()*10);
    $(".slot5").text(random);
    $(".slot5").html(random);
});

$("#stop1").on('click',function(){
    clearTimeout(slotID6);
    let random = Math.floor(Math.random()*10);
    $(".slot6").text(random);
    $(".slot6").html(random);
});