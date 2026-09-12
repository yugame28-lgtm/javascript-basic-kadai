const btn =  document.getElementById('btn');
const message = document.getElementById('text');

btn.addEventListener('click' , () => {
    message.textContent = "ボタンをクリックしました";
})