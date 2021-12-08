let navbar = document.querySelector('.header .navbar');
let menu_bar = document.querySelector('#menu-btn');

let color_theme = document.querySelector('#toggle-theme');

menu_bar.onclick = () => {

    navbar.classList.toggle('active');
}

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{

    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})

color_theme.onclick = () =>{

    color_theme.classList.toggle('fa-sun');

    if(color_theme.classList.contains('fa-sun')){
        document.querySelector('body').classList.add('active')
    }
    else{
        document.querySelector('body').classList.remove('active')
    }
}
