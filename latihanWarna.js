const h1 = document.getElementById('h1');
const tombol = document.getElementById('ganti');
const warna = document.createTextNode('Light Mode');
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
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})

sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})

sBiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});




//MENGUBAH WARNA BACKGROUND MENGGUNAKAN MOUSEMOVE
document.body.addEventListener('mousemove', function(event){
    //posisi mouse clientX untuk mengetahui jumlah sumbu x
   const xPos = Math.round((event.clientX / window.innerWidth) * 255);
   const yPos = Math.round((event.clientY / window.innerHeight) * 255);
   document.body.style.backgroundColor = 'rgb( '+ xPos +' , ' + yPos + ', 100 )'
})