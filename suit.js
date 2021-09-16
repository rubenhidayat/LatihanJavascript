let ulang = true;

while(ulang == true){
    let player = prompt('masukkan batu/gunting/kertas');

//rule 1
    let comp = Math.random();
    if(comp < 0.34){
        comp = 'batu';
    }else if(comp >= 0.34 && comp < 0.67){
        comp = 'gunting';
    }else{
        comp = 'kertas';
    }

    let hasil = '';
//rule 2
    if(player == comp){
        hasil = 'seri';
    }else if(player == 'batu'){
        hasil = (comp == 'gunting') ? 'Menang!' : 'Kalah!';
    }else if(player == 'gunting'){
        hasil = (comp == 'kertas') ? 'Menang!' : 'Kalah!';
    }else if(player == 'kertas'){
        hasil = (comp == 'batu') ? 'Menang!' : 'Kalah!';
    }else{
        hasil = 'ANDA SALAH MEMASUKKAN';
    }

    alert('Kamu memilih :  '+ player +' dan komputer memilih '+ comp +'\n maka hasilnya adalah : '+hasil+'');

    ulang = confirm('apakah anda ingin bermain lagi??');
}

alert('terima kasih sudah bermain');


