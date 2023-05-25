// const button = document.querySelector('button');
// const h1 = document.querySelector('h1');   

// button.addEventListener('click', () => {
//     const newColor = generteRandomColor()
//     document.body.style.backgroundColor = newColor;
//     h1.innerHTML = newColor;
// });

const generteRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll('button')

for(let button of buttons) {
    button.addEventListener('click', colorize)
}

const headings = document.querySelectorAll('h1')

for(let heading of headings) {
    heading.addEventListener('click', colorize)
}

function colorize( ) {
    this.style.backgroundColor = generteRandomColor();
    this.style.color = generteRandomColor();
}