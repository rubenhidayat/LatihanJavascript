//event handler
const p2 = document.querySelector('.p2');
function ubahWarna(){
    p2.style.backgroundColor = 'lightblue';
}
p2.onclick = ubahWarna;

//add event listener
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
    const ul = document.querySelector('section#b ul');
    const li = document.createElement('li');
    const textLi = document.createTextNode('li baru');
    li.appendChild(textLi);
    ul.appendChild(li);
});