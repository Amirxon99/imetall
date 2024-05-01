const menuCloseBtn=document.getElementById("mobile-close-btn");
const menuOpenBtn=document.getElementById("btn-mobile-nav");
const header=document.getElementById("header");
const flag=document.getElementById("flag");
const heroTextUz=document.getElementById("hero-text-uz");
const heroTextRu=document.getElementById("hero-text-ru");
const flagPh=document.getElementById("flag-ph");
const mobileMenu=document.getElementsByClassName("mobile-menu-box")[0];

let lang=localStorage.getItem("lang")||"uz";
const html=document.getElementsByTagName("html");
if(lang=='ru'){
  let elements = document.querySelectorAll('.nav-list li a');
  elements.forEach(el => el.style="font-size:22px");
  heroTextRu&&(heroTextRu.style="display:block");
  heroTextUz&&(heroTextUz.style="display:none");
}else{
  heroTextRu&&(heroTextRu.style="display:none");
  heroTextUz&&(heroTextUz.style="display:block");
}
menuOpenBtn.addEventListener("click",()=>{  
    mobileMenu.classList.add("open");
})
menuCloseBtn.addEventListener("click",()=>{
  setTimeout(()=>{
    window.location.reload();
  },200)
    mobileMenu.classList.remove("open");
  
})
flag.src=lang=='ru'?"./assets/img/flags/flag_russian.jpg"  :"./assets/img/flags/flag_Uzbekistan.png";
flagPh.src=lang=='ru'?"./assets/img/flags/flag_russian.jpg"  :"./assets/img/flags/flag_Uzbekistan.png";

const selectedOption = document.getElementById('selected-option');
const optionsContainer = document.getElementById('options');
const options = document.querySelectorAll('.option');

selectedOption.addEventListener('click', function() {
  optionsContainer.style.display = optionsContainer.style.display === 'flex' ? 'none' : 'flex';
});

options.forEach(option => {
  option.addEventListener('click', function() {
     lang = this.getAttribute('data-lang');
   
     localStorage.setItem("lang",lang);
    const flag = this.querySelector('.flag');
    document.getElementById('flag').src = flag.src;
    optionsContainer.style.display = 'none';
    window.location.reload();
  });
});


