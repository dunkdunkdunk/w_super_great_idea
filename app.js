const clickBtn = document.getElementById('btn1');
const displayNum = document.getElementById('num');

let count = 0;
clickBtn.addEventListener('click',()=>{
    count++;
    displayNum.innerText = count;
})