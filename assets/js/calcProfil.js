const calcByLength = document.getElementById("calc-length");
const calcByWeight = document.getElementById("calc-weight");
const result = document.getElementById("result");
const diametrA = document.getElementById("diametrA");
const diametrB = document.getElementById("diametrB");
const diametrS = document.getElementById("diametrS");
const lengthOfProfil = document.getElementById("length");
const labelLength = document.getElementById("label-length");
const labelDiametrA = document.getElementById("label-diametrA");
const labelDiametrB = document.getElementById("label-diametrB");
const labelDiametrS = document.getElementById("label-diametrS");
const calculatorName = document.getElementById("calculator-name");


let lang2 = localStorage.getItem("lang") || "uz";
let active = "length";
function calcView(){
  if(lang2=='uz'){
    calculatorName.textContent="Profil";
    calcByLength.textContent="Uzunligi bo'yicha";
      calcByWeight.textContent="Vazni bo'yicha";
      if(active=="length"){
        labelLength.textContent = "Uzunligi, m";
        labelDiametrA.textContent="Tomoni A, mm."
        labelDiametrB.textContent="Tomoni B, mm."
        labelDiametrS.textContent="Qalinligi S, mm."
        lengthOfProfil.value = "1";
        result.parentNode.children[2].textContent = "Og'irligi, kg";
        result.textContent = result.textContent.slice(0, -2) + " kg";
      }else{
        labelLength.textContent = "Og'irligi, kg";
        lengthOfProfil.value = "1000";
        result.parentNode.children[2].textContent = "Uzunligi, m";
        result.textContent = result.textContent.slice(0, -2) + " m";
      }
      
  }else{
    calculatorName.textContent="Профиль";
    calcByLength.textContent="По длине";
    calcByWeight.textContent="По весу";
    if (active=="weight") {
      labelLength.textContent = "Вес: кг";
    lengthOfProfil.value = "1000";
    result.parentNode.children[2].textContent = "Длина, м.";
    result.textContent = result.textContent.slice(0, -2) + " м"; 
    }else{
      labelDiametrA.textContent="Сторона A, мм."
      labelDiametrB.textContent="Сторона B, мм."
      labelDiametrS.textContent="Толщина стенки S, мм. "
      labelLength.textContent = "Длина, м.";
      lengthOfProfil.value = "1";
      result.parentNode.children[2].textContent = "ВЕС ПРОФИЛЬНОЙ ТРУБЫ: кг";
      result.textContent = result.textContent.slice(0, -2) + " кг";
    }
  }
}
calcView();
const p = 7850;
calcByLength.addEventListener("click", (e) => {
  calcByWeight.classList.remove("active-calc-btn");
  calcByLength.classList.add("active-calc-btn");
  active = "length";
  calcView();
  calculatorArmature(+diametrA.value,+diametrB.value,+diametrS.value, +lengthOfProfil.value, active);
});

calcByWeight.addEventListener("click", (e) => {
  calcByLength.classList.remove("active-calc-btn");
  calcByWeight.classList.add("active-calc-btn");
  active = "weight";
  calcView();
  calculatorArmature(+diametrA.value,+diametrB.value,+diametrS.value, +lengthOfProfil.value, active);
});
diametrA.addEventListener("input", (e) => {
    calculatorArmature(+diametrA.value,+diametrB.value,+diametrS.value, +lengthOfProfil.value, active);
});
diametrB.addEventListener("input", (e) => {
    calculatorArmature(+diametrA.value,+diametrB.value,+diametrS.value, +lengthOfProfil.value, active);
});
diametrS.addEventListener("input", (e) => {
    calculatorArmature(+diametrA.value,+diametrB.value,+diametrS.value, +lengthOfProfil.value, active);
});
lengthOfProfil.addEventListener("input", (e) => {
    calculatorArmature(+diametrA.value,+diametrB.value,+diametrS.value, +lengthOfProfil.value, active);
});

calculatorArmature(+diametrA.value,+diametrB.value,+diametrS.value, +lengthOfProfil.value, active);
function calculatorArmature(A,B,S, l, active) {
  // if(d==0 || l==0){
  //     result.textContent="0.000 "+result.textContent.slice(0,-2);
  // }
  if (active == "length") {
    const m = 0.0157*S*(A+B-2.86*S)*l;
    result.textContent = m.toFixed(3) + " kg";
  } else {
    const m = l / (0.0157*S*(A+B-2.86*S));
    if (m.toString().startsWith("I")) {
      result.textContent = "0.000 m";
    } else {
      result.textContent = Math.round(m) + " ,m";
    }
  }
}
