const cont = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
cont.addEventListener('click', function(e){
    if(e.target.className == 'thumb'){
        jumbo.src = e.target.src;
    }
})