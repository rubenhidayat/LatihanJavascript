//RULES
function getPilihanComputer(){
    const comp = Math.random();
    if(comp < 0.34) return 'batu';
    if(comp >= 0.34 && comp < 0.67) return 'gunting';
    return 'kertas';
}

function getHasil(comp, player){
    if(player == comp) return 'seri';
    if(player == 'batu') return  (comp == 'gunting') ? 'Menang!' : 'Kalah!';
    if(player == 'gunting') return  (comp == 'kertas') ? 'Menang!' : 'Kalah!';
    if(player == 'kertas') return  (comp == 'batu') ? 'Menang!' : 'Kalah!';  
}

function putar(){
    const gHasil = document.querySelector('.img-komputer');
    const gambar = ['batu', 'gunting', 'kertas'];
    let i=0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return
        }
        gHasil.setAttribute('src','img/'+gambar[i++]+'.png' );
        if(i==gambar.length)i=0;
    }, 100);
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        setTimeout(function(){
            const tHasil = document.querySelector('.info');
            tHasil.innerHTML =hasil;
            const gHasil = document.querySelector('.img-komputer');
            gHasil.setAttribute('src','img/'+pilihanComputer+'.png');
        }, 1000)
    })
});









// const pBatu = document.querySelector('.batu');
// pBatu.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pBatu.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     // console.log('pilihan komputer '+pilihanComputer);
//     // console.log('pilihan player ' + pilihanPlayer);
//     // console.log(hasil)
//     //TEXT MENANG KALAH
//     const tHasil = document.querySelector('.info');
//     tHasil.innerHTML =hasil;
//     //GAMBAR HASIL KOMPUTER
//     const gHasil = document.querySelector('.img-komputer');
//     gHasil.setAttribute('src','img/'+pilihanComputer+'.png');
// });

