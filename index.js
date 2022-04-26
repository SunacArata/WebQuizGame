//変数（書き換え可）
let hensu = 'Hello World!';

//console.log(hensu);
//定数(書き換え不可)
const teisu = 'byebye';

//console.log(teisu);
//配列
let kazu = ['いーち', 'にー', 'さーん', 'よーん'];

//console.log(kazu[2]);
//ループ文
//let index = 0;
//while (index < kazu.length) {
//繰り返したい命令
//    console.log(kazu[index]);
//    index++;
//}
//条件分岐
//if (kazu.length > 5) {
//    console.log('ボンバイエ!');
//} else {
//    console.log('ボンバ。。。');
//}

//関数
let test = (arg) => {
    //ここに実行したい命令を書く
    if (kazu.length > arg) {
        console.log('ボンバイエ!');
    } else {
        console.log('ボンバ。。。');
    }
};

//test(3);
//オブジェクト
const ai = {
    color: 'pink',
    size: 'large',
    purfume: 'mint',
    goToilet: () => {
        console.log('Hello word!');
    }
};
//ポップアップを呼ぶ関数
//window.alert('Hello world');

document.getElementsByTagName('button')[0].addEventListener('click', () => {

});