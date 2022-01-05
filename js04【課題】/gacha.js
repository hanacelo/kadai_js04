
//召喚ボタンを押すと乱数での抽選が行われる
$("#button").on('click',function(){
    let gacha = Math.floor(Math.random()*20);
    console.log(gacha,"ランダムな数字")

    if(gacha = 0){
         result === '<img src = "images/kento_nakazima.jpeg" width="500" height="auto" text-align="center"></img>';
     }else if(gacha = 1){
        result === '<img src = "images/mahiro_takasugi.jpeg" width="500" height="auto" text-align="center"></img>';
    }else if(gacha = 2){
        result = '<img src = "images/masaki_suda.jpeg"></img>';
    }else if(gacha = 3){
        result === '<img src = "images/ryo_narita.jpeg"></img>';
    }else if(gacha = 4){
        result === '<img src = "images/kento_yamazaki.jpeg"></img>';
    }else if(gacha = 5){
        result === '<img src = "images/ryo_yoshizawa.jpeg"></img>';
    }else if(gacha = 6){
        result === '<img src = "images/ryunosuke_kamiki.jpeg"></img>';
    }else if(gacha = 7){
        result === '<img src = "images/shun_oguri.jpeg"></img>';
    }else if(gacha = 8){
        result === '<img src = "images/sosuke_ikematsu.jpeg"></img>';
    }else if(gacha = 9){
        result === '<img src = "images/tomohisa_yamashita.jpeg"></img>';
    }else if(gacha = 10){
        result === '<img src = "images/tatsuya_fuziwara.jpeg"></img>';
    }else if(gacha = 11){
        result === '<img src = "images/yosuke_kuboduka.jpeg"></img>';
    }else if(gacha = 12){
        result === '<img src = "images/yudai_chiba.jpeg"></img>';
    }else if(gacha = 13){
        result === '<img src = "images/daiki_tsuneta.jpeg"></img>';
    }else if(gacha = 14){
        result === '<img src = "images/eiji_akaso.jpeg"></img>';
    }else if(gacha = 15){
        result === '<img src = "images/go_ayano.jpeg"></img>';
    }else if(gacha = 16){
        result === '<img src = "images/humiya_takahashi.jpeg"></img>';
    }else if(gacha = 17){
        result === '<img src = "images/keita_machida.jpeg"></img>';
    }else if(gacha = 18){
        result === '<img src = "images/akihisa_shiono.jpeg"></img>';
    }else if(gacha = 19){
        result === '<img src = "images/takayuki_yamada.jpeg"></img>';
    }

    // $("h2").html(result).val;
    // console.log(result, "ガチャの結果");

});

//ガチャ画面に表示する

let result = [
    {"title":"山崎賢人","img":"images/kento_yamazaki.jpeg"},
    {"title":"山崎賢人","img":"images/mahiro_takasugi.jpeg"},
    {"title":"山崎賢人","img":"images/masaki_suda.jpeg"},
    {"title":"山崎賢人","img":"images/ryo_narita.jpeg"},
    {"title":"山崎賢人","img":"images/ryo_yoshizawa.jpeg"},
    {"title":"山崎賢人","img":"images/ryunosuke_kamiki.jpeg"},
    {"title":"山崎賢人","img":"images/shun_oguri.jpeg"},
    {"title":"山崎賢人","img":"images/sosuke_ikematsu.jpeg"},
    {"title":"山崎賢人","img":"images/tatsuya_fuziwara.jpeg"},
    {"title":"山崎賢人","img":"images/tomohisa_yamashita.jpeg"},
    {"title":"山崎賢人","img":"images/yosuke_kuboduka.jpeg"},
    {"title":"山崎賢人","img":"images/yudai_chiba.jpeg"},
    {"title":"山崎賢人","img":"images/daiki_tsuneta.jpeg"},
    {"title":"山崎賢人","img":"images/eiji_akaso.jpeg"},
    {"title":"山崎賢人","img":"images/go_ayano.jpeg"},
    {"title":"山崎賢人","img":"images/humiya_takahashi.jpeg"},
    {"title":"山崎賢人","img":"images/keita_machida.jpeg"},
    {"title":"山崎賢人","img":"images/kento_nakazima.jpeg"},
    {"title":"山崎賢人","img":"images/akihisa_shiono.jpeg"},
    {"title":"山崎賢人","img":"images/takayuki_yamada.jpeg"},
];

$("#button").on('click',function(){
    //ここなくてもいいんよねえ
    
    
    //召喚中画面が再生され終わったら消え、結果表示用の画面が出る
    setTimeout(function(){
        $('#result').fadeOut("slow",function(){
            $('#result').html(""); //これでresultから結果発表を消す
            $('<img src="images/result.jpeg" width="500" height="auto">').appendTo('#result').hide().fadeIn(2000);
            $('<p>ガチャ結果</p>').appendTo('#try');

        })
})});


//ここからゲットしたカードをlistに保存

$("#button").on("click",function(){
    //valの記述
    const key = $("#result").val();
    console.log(key, "#result");

    localStorage.setItem(key,result) ;

//2.clear クリックイベント
//localStorageの中身削除はとりあえず無視

//3.ページ読み込み：保存データ取得表示
for(let i =0; i<localStorage.length; i++){
    //key(何番目)でkey名を取得
    const key = localStorage.key(i);

    //htmlにjQueryで取得したものを表示
    const html =`<div id="list">${key}</div>`;
    $("#list").append(html);
}});