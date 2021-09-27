// const card = document.querySelector('.card');
// const x = document.querySelector('.close');
// x.addEventListener('click', function(){
//     card.style.display = 'none';
// })

//DOM TRAVERSAL METHOD
// METHOD                         HASIL             
// -parentNode                 ->  node
// -parentElement              ->  element
// -nextSibling                ->  node
// // -nextElementSibling         ->  element
// // -previousSibling            ->  node
// // -previousElementSibling     ->  element


// //dom Traversal

// const close = document.querySelectorAll('.close');
// // for(let i = 0; i<close.length;i++){
// //     close[i].addEventListener('click', function(e){
// //         // close[i].parentElement.style.display = 'none';
// //         e.target.parentElement.style.display = 'none';
// //     });
// // }

// close.forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();//menghentikan aktifitas default html
//         e.stopPropagation();//menghentikan aktifitas fungsi lain pada parent yg sama
//     });
// });


// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card){
//     card.addEventListener('click', function(x){
//         alert('okat');
//     });
// });



// const nama = document.querySelector('.nama');
// console.log(nama.parentElement);
// console.log(nama.parentNode);
// console.log(nama.parentElement.parentElement);
// console.log(nama.nextSibling);
// console.log(nama.nextElementSibling);
// console.log(nama.previousElementSibling);




const container = document.querySelector('.container');

container.addEventListener('click', function(e){
    if(e.target.className == 'close'){
        e.target.parentElement.style.display = 'none';
    }
})