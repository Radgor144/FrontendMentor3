let circles = document.querySelectorAll('.circle');

let number = document.querySelector('#number');
let button = document.querySelector('#button');

let container = document.querySelector('.container');
let result = document.querySelector('.result');

let wybor;

// let previousClicked = (klikniete) => {
//     klikniete.classList.remove('clicked');
// }

button.addEventListener('click', () => {
    
    if(wybor){
        number.innerText = wybor;
         container.style.display = 'none';
         result.style.display = 'flex';
        }

});

circles.forEach((circle) => { 
    circle.addEventListener('click', () => {
        
        poprzednie = document.querySelector('.clicked');

        if(poprzednie){
            poprzednie.classList.remove('clicked');
            circle.classList.add('clicked');
            wybor = circle.innerText;
            
            // console.log("usunal");
        }else {
            circle.classList.add('clicked');
            wybor = circle.innerText;
            // console.log("dodal");
        }

    })})




