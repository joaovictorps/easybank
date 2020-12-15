function handleNav() {
    let divNav = document.getElementById('nav');
    let overlay = document.getElementById('overlay');
    let banner = document.getElementById('banner'); 

    if(divNav.classList.contains('none')) {
        divNav.classList.remove('none');
        overlay.classList.remove('none');
        banner.classList.add('brightness');
    } else {
        divNav.classList.add('none');
        overlay.classList.add('none');
        banner.classList.remove('brightness');
    }
}