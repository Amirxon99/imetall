const calcByLength = document.getElementById("calc-length");
const calcByWeight = document.getElementById("calc-weight");
const calcByNoGOST = document.getElementById("calc-no-gost");
const calcByGOST = document.getElementById("calc-gost");
const result = document.getElementById("result");
const diametr = document.getElementById("diametr");
const weight = document.getElementById("weight");
const weightS = document.getElementById("weightS");
const weightT = document.getElementById("weightT");
const lengthOfArmature = document.getElementById("length");
const labelLength = document.getElementById("label-length");
const labelWeight = document.getElementById("label-weight");
const labelWeightS = document.getElementById("label-weightS");
const labelWeightT = document.getElementById("label-weightT");
const labelDiametr = document.getElementById("label-diametr");
const calculatorName = document.getElementById("calculator-name");
const calcNoGostBtn = document.getElementById("calc-no-gost");
const calcGostBtn = document.getElementById("calc-gost");
const selectGostBox = document.getElementById("select-gost-box");
const selectGost = document.getElementById("select-gost");
const selectGostLabel = document.getElementById("select-gost-label");

const dataShveller= [
  {
    value: "",
    massa: 0,
  },
  {
    value: "Швеллер 5Э",
    massa: 4.79
  },
  {
    value: "Швеллер 5У",
    massa: 4.84
  },
  {
    value: "Швеллер 5П",
    massa: 4.84
  },
  {
    value: "Швеллер 6.5Э",
    massa: 5.82
  },
  {
    value: "Швеллер 6.5У",
    massa: 5.9
  },
  {
    value: "Швеллер 6.5П",
    massa: 5.9
  },
  {
    value: "Швеллер 8Э",
    massa: 6.92
  },
  {
    value: "Швеллер 8У",
    massa: 7.05
  },
  {
    value: "Швеллер 8П",
    massa: 7.05
  },
  {
    value: "Швеллер 8С",
    massa: 9.26
  },
  {
    value: "Швеллер 10Э",
    massa: 8.47
  },
  {
    value: "Швеллер 10У",
    massa: 8.59
  },
  {
    value: "Швеллер 10П",
    massa: 8.59
  },
  {
    value: "Швеллер 12Л",
    massa: 5.02
  },
  {
    value: "Швеллер 12Э",
    massa: 10.24
  },
  {
    value: "Швеллер 12У",
    massa: 10.4
  },
  {
    value: "Швеллер 12П",
    massa: 10.4
  },
  {
    value: "Швеллер 14Л",
    massa: 5.94
  },
  {
    value: "Швеллер 14Э",
    massa: 12.15
  },
  {
    value: "Швеллер 14У",
    massa: 12.3
  },
  {
    value: "Швеллер 14П",
    massa: 12.3
  },
  {
    value: "Швеллер 14С",
    massa: 14.53
  },
  {
    value: "Швеллер 14Са",
    massa: 16.72
  },
  {
    value: "Швеллер 16Л",
    massa: 7.1
  },
  {
    value: "Швеллер 16С",
    massa: 17.53
  },
  {
    value: "Швеллер 16Э",
    massa: 14.01
  },
  {
    value: "Швеллер 16У",
    massa: 14.2
  },
  {
    value: "Швеллер 16П",
    massa: 14.2
  },
  {
    value: "Швеллер 16Са",
    massa: 19.74
  },
  {
    value: "Швеллер 16аУ",
    massa: 15.3
  },
  {
    value: "Швеллер 16аП",
    massa: 15.3
  },
  {
    value: "Швеллер 18Л",
    massa: 8.49
  },
  {
    value: "Швеллер 18С",
    massa: 20.2
  },
  {
    value: "Швеллер 18Э",
    massa: 16.01
  },
  {
    value: "Швеллер 18У",
    massa: 16.3
  },
  {
    value: "Швеллер 18П",
    massa: 16.3
  },
  {
    value: "Швеллер 18Са",
    massa: 23
  },
  {
    value: "Швеллер 18аУ",
    massa: 17.4
  },
  {
    value: "Швеллер 18аП",
    massa: 17.4
  },
  {
    value: "Швеллер 18Сб",
    massa: 26.72
  },
  {
    value: "Швеллер 20Л",
    massa: 10.12
  },
  {
    value: "Швеллер 20С",
    massa: 22.63
  },
  {
    value: "Швеллер 20Са",
    massa: 25.77
  },
  {
    value: "Швеллер 20Э",
    massa: 18.07
  },
  {
    value: "Швеллер 20У",
    massa: 18.4
  },
  {
    value: "Швеллер 20П",
    massa: 18.4
  },
  {
    value: "Швеллер 20Сб",
    massa: 28.71
  },
  {
    value: "Швеллер 22Л",
    massa: 11.86
  },
  {
    value: "Швеллер 22Э",
    massa: 20.69
  },
  {
    value: "Швеллер 22У",
    massa: 21
  },
  {
    value: "Швеллер 22П",
    massa: 21
  },
  {
    value: "Швеллер 24Л",
    massa: 13.66
  },
  {
    value: "Швеллер 24С",
    massa: 34.9
  },
  {
    value: "Швеллер 24Э",
    massa: 23.69
  },
  {
    value: "Швеллер 24У",
    massa: 24
  },
  {
    value: "Швеллер 24П",
    massa: 24
  },
  {
    value: "Швеллер 26С",
    massa: 34.61
  },
  {
    value: "Швеллер 26Са",
    massa: 39.72
  },
  {
    value: "Швеллер 27Л",
    massa: 16.3
  },
  {
    value: "Швеллер 27Э",
    massa: 27.37
  },
  {
    value: "Швеллер 27У",
    massa: 27.7
  },
  {
    value: "Швеллер 27П",
    massa: 27.7
  },
  {
    value: "Швеллер 30Л",
    massa: 19.07
  },
  {
    value: "Швеллер 30С",
    massa: 34.44
  },
  {
    value: "Швеллер 30Са",
    massa: 39.15
  },
  {
    value: "Швеллер 30Сб",
    massa: 43.86
  },
  {
    value: "Швеллер 30Э",
    massa: 31.35
  },
  {
    value: "Швеллер 30У",
    massa: 31.8
  },
  {
    value: "Швеллер 30П",
    massa: 31.8
  },
  {
    value: "Швеллер 33Э",
    massa: 36.14
  },
  {
    value: "Швеллер 33У",
    massa: 36.5
  },
  {
    value: "Швеллер 33П",
    massa: 36.5
  },
  {
    value: "Швеллер 36Э",
    massa: 41.53
  },
  {
    value: "Швеллер 36У",
    massa: 41.9
  },
  {
    value: "Швеллер 36П",
    massa: 41.9
  },
  {
    value: "Швеллер 40Э",
    massa: 47.97
  },
  {
    value: "Швеллер 40У",
    massa: 48.3
  },
  {
    value: "Швеллер 40П",
    massa: 48.3
  }
]



