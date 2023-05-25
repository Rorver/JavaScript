const form = document.querySelector('#form');
const input = document.querySelector('input');
const list = document.querySelector('#notes');

// input.addEventListener('change', (evt) => {
//     console.log('nilai berubah');
// });

input.addEventListener('input', (evt) => {
    document.querySelector('h1').innerText = input.value;
    console.log('nilai berhasil diinput');
});

form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const noteValue = input.value;
    const newList = document.createElement('li');
    newList.innerText = noteValue;
    list.append(newList);
    input.value = '';
});

list.addEventListener('click', (evt) => {
    evt.target.nodeName === 'LI' && evt.target.remove();
    console.dir(evt.target); 
})

// const lis = document.querySelectorAll('li');
// for(let li of lis) {
//     li.addEventListener('click', function() {
//         li.remove();
//     });
// }