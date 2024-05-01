const calcByLength = document.getElementById("calc-length");
const calcByWeight = document.getElementById("calc-weight");
const result = document.getElementById("result");
const diametr = document.getElementById("diametr");
const lengthOfList = document.getElementById("length");
const wideOfList = document.getElementById("wide");
const countOfList = document.getElementById("count");
const wideBox = document.getElementById("wide-box");
const lengthBox = document.getElementById("length-box");
const countBox = document.getElementById("count-box");
const labelLength = document.getElementById("label-length");
const labelWide = document.getElementById("label-wide");
const labelCount = document.getElementById("label-count");
const labelDiametr = document.getElementById("label-diametr");
const calculatorName = document.getElementById("calculator-name");

const p = 7850;

let lang2 = localStorage.getItem("lang") || "uz";
let active = "length";
function calcView(){
  if(lang2=='uz'){
    calculatorName.textContent="LIST"
     calcByLength.textContent="Soni bo'yicha";
      calcByWeight.innerHTML="m<sup>2</sup>  bo'yicha";
      if(active=="length"){
        labelLength.textContent = "Uzunligi, m";
        labelWide.textContent = "Kengligi, m";
        labelDiametr.textContent="Qalinligi, mm"
        labelCount.textContent="Miqdori, dona"
        lengthOfList.value = "1";
        result.parentNode.children[2].textContent = "Og'irligi, kg";
        result.textContent =0;
        lengthBox.style="display:block";
        wideBox.style="display:block";
      }else{
        lengthBox.style="display:none";
        wideBox.style="display:none";
      }
      
  }else{
    calculatorName.textContent="ЛИСТ"
    calcByLength.textContent="За 1 шт.";
    calcByWeight.innerHTML=`За 1 м<sup>2</sup>`;
    if(active=="length"){
      labelLength.textContent = "Длина , м";
      labelWide.textContent = "Ширина , м.";
      labelDiametr.textContent="Толщина , мм."
      labelCount.textContent="Количество, шт."
      lengthOfList.value = "1";
      result.parentNode.children[2].textContent = "ВЕС ЛИСТА: кг.";
      result.textContent = 0;
      lengthBox.style="display:block";
      wideBox.style="display:block";
    }else{
      lengthBox.style="display:none";
      wideBox.style="display:none";
    }
  }
  calculatorArmature(+diametr.value, +lengthOfList.value, +wideOfList.value,+countOfList.value, active);
}
calcView();
calcByLength.addEventListener("click", (e) => {
  calcByWeight.classList.remove("active-calc-btn");
  calcByLength.classList.add("active-calc-btn");
  active = "length";
  calcView()
});

calcByWeight.addEventListener("click", (e) => {
  calcByLength.classList.remove("active-calc-btn");
  calcByWeight.classList.add("active-calc-btn");
  active = "weight";
  calcView();
});
diametr.addEventListener("input", (e) => {
  calculatorArmature(+e.target.value, +lengthOfList.value, +wideOfList.value,+countOfList.value, active);
});
lengthOfList.addEventListener("input", (e) => {
  calculatorArmature(+e.target.value, +diametr.value, +wideOfList.value,+countOfList.value, active);
});
wideOfList.addEventListener("input", (e) => {
  calculatorArmature(+e.target.value, +lengthOfList.value, +diametr.value,+countOfList.value, active);
});
countOfList.addEventListener("input", (e) => {
  calculatorArmature(+e.target.value, +lengthOfList.value, +wideOfList.value,+diametr.value, active);
});

calculatorArmature(+diametr.value, +lengthOfList.value, +wideOfList.value,+countOfList.value, active);
function calculatorArmature(d, l,w,c, active) {
  if (active == "length") {
    const m = p*d*l*w*c*0.001;  
    result.textContent = m.toFixed(2) + " kg";
  } else {
    const m = p*d*c*0.001;  
    result.textContent = Math.round(m)+ " kg";
  }
}