let lang2 = localStorage.getItem("lang") || "uz";
let active = "length";
let activeGost = "NoGost";
function calcView(){
  if(lang2=='uz'){
    calculatorName.textContent="Shveller";
    calcNoGostBtn.textContent=" O'lcham bo'yicha";
    calcGostBtn.textContent="ГОСТ bo'yicha";
    calcByLength.textContent="Uzunligi bo'yicha";
      calcByWeight.textContent="Vazni bo'yicha";
      if(active=="length"){
        labelLength.textContent = "Uzunligi, m";
        labelDiametr.textContent="Shveller balandligi H, mm."
        labelWeight.textContent="Raf kengligi S, mm."
        labelWeightS.textContent="Devor qalinligi S, mm."
        labelWeightT.textContent="Raf qalinligi T, mm."
        lengthOfArmature.value = "1";
        result.parentNode.children[2].textContent = "Og'irligi, kg";
        result.textContent = result.textContent.slice(0, -2) + " kg";
      }else{
        labelLength.textContent = "Og'irligi, kg";
        lengthOfArmature.value = "1000";
        result.parentNode.children[2].textContent = "Uzunligi, m";
        result.textContent = result.textContent.slice(0, -2) + " m";
      }
      if(activeGost=="NoGost"){
        selectGostBox.style="display:none";
        labelWeight.style="display:block;"
        labelWeightS.style="display:block;"
        labelWeightT.style="display:block;"
        labelDiametr.style="display:block;"
        diametr.style="display:block;"
        weight.style="display:block;"
        weightS.style="display:block;"
        weightT.style="display:block;"
      }else{
        selectGostLabel.textContent="Ugolok turini tanlang";
        selectGostBox.style="display:block";
        labelWeight.style="display:none;"
        labelWeightS.style="display:none;"
        labelWeightT.style="display:none;"
        labelDiametr.style="display:none;"
        diametr.style="display:none;"
        weight.style="display:none;"
        weightS.style="display:none;"
        weightT.style="display:none;"
      }
      
  }else{
    calcNoGostBtn.textContent="По размеру";
    calcGostBtn.textContent="По ГОСТу";
    calculatorName.textContent="Швеллер";
    calcByLength.textContent="По длине";
    calcByWeight.textContent="По весу";
    if (active=="weight") {
      labelLength.textContent = "Вес: кг";
    lengthOfArmature.value = "1000";
    result.parentNode.children[2].textContent = "Длина, м.";
    result.textContent = result.textContent.slice(0, -2) + " м"; 
    }else{
      labelDiametr.textContent="Высота швеллера H, мм"
      labelLength.textContent = "Длина, м.";
      labelWeight.textContent = "Ширина полки S, мм.";
      labelWeightS.textContent = "Толщина стенки S, мм.";
      labelWeightT.textContent = "Толщина полки T, мм.";
      lengthOfArmature.value = "1";
      result.parentNode.children[2].textContent = "ВЕС ШВЕЛЛЕРА: кг";
      result.textContent = result.textContent.slice(0, -2) + " кг";
    }
    if(activeGost=="NoGost"){
      selectGostBox.style="display:none";
      labelWeight.style="display:block;"
      labelWeightS.style="display:block;"
      labelWeightT.style="display:block;"
      labelDiametr.style="display:block;"
      diametr.style="display:block;"
      weight.style="display:block;"
      weightS.style="display:block;"
      weightT.style="display:block;"
    }else{
      selectGostLabel.textContent="Выберите сортамент";
      selectGostBox.style="display:block";
      labelWeight.style="display:none;"
      labelWeightS.style="display:none;"
      labelWeightT.style="display:none;"
      labelDiametr.style="display:none;"
      diametr.style="display:none;"
      weight.style="display:none;"
      weightS.style="display:none;"
      weightT.style="display:none;"
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
  calculatorArmature(+diametr.value, +lengthOfArmature.value,+weight.value,+weightS.value,+weightT.value, active,activeGost);
});
calcGostBtn.addEventListener("click", (e) => {
  calcNoGostBtn.classList.remove("active-calc-btn");
  calcGostBtn.classList.add("active-calc-btn");
  activeGost = "Gost";
  calcView();
  calculatorArmature(+diametr.value, +lengthOfArmature.value,+weight.value,+weightS.value,+weightT.value, active,activeGost);
});
calcNoGostBtn.addEventListener("click", (e) => {
  calcNoGostBtn.classList.add("active-calc-btn");
  calcGostBtn.classList.remove("active-calc-btn");
  activeGost = "NoGost";
  calcView();
  calculatorArmature(+diametr.value, +lengthOfArmature.value,+weight.value,+weightS.value,+weightT.value, active,activeGost);
});
calcByWeight.addEventListener("click", (e) => {
  calcByLength.classList.remove("active-calc-btn");
  calcByWeight.classList.add("active-calc-btn");
  active = "weight";
  calcView();
  calculatorArmature(+diametr.value, +lengthOfArmature.value,+weight.value,+weightS.value,+weightT.value, active,activeGost);
});
diametr.addEventListener("input", (e) => {
  calculatorArmature(+e.target.value, +lengthOfArmature.value,+weight.value,+weightS.value,+weightT.value, active,activeGost);
});
selectGost.addEventListener("input", (e) => {
  calculatorArmature(+diametr.value, +lengthOfArmature.value,+weight.value,+weightS.value,+weightT.value, active,activeGost);
});
lengthOfArmature.addEventListener("input", (e) => {
  calculatorArmature(+diametr.value, +e.target.value,+weight.value,+weightS.value,+weightT.value, active,activeGost);
});
weight.addEventListener("input", (e) => {
    calculatorArmature(+diametr.value, +lengthOfArmature.value,+e.target.value,+weightS.value,+weightT.value, active,activeGost);
  });
  weightS.addEventListener("input", (e) => {
    calculatorArmature(+diametr.value, +lengthOfArmature.value,+weight.value, +e.target.value,+weightT.value, active,activeGost);
  });
  weightT.addEventListener("input", (e) => {
    calculatorArmature(+diametr.value, +lengthOfArmature.value,+weight.value,+weightS.value, +e.target.value, active,activeGost);
  });
calculatorArmature(+diametr.value, +lengthOfArmature.value,+weight.value, active,activeGost);
function calculatorArmature(d, l,s,wS,wT, active,gost) {
  
 if(gost=="NoGost"){
  if (active == "length") {
    if(wS==0||wT==0){
     return result.textContent =  "0.000 kg";
   }
    const m = p*(2*d*s-s*s)*l*0.000001;
    result.textContent = m.toFixed(3) + " kg";
  } else {
    if(wS==0||wT==0){
     return result.textContent = "0.000 m";
    }
    const m = l / (p*(2*d*s-s*s)*0.000001);
    if (m.toString().startsWith("I")) {
      result.textContent = "0.000 m";
    } else {
      result.textContent = Math.round(m) + " ,m";
    }
  }
 }else{
  const gostType=selectGost.value;
  const selectedUgolok = dataShveller.filter(ugolok => {
    if( ugolok.value==gostType &&gostType!=""){;
       return ugolok.massa
    }
  });
  const typeMassa=selectedUgolok.length!=0?+selectedUgolok[0].massa:0;
  if (active == "length") {
    const m = typeMassa*l;
    result.textContent = m.toFixed(3) + " kg";
  } else {
    const m = l / typeMassa;
    if (m.toString().startsWith("I")) {
      result.textContent = "0.000 m";
    } else {
      result.textContent = Math.round(m) + " ,m";
    }
  }

 }
  
}
