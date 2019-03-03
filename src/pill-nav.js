let navLinks = Array.from(document.getElementsByClassName("nav-link"));

navLinks.forEach(function(element){
    element.addEventListener('click', setActive);
});

function setActive(){
    clearActive();
    this.classList.add('active');
    console.log(this.getAttribute('class'));
}

function clearActive(){
    navLinks.forEach(function(element){
        element.classList.remove('active');
    });
}
