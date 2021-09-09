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
//buat elemen baru
const buatP = document.createElement('p');
const isiP = document.createTextNode('Ini dari manipulasi node');

//simpan isiP kedalam buatP
buatP.appendChild(isiP);

//simpan buatP sesi akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(buatP);


  


//document.createElement()
// document.createTextNode()
// Node.appendChild()
// Node.insertBefore()
// parentNode.removeChild()
// parentNode.replaceChild()

