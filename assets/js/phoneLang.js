const selectedOptionPh = document.getElementById('selected-flag');
const optionsContainerPh = document.getElementById('options-ph');
const phoneMenus = document.getElementById('phone-menus');
const optionsPh = document.querySelectorAll('.option-ph');
function changeLang(){
  let langg=localStorage.getItem("lang") || "uz";
  if(langg=='uz'){
    phoneMenus.children[0].children[0].textContent="Bosh Sahifa";
    phoneMenus.children[1].children[0].textContent="Kompaniya haqida";
    phoneMenus.children[2].children[0].textContent="Metall mahsulotlar";
    phoneMenus.children[3].children[0].textContent="Aloqa";
    phoneMenus.children[4].children[0].textContent="Kalkulyator";
  }else{
    phoneMenus.children[0].children[0].textContent="Главная";
    phoneMenus.children[1].children[0].textContent="О компании";
    phoneMenus.children[2].children[0].textContent="Металлические изделия";
    phoneMenus.children[3].children[0].textContent="Контакты";
    phoneMenus.children[4].children[0].textContent="Калькулятор";
  }
}
changeLang()

selectedOptionPh.addEventListener('click', function() {
  optionsContainerPh.style.display = optionsContainerPh.style.display === 'flex' ? 'none' : 'flex';
});

optionsPh.forEach(option => {
  option.addEventListener('click', function() {
    const  langPhoneMenu = this.getAttribute('data-lang-ph');
    const flag = this.querySelector('.flag-ph');
    localStorage.setItem("lang",langPhoneMenu);
    changeLang();
    document.getElementById('flag-ph').src = flag.src;
    optionsContainerPh.style.display = 'none';
  });
});

