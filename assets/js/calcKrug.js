const calcByLength = document.getElementById("calc-length");
const calcByWeight = document.getElementById("calc-weight");
const result = document.getElementById("result");
const diametr = document.getElementById("diametr");
const lengthOfArmature = document.getElementById("length");
const labelLength = document.getElementById("label-length");
const labelDiametr = document.getElementById("label-diametr");
const calculatorName = document.getElementById("calculator-name");


let lang2 = localStorage.getItem("lang") || "uz";
let active = "length";
function calcView(){
  if(lang2=='uz'){
    calculatorName.textContent="Krug";
    calcByLength.textContent="Uzunligi bo'yicha";
      calcByWeight.textContent="Vazni bo'yicha";
      if(active=="length"){
        labelLength.textContent = "Uzunligi, m";
        labelDiametr.textContent="Diametr D, mm"
        lengthOfArmature.value = "1";
        result.parentNode.children[2].textContent = "Og'irligi, kg";
        result.textContent = result.textContent.slice(0, -2) + " kg";
      }else{
        labelLength.textContent = "Og'irligi, kg";
        lengthOfArmature.value = "1000";
        result.parentNode.children[2].textContent = "Uzunligi, m";
        result.textContent = result.textContent.slice(0, -2) + " m";
      }
      
  }else{
    calculatorName.textContent="КРУГ";
    calcByLength.textContent="По длине";
    calcByWeight.textContent="По весу";
    if (active=="weight") {
      labelLength.textContent = "Вес: кг";
    lengthOfArmature.value = "1000";
    result.parentNode.children[2].textContent = "Длина, м.";
    result.textContent = result.textContent.slice(0, -2) + " м"; 
    }else{
      labelDiametr.textContent="Диаметр D, мм."
      labelLength.textContent = "Длина, м.";
      lengthOfArmature.value = "1";
      result.parentNode.children[2].textContent = "Вес арматуры: кг";
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
  calculatorArmature(+diametr.value, +lengthOfArmature.value, active);
});

calcByWeight.addEventListener("click", (e) => {
  calcByLength.classList.remove("active-calc-btn");
  calcByWeight.classList.add("active-calc-btn");
  active = "weight";
  calcView();
  calculatorArmature(+diametr.value, +lengthOfArmature.value, active);
});
diametr.addEventListener("input", (e) => {
  calculatorArmature(+e.target.value, +lengthOfArmature.value, active);
});
lengthOfArmature.addEventListener("input", (e) => {
  calculatorArmature(+diametr.value, +e.target.value, active);
});

calculatorArmature(+diametr.value, +lengthOfArmature.value, active);
function calculatorArmature(d, l, active) {
  // if(d==0 || l==0){
  //     result.textContent="0.000 "+result.textContent.slice(0,-2);
  // }
  if (active == "length") {
    const m = ((Math.PI * p * d * d) / 4) * l * 0.000001;
    result.textContent = m.toFixed(3) + " kg";
  } else {
    const m = l / ((Math.PI * p * d * d * 0.000001) / 4);
    if (m.toString().startsWith("I")) {
      result.textContent = "0.000 m";
    } else {
      result.textContent = Math.round(m) + " ,m";
    }
  }
}
