//MANIPULASI ELEMENT

// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>RUBEN HIDAYAT</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'hello world';


// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';


// const judul = document.getElementsByTagName('h1')[0];
// const a = document.querySelector('section#a a');


// const p2 = document.querySelector('.p2');


















//MANIPULASI NODE
//document.createElement()
// document.createTextNode()
// Node.appendChild()
// Node.insertBefore()
// parentNode.removeChild()
// parentNode.replaceChild()

//buat elemen baru
//buat p
const buatP = document.createElement('p');
const isiP = document.createTextNode('Ini dari manipulasi node');

//simpan isiP kedalam buatP
buatP.appendChild(isiP);

//simpan buatP sesi akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(buatP);


//buat li baru
const liBaru = document.createElement('li');
const isiLi = document.createTextNode('ini dari manupulasi NODE');
liBaru.appendChild(isiLi);

const ul = document.querySelector('section#b ul');
const li = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li);



//removeChild()
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);


//replaceChild
//tag yg nak diganti
const sectionB = document.getElementById('b');
//lokasi ny
const p4 = sectionB.querySelector('p');
//diganti dgn apo
const ganti = document.createElement('h2');
const textGanti = document.createTextNode('JUDUL BARU DARI MANIPULASI NODE');
ganti.appendChild(textGanti);

sectionB.replaceChild(ganti, p4);


//menandai yg baru
buatP.style.backgroundColor = 'lightblue';
li.style.backgroundColor = 'lightblue';
ganti.style.backgroundColor = 'lightblue'





