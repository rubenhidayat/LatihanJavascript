const h1 = document.getElementById('h1');
const tombol = document.getElementById('ganti');
tombol.addEventListener('click', function(){
    // document.body.style.backgroundColor = 'lightblue';
    document.body.classList.toggle('dark-mode');
});