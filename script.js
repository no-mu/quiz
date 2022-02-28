const question = '旧車、kh400のメーカは次のうちどれ？';
const answers = [
    'suzuki', 
    'kawasaki', 
    'honda',
    'yamaha'
];
const correct = 'kawasaki';

const $button = document.getElementsByTagName('button');

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = question;
    let buttonIndex = 0;
let buttonLength = $button.length;
while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }   
}
setupQuiz();

const clickHandler = (e) => {
    if(correct === /*document.getElementsByTagName('button')*/ /*$button[0]*/e.target.textContent){
        window.alert('正解！');
    } else {
        window.alert('不正解！');
    }
};

/*$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];*/



/*document.getElementsByTagName('button') [0].textContent = answers[0];
document.getElementsByTagName('button') [1].textContent = answers[1];
document.getElementsByTagName('button') [2].textContent = answers[2];
document.getElementsByTagName('button') [3].textContent = answers[3];*/

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
const buttonLength = $button.length;
while (handlerIndex < buttonLength) {
    /*document.getElementsByTagName('button')*/$button[handlerIndex].addEventListener('click', (e) => {
    /*if(correct === /*document.getElementsByTagName('button')*/ /*$button[0]e.target.textContent){
        window.alert('正解！');
    } else {
        window.alert('不正解！');
    }*/
    clickHandler(e);
   });
   handlerIndex++;
}
/*document.getElementsByTagName('button')$button[0].addEventListener('click', (e) => {
    /*if(correct === /*document.getElementsByTagName('button')*/ /*$button[0]e.target.textContent){
        window.alert('正解！');
    } else {
        window.alert('不正解！');
    }
    clickHandler(e);
});
/*document.getElementsByTagName('button')$button[1].addEventListener('click', (e) => {
    /*if(correct === /*document.getElementsByTagName('button')*/ /*$button[1]e.target.textContent){
        window.alert('正解！');
    } else {
        window.alert('不正解！');
    }
    clickHandler(e);
});
/*document.getElementsByTagName('button')$button[2].addEventListener('click', (e) => {
    /*if(correct === /*document.getElementsByTagName('button')*/ /*$button[2]e.target.textContent){
        window.alert('正解！');
    } else {
        window.alert('不正解！');
    }
    clickHandler(e);
});
/*document.getElementsByTagName('button')$button[3].addEventListener('click', (e) => {
    /*if(correct === /*document.getElementsByTagName('button')*/ /*$button[3]e.target.textContent){
        window.alert('正解！');
    } else {
        window.alert('不正解！');
    }
    clickHandler(e);
});*/