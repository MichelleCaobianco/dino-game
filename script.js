const dino = document.querySelector('.dino');

function handleKeyUp(event){
    if (event.keyCode === 32){
        console.log('Pressionou espaço!');
    }
}
function jump(){
    let position = 0;

    let upInterval = setInterval(() => {
        if (position >= 150){

        }
        //subindo
        position += 20;
        dino.style.bottom = position + 'px';
    },20);
}

document.addEventListener('keyup', handleKeyUp);

