const h1 = document.getElementById('h1');
const tombol = document.getElementById('ganti');
tombol.addEventListener('click', function(){
    // document.body.style.backgroundColor = 'lightblue';
    document.body.classList.toggle('dark-mode');
});


//tombol acak warna
const tAcakWarna = document.createElement('button');
const textTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(textTombol);
tAcakWarna.setAttribute('type', 'button');
tombol.after(tAcakWarna);

tAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b + ')';
});



//slider warna
const sMerah = document.querySelector('input[name=sMerah]');

sMerah.addEventListener('change', function(){
    const r = sMerah.value;
    document.body.style.backgroundColor = 'rgb('+ r +',0,0)'
})