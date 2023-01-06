const onee = document.getElementById('one');
const twoo = document.getElementById('two');
const threee = document.getElementById('three');

// container.forEach(element => {
//     element.addEventListener('click', function() {
//         container.forEach(container => container.classList.remove('active2'));

//         this.classList.add('active2');
//     })
// });

function one() {
    if(onee.classList.contains('active')){
        onee.classList.remove('active');
    }
    else {
        onee.classList.add('active');
    }
}
function two() {
    if(twoo.classList.contains('active')){
        twoo.classList.remove('active');
    }
    else{
        twoo.classList.add('active');
    }
}
function three() {
    if(threee.classList.contains('active')){
        threee.classList.remove('active');
    }
    else {
        threee.classList.add('active');
    }
} 
