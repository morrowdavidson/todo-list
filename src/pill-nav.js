const navOptions = {
    navTitles: [ 
        "Today",
        "This week",
        "All tasks",
    ]
};

const snakeCase = function(string) {
    // wtf case
    string = string.replace(/\.\./g, " ");
  
    return string
      .trim()
      .toLowerCase()
      .replace(/[,\?\.]/g, "")
      .replace(/\-/g, " ")
      .split(" ")
      .join("-");
};

function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
}

const createNav = () => document.createElement('nav');
const createUl = () => document.createElement('ul');
const createLi = () => document.createElement('li');
const createLink = () => document.createElement('a');

let navAction = (navLink) => {
    setActive(navLink);
    let navLinkId = navLink.getAttribute('id');
    showContent(navLinkId);
};

let setActive = (navLink) => {
    clearActive();
    navLink.classList.add('active');
};

let clearActive = () => {
    const navLinks = Array.from(document.getElementsByClassName('nav-link'));
    navLinks.forEach(function(navListItem){
        navListItem.classList.remove('active');
    });
};

function showContent(){

}

const navList = [];

function constructNavList () {

    navOptions.navTitles.forEach(linkTxt => {
        let linkAnchor = snakeCase(linkTxt);
        let linkId = linkAnchor + '-nav'; 
        
        let li = createLi();
        li.setAttribute('class','nav-item');
        let link = createLink();
        setAttributes(link, {
            'id'    :   linkId,
            'class' :   "nav-link",
            'href'  :    '#' + linkAnchor,     
        });
        link.innerHTML = linkTxt;
        
        link.addEventListener('click', function(){
            navAction(this);
        });

        li.appendChild(link);

        navList.push(li);
    });
    return navList;
} 

function constructNav() {
    const container = document.getElementById('header');

    constructNavList ();
    let nav = createNav();
    setAttributes(nav, {'id': 'pill-nav'});

    let ul = createUl();
    setAttributes(ul, {
        'id'    :   'list-nav', 
        'class' :   'nav nav-pills nav-fill'
    });

    navList.forEach(navItem => {
        ul.appendChild(navItem);
    }); 
    nav.appendChild(ul);
    container.appendChild(nav);
}

constructNav();
setActive(navList[0].firstChild);