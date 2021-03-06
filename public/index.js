const fwdBtn = document.getElementById('fwd');
const backBtn = document.getElementById('back');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const stopBtn = document.getElementById('stop');

fwdBtn.addEventListener('click', () => {
    fetch('/fwd', { method: 'POST' });
});

backBtn.addEventListener('click', () => {
    fetch('/back', { method: 'POST' });
});

leftBtn.addEventListener('click', () => {
    fetch('/left', { method: 'POST' });
});

rightBtn.addEventListener('click', () => {
    fetch('/right', { method: 'POST' });
});

stopBtn.addEventListener('click', () => {
    fetch('/stop', { method: 'POST' });
});
