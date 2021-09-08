//DOM Selection
//document.getElementById() -> element
// const judul = document.getElementById('judul');
// judul.style.color = 'blue';
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = 'Ruben Hidayat';


// //document.getElementsByTagName()
// //->HTMLCollections
// const p = document.getElementsByTagName('p');
// for(let i = 0; i<p.length; i++){
//     p[i].style.background = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '30px';

// //document.getElementByClassName()
// //->HTMLCollections
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'ini diubah menggunakan javascript';


//document.querySelector() -> element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// const p = document.querySelector('p');
// p.innerHTML = 'ini diubah melalui js';



//document.querySelectorAll()
// const p = document.querySelectorAll('p');
// for(i = 0; i<p.length;i++){
//     p[i].style.background = 'lightblue';
// }


//mengubah node root;
// const p4 = document.querySelectorAll('p');
// p4[3].style.backgroundColor = 'lightblue';

// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'orange';

// const sectionB = document.querySelector('section#b');
// const p4 = sectionB.getElementsByTagName('p')[0];
// p4.style.backgroundColor = 'orange';