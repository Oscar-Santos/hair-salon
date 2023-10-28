/*------------ SHOW MENU-------------*/
const showMneu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    /*valida se se existe as variaveis*/
    if (toggle && nav) {
        /*aqui adiciono a class show-menu na div com a class nav__menu*/
        toggle.addEventListener('click', () => {
            /*adicina a class show-menu na div que tem o id nav-menu */
            nav.classList.toggle('show-menu')
        })
    }
}
showMneu('nav-toggle', 'nav')

/*------------ REMOVER MENU MOBILE -------------*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    const navMenu = document.getElementById('nav')
    /*Quando um link ou o botão close for clicado a class show-menu será removido*/
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== DEIXA O LINK CLICADO COM A CLASS ACTIVE-LINK ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(L => L.classList.remove('active-link'))
        this.classList.add('active-link')
    }
}

linkColor.forEach(L=> L.addEventListener('click', colorLink))
/*==================== MUDAR A COR DO HEADER ====================*/
function scrollHeader(){
    const scrollHeader = document.getElementById('header')
    if(this.scrollY >= 100) scrollHeader.classList.add('scroll-header'); else scrollHeader.classList.remove('scroll-header')

}
window.addEventListener('scroll', scrollHeader)

/*==================== PAGINATION IN GALLERY ====================*/

// Get button by ID
const loadMoreBtn = document.getElementById('loadMoreBtn');

// Number of images to show per click
const numImages = 6;

// Get total images  
const totalImages = document.querySelectorAll('.gallery__img').length;

// Current page starts at 1 
let currentPage = 1;

// Init - show first 6 images
for(let i = 0; i < numImages; i++) {
  document.querySelectorAll('.gallery__img')[i].style.display = 'block';
}

// Load more click handler
loadMoreBtn.addEventListener('click', () => {

  // Increase page
  currentPage++;

  // Calc image indexes
  const startIndex = (currentPage - 1) * numImages;
  const endIndex = currentPage * numImages;

  // Hide all first
  document.querySelectorAll('.gallery__img').forEach(img => {
    img.style.display = 'none';
  });

  // Show next 6 
  for(let i = startIndex; i < endIndex; i++) {
    if(i < totalImages){
      document.querySelectorAll('.gallery__img')[i].style.display = 'block';
    }
  }

  // Check if more to load
  if(endIndex >= totalImages) { 
    loadMoreBtn.disabled = true;
  }



});


