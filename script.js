const question = '旧車、kh400のメーカは次のうちどれ？';
const answers = [
    'suzuki', 
    'kawasaki', 
    'honda',
    'yamaha'
];
const correct = 'kawasaki';

//定数の文字列をHTMLに反映させる
document.getElementById('js-question').textContent = question;

const $button = document.getElementsByTagName('button');

$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];

/*document.getElementsByTagName('button') [0].textContent = answers[0];
document.getElementsByTagName('button') [1].textContent = answers[1];
document.getElementsByTagName('button') [2].textContent = answers[2];
document.getElementsByTagName('button') [3].textContent = answers[3];*/

//ボタンをクリックしたら正誤判定
/*document.getElementsByTagName('button')*/$button[0].addEventListener('click', () => {
    if(correct === /*document.getElementsByTagName('button')*/ $button[0].textContent){
        window.alert('正解！');
    } else {
        window.alert('不正解！');
    }
});
/*document.getElementsByTagName('button')*/$button[1].addEventListener('click', () => {
    if(correct === /*document.getElementsByTagName('button')*/ $button[1].textContent){
        window.alert('正解！');
    } else {
        window.alert('不正解！');
    }
});
/*document.getElementsByTagName('button')*/$button[2].addEventListener('click', () => {
    if(correct === /*document.getElementsByTagName('button')*/ $button[2].textContent){
        window.alert('正解！');
    } else {
        window.alert('不正解！');
    }
});
/*document.getElementsByTagName('button')*/$button[3].addEventListener('click', () => {
    if(correct === /*document.getElementsByTagName('button')*/ $button[3].textContent){
        window.alert('正解！');
    } else {
        window.alert('不正解！');
    }
});