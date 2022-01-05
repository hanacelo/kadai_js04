//できた！大完成だーーーー！！！！

//乱数の作成（数がたくさんある時）
let result = getRandom(0,470000);
console.log(result);

function getRandom(min,max) {
    let random = Math.floor(Math.random()*(max + 1 - min))+min;
    return random;
};

//なんのために書いているのか不明
callApi();

//データを参照して、内部的に取ってきてる
async function callApi() {
    const res = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + result);

    const users = await res.json();
    console.log(users);

    //これでタイトルだけを取得し、表示させる
    const title = users.title;
    console.log(title);

    const titleName = $("#content").html(title);


  //ここで画像URLを取得
  const imageUrl = users.primaryImage;
  console.log(imageUrl);


  //取得したURLを画像で表示
  $("#result").html('<img src = ' + imageUrl +'>')

  };