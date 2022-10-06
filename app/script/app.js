const preloader = document.querySelector('#preloader');

const alert = document.querySelector('#alert');

window.addEventListener('load', function(){
   
    preloader.classList.add('fadeloader');
    
});


let alertTimeout = setTimeout(timeout, 5000);

function timeout(){
    alert.classList.remove('show');
}

