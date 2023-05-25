document.querySelector('button').addEventListener('click', (evt) => {
    console.log(evt);
})

const input1 = document.querySelector('input');
// input1.addEventListener('keydown', (evt) => {
//     console.log(evt.key);
//     console.log(evt.code);
// })

input1.addEventListener('keydown', (evt) => {
    switch(evt.code) {
        case 'ArrowUp' : 
            console.log('Tombol arah Atas')
            break;
        case 'ArrowDown' : 
            console.log('Tombol arah Bawah')
            break;
        case 'ArrowRight' : 
            console.log('Tombol arah Kanan')
            break;
        case 'ArrowLeft' : 
            console.log('Tombol arah Kiri')
            break;
            default:
                console.log('diabaikan')
    }
})

// const input2 = document.querySelector('input');
// input2.addEventListener('keyup', () => {
//     console.log('rilis')
// })