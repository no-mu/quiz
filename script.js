const question = '旧車、kh400のメーカは次のうちどれ？';
const answers = [
    'suzuki', 
    'kawasaki', 
    'honda',
    'yamaha'
];
const correct = 'kawasaki';

document.getElementById('js-question').textContent = question;

document.getElementsByTagName('button') [0].textContent = answers[0];
document.getElementsByTagName('button') [1].textContent = answers[1];
document.getElementsByTagName('button') [2].textContent = answers[2];
document.getElementsByTagName('button') [3].textContent = answers[3];