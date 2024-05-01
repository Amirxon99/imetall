const calcByLength = document.getElementById("calc-length");
const calcByWeight = document.getElementById("calc-weight");
const calcByNoGOST = document.getElementById("calc-no-gost");
const calcByGOST = document.getElementById("calc-gost");
const result = document.getElementById("result");
const diametr = document.getElementById("diametr");
const weight = document.getElementById("weight");
const lengthOfArmature = document.getElementById("length");
const labelLength = document.getElementById("label-length");
const labelWeight = document.getElementById("label-weight");
const labelDiametr = document.getElementById("label-diametr");
const calculatorName = document.getElementById("calculator-name");
const calcNoGostBtn = document.getElementById("calc-no-gost");
const calcGostBtn = document.getElementById("calc-gost");
const selectGostBox = document.getElementById("select-gost-box");
const selectGost = document.getElementById("select-gost");
const selectGostLabel = document.getElementById("select-gost-label");

const dataUgolok=[
  {
    typeUgolok: "20×20×3",
    massa: "0,890",
    ploshad: "1,130",
    Ix: "0,400",
    Wx: "0,280",
    Iy: "0,400",
    Wy: "0,280"
  },
  {
    typeUgolok: "20×20×4",
    massa: "1,150",
    ploshad: "1,460",
    Ix: "0,500",
    Wx: "0,370",
    Iy: "0,500",
    Wy: "0,370"
  },
  {
    typeUgolok: "25×25×3",
    massa: "1,120",
    ploshad: "1,430",
    Ix: "0,810",
    Wx: "0,460",
    Iy: "0,810",
    Wy: "0,460"
  },
  {
    typeUgolok: "25×25×4",
    massa: "1,460",
    ploshad: "1,860",
    Ix: "1,030",
    Wx: "0,590",
    Iy: "1,030",
    Wy: "0,590"
  },
  {
    typeUgolok: "25×25×5",
    massa: "1,780",
    ploshad: "2,270",
    Ix: "1,220",
    Wx: "0,710",
    Iy: "1,220",
    Wy: "0,710"
  },
  {
    typeUgolok: "28×28×3",
    massa: "1,270",
    ploshad: "1,620",
    Ix: "1,160",
    Wx: "0,580",
    Iy: "1,160",
    Wy: "0,580"
  },
  {
    typeUgolok: "30×30×3",
    massa: "1,360",
    ploshad: "1,740",
    Ix: "1,450",
    Wx: "0,670",
    Iy: "1,450",
    Wy: "0,670"
  },
  {
    typeUgolok: "30×30×4",
    massa: "1,780",
    ploshad: "2,270",
    Ix: "1,840",
    Wx: "0,870",
    Iy: "1,840",
    Wy: "0,870"
  },
  {
    typeUgolok: "30×30×5",
    massa: "2,180",
    ploshad: "2,780",
    Ix: "2,200",
    Wx: "1,060",
    Iy: "2,200",
    Wy: "1,060"
  },
  {
    typeUgolok: "32×32×3",
    massa: "1,460",
    ploshad: "1,860",
    Ix: "1,770",
    Wx: "0,770",
    Iy: "1,770",
    Wy: "0,770"
  },
  {
    typeUgolok: "32×32×4",
    massa: "1,910",
    ploshad: "2,430",
    Ix: "2,260",
    Wx: "1,000",
    Iy: "2,260",
    Wy: "1,000"
  },
  {
    typeUgolok: "35×35×3",
    massa: "1,600",
    ploshad: "2,040",
    Ix: "2,350",
    Wx: "0,930",
    Iy: "2,350",
    Wy: "0,930"
  },
  {
    typeUgolok: "35×35×4",
    massa: "2,100",
    ploshad: "2,670",
    Ix: "3,010",
    Wx: "1,210",
    Iy: "3,010",
    Wy: "1,210"
  },
  {
    typeUgolok: "35×35×5",
    massa: "2,580",
    ploshad: "3,280",
    Ix: "3,610",
    Wx: "1,470",
    Iy: "3,610",
    Wy: "1,470"
  },
  {
    typeUgolok: "40×40×3",
    massa: "1,850",
    ploshad: "2,350",
    Ix: "3,550",
    Wx: "1,220",
    Iy: "3,550",
    Wy: "1,220"
  },
  {
    typeUgolok: "40×40×4",
    massa: "2,420",
    ploshad: "3,080",
    Ix: "4,580",
    Wx: "1,600",
    Iy: "4,580",
    Wy: "1,600"
  },
  {
    typeUgolok: "40×40×5",
    massa: "2,980",
    ploshad: "3,790",
    Ix: "5,530",
    Wx: "1,950",
    Iy: "5,530",
    Wy: "1,950"
  },
  {
    typeUgolok: "40×40×6",
    massa: "3,520",
    ploshad: "4,480",
    Ix: "6,410",
    Wx: "2,300",
    Iy: "6,410",
    Wy: "2,300"
  },
  {
    typeUgolok: "45×45×3",
    massa: "2,080",
    ploshad: "2,650",
    Ix: "5,130",
    Wx: "1,560",
    Iy: "5,130",
    Wy: "1,560"
  },
  {
    typeUgolok: "45×45×4",
    massa: "2,730",
    ploshad: "3,480",
    Ix: "6,630",
    Wx: "2,040",
    Iy: "6,630",
    Wy: "2,040"
  },
  {
    typeUgolok: "45×45×5",
    massa: "3,370",
    ploshad: "4,290",
    Ix: "8,030",
    Wx: "2,510",
    Iy: "8,030",
    Wy: "2,510"
  },
  {
    typeUgolok: "45×45×6",
    massa: "3,990",
    ploshad: "5,080",
    Ix: "9,350",
    Wx: "2,950",
    Iy: "9,350",
    Wy: "2,950"
  },
  {
    typeUgolok: "50×50×3",
    massa: "2,320",
    ploshad: "2,960",
    Ix: "7,110",
    Wx: "1,940",
    Iy: "7,110",
    Wy: "1,940"
  },
  {
    typeUgolok: "50×50×4",
    massa: "3,050",
    ploshad: "3,890",
    Ix: "9,210",
    Wx: "2,540",
    Iy: "9,210",
    Wy: "2,540"
  },
  {
    typeUgolok: "50×50×5",
    massa: "3,770",
    ploshad: "4,800",
    Ix: "11,200",
    Wx: "3,130",
    Iy: "11,200",
    Wy: "3,130"
  },
  {
    typeUgolok: "50×50×6",
    massa: "4,470",
    ploshad: "5,690",
    Ix: "13,070",
    Wx: "3,690",
    Iy: "13,070",
    Wy: "3,690"
  },
  {
    typeUgolok: "50×50×7",
    massa: "5,150",
    ploshad: "6,560",
    Ix: "14,840",
    Wx: "4,230",
    Iy: "14,840",
    Wy: "4,230"
  },
  {
    typeUgolok: "50×50×8",
    massa: "5,820",
    ploshad: "7,410",
    Ix: "16,510",
    Wx: "4,760",
    Iy: "16,510",
    Wy: "4,760"
  },
  {
    typeUgolok: "56×56×4",
    massa: "3,440",
    ploshad: "4,380",
    Ix: "13,100",
    Wx: "3,210",
    Iy: "13,100",
    Wy: "3,210"
  },
  {
    typeUgolok: "56×56×5",
    massa: "4,250",
    ploshad: "5,410",
    Ix: "15,970",
    Wx: "3,960",
    Iy: "15,970",
    Wy: "3,960"
  },
  {
    typeUgolok: "60×60×4",
    massa: "3,710",
    ploshad: "4,720",
    Ix: "16,210",
    Wx: "3,700",
    Iy: "16,210",
    Wy: "3,700"
  },
  {
    typeUgolok: "60×60×5",
    massa: "4,580",
    ploshad: "5,830",
    Ix: "19,790",
    Wx: "4,560",
    Iy: "19,790",
    Wy: "4,560"
  },
  {
    typeUgolok: "60×60×6",
    massa: "5,430",
    ploshad: "6,920",
    Ix: "23,210",
    Wx: "5,400",
    Iy: "23,210",
    Wy: "5,400"
  },
  {
    typeUgolok: "60×60×8",
    massa: "7,100",
    ploshad: "9,040",
    Ix: "29,550",
    Wx: "7,000",
    Iy: "29,550",
    Wy: "7,000"
  },
  {
    typeUgolok: "60×60×10",
    massa: "8,700",
    ploshad: "11,080",
    Ix: "35,320",
    Wx: "8,520",
    Iy: "35,320",
    Wy: "8,520"
  },
  {
    typeUgolok: "63×63×4",
    massa: "3,900",
    ploshad: "4,960",
    Ix: "18,860",
    Wx: "4,090",
    Iy: "18,860",
    Wy: "4,090"
  },
  {
    typeUgolok: "63×63×5",
    massa: "4,810",
    ploshad: "6,130",
    Ix: "23,100",
    Wx: "5,050",
    Iy: "23,100",
    Wy: "5,050"
  },
  {
    typeUgolok: "63×63×6",
    massa: "5,720",
    ploshad: "7,280",
    Ix: "27,060",
    Wx: "5,980",
    Iy: "27,060",
    Wy: "5,980"
  },
  {
    typeUgolok: "65×65×6",
    massa: "5,910",
    ploshad: "7,520",
    Ix: "29,850",
    Wx: "6,390",
    Iy: "29,850",
    Wy: "6,390"
  },
  {
    typeUgolok: "65×65×8",
    massa: "7,730",
    ploshad: "9,840",
    Ix: "38,130",
    Wx: "8,300",
    Iy: "38,130",
    Wy: "8,300"
  },
  {
    typeUgolok: "70×70×4",
    massa: "4,870",
    ploshad: "6,200",
    Ix: "29,040",
    Wx: "5,670",
    Iy: "29,040",
    Wy: "5,670"
  },
  {
    typeUgolok: "70×70×5",
    massa: "5,380",
    ploshad: "6,860",
    Ix: "31,940",
    Wx: "6,270",
    Iy: "31,940",
    Wy: "6,270"
  },
  {
    typeUgolok: "70×70×6",
    massa: "6,390",
    ploshad: "8,150",
    Ix: "37,580",
    Wx: "7,430",
    Iy: "37,580",
    Wy: "7,430"
  },
  {
    typeUgolok: "70×70×7",
    massa: "7,390",
    ploshad: "9,420",
    Ix: "42,980",
    Wx: "8,570",
    Iy: "42,980",
    Wy: "8,570"
  },
  {
    typeUgolok: "70×70×8",
    massa: "8,370",
    ploshad: "10,670",
    Ix: "48,160",
    Wx: "9,680",
    Iy: "48,160",
    Wy: "9,680"
  },
  {
    typeUgolok: "70×70×10",
    massa: "10,290",
    ploshad: "13,110",
    Ix: "57,900",
    Wx: "11,820",
    Iy: "57,900",
    Wy: "11,820"
  },
  {
    typeUgolok: "75×75×5",
    massa: "5,800",
    ploshad: "7,390",
    Ix: "39,530",
    Wx: "7,210",
    Iy: "39,530",
    Wy: "7,210"
  },
  {
    typeUgolok: "75×75×6",
    massa: "6,890",
    ploshad: "8,780",
    Ix: "46,570",
    Wx: "8,570",
    Iy: "46,570",
    Wy: "8,570"
  },
  {
    typeUgolok: "75×75×7",
    massa: "7,960",
    ploshad: "10,150",
    Ix: "53,340",
    Wx: "9,890",
    Iy: "53,340",
    Wy: "9,890"
  },
  {
    typeUgolok: "75×75×8",
    massa: "9,020",
    ploshad: "11,500",
    Ix: "59,840",
    Wx: "11,180",
    Iy: "59,840",
    Wy: "11,180"
  },
  {
    typeUgolok: "75×75×9",
    massa: "10,070",
    ploshad: "12,830",
    Ix: "66,100",
    Wx: "12,430",
    Iy: "66,100",
    Wy: "12,430"
  },
  {
    typeUgolok: "80×80×5",
    massa: "6,780",
    ploshad: "8,630",
    Ix: "52,680",
    Wx: "9,030",
    Iy: "52,680",
    Wy: "9,030"
  },
  {
    typeUgolok: "80×80×6",
    massa: "7,360",
    ploshad: "9,380",
    Ix: "56,970",
    Wx: "9,800",
    Iy: "56,970",
    Wy: "9,800"
  },
  {
    typeUgolok: "80×80×7",
    massa: "8,510",
    ploshad: "10,850",
    Ix: "65,310",
    Wx: "11,320",
    Iy: "65,310",
    Wy: "11,320"
  },
  {
    typeUgolok: "80×80×8",
    massa: "9,650",
    ploshad: "12,300",
    Ix: "73,360",
    Wx: "12,800",
    Iy: "73,360",
    Wy: "12,800"
  },
  {
    typeUgolok: "80×80×10",
    massa: "11,880",
    ploshad: "15,140",
    Ix: "83,580",
    Wx: "15,670",
    Iy: "83,580",
    Wy: "15,670"
  },
  {
    typeUgolok: "80×80×12",
    massa: "14,050",
    ploshad: "17,900",
    Ix: "102,740",
    Wx: "18,420",
    Iy: "102,740",
    Wy: "18,420"
  },
  {
    typeUgolok: "90×90×6",
    massa: "8,330",
    ploshad: "10,610",
    Ix: "82,100",
    Wx: "12,490",
    Iy: "82,100",
    Wy: "12,490"
  },
  {
    typeUgolok: "90×90×7",
    massa: "9,640",
    ploshad: "12,280",
    Ix: "94,300",
    Wx: "14,450",
    Iy: "94,300",
    Wy: "14,450"
  },
  {
    typeUgolok: "90×90×8",
    massa: "10,930",
    ploshad: "13,930",
    Ix: "106,110",
    Wx: "16,360",
    Iy: "106,110",
    Wy: "16,360"
  },
  {
    typeUgolok: "90×90×9",
    massa: "12,200",
    ploshad: "15,600",
    Ix: "118,000",
    Wx: "18,290",
    Iy: "118,000",
    Wy: "18,290"
  },
  {
    typeUgolok: "90×90×10",
    massa: "13,480",
    ploshad: "17,170",
    Ix: "128,600",
    Wx: "20,070",
    Iy: "128,600",
    Wy: "20,070"
  },
  {
    typeUgolok: "90×90×12",
    massa: "15,960",
    ploshad: "20,330",
    Ix: "149,670",
    Wx: "23,850",
    Iy: "149,670",
    Wy: "23,850"
  },
  {
    typeUgolok: "100×100×6,5",
    massa: "10,060",
    ploshad: "12,820",
    Ix: "122,100",
    Wx: "16,690",
    Iy: "122,100",
    Wy: "16,690"
  },
  {
    typeUgolok: "100×100×7",
    massa: "10,790",
    ploshad: "13,750",
    Ix: "130,590",
    Wx: "17,900",
    Iy: "130,590",
    Wy: "17,900"
  },
  {
    typeUgolok: "100×100×8",
    massa: "12,250",
    ploshad: "15,600",
    Ix: "147,190",
    Wx: "20,300",
    Iy: "147,190",
    Wy: "20,300"
  },
  {
    typeUgolok: "100×100×10",
    massa: "15,100",
    ploshad: "19,240",
    Ix: "178,950",
    Wx: "24,970",
    Iy: "178,950",
    Wy: "24,970"
  },
  {
    typeUgolok: "100×100×12",
    massa: "17,900",
    ploshad: "22,800",
    Ix: "208,900",
    Wx: "29,470",
    Iy: "208,900",
    Wy: "29,470"
  },
  {
    typeUgolok: "100×100×14",
    massa: "20,630",
    ploshad: "26,280",
    Ix: "237,150",
    Wx: "33,830",
    Iy: "237,150",
    Wy: "33,830"
  },
  {
    typeUgolok: "100×100×15",
    massa: "21,970",
    ploshad: "27,990",
    Ix: "250,680",
    Wx: "35,950",
    Iy: "250,680",
    Wy: "35,950"
  },
  {
    typeUgolok: "100×100×16",
    massa: "23,300",
    ploshad: "29,680",
    Ix: "263,820",
    Wx: "38,040",
    Iy: "263,820",
    Wy: "38,040"
  },
  {
    typeUgolok: "110×110×7",
    massa: "11,890",
    ploshad: "15,150",
    Ix: "175,610",
    Wx: "21,830",
    Iy: "175,610",
    Wy: "21,830"
  },
  {
    typeUgolok: "110×110×8",
    massa: "13,500",
    ploshad: "17,200",
    Ix: "198,170",
    Wx: "24,770",
    Iy: "198,170",
    Wy: "24,770"
  },
  {
    typeUgolok: "120×120×8",
    massa: "14,760",
    ploshad: "18,800",
    Ix: "259,750",
    Wx: "29,680",
    Iy: "259,750",
    Wy: "29,680"
  },
  {
    typeUgolok: "120×120×10",
    massa: "18,240",
    ploshad: "23,240",
    Ix: "317,160",
    Wx: "36,590",
    Iy: "317,160",
    Wy: "36,590"
  },
  {
    typeUgolok: "120×120×12",
    massa: "21,670",
    ploshad: "27,600",
    Ix: "371,800",
    Wx: "43,300",
    Iy: "371,800",
    Wy: "43,300"
  },
  {
    typeUgolok: "120×120×15",
    massa: "26,680",
    ploshad: "33,990",
    Ix: "448,900",
    Wx: "52,960",
    Iy: "448,900",
    Wy: "52,960"
  },
  {
    typeUgolok: "125×125×8",
    massa: "15,460",
    ploshad: "19,690",
    Ix: "294,360",
    Wx: "32,200",
    Iy: "294,360",
    Wy: "32,200"
  },
  {
    typeUgolok: "125×125×9",
    massa: "17,300",
    ploshad: "22,000",
    Ix: "327,480",
    Wx: "36,000",
    Iy: "327,480",
    Wy: "36,000"
  },
  {
    typeUgolok: "125×125×10",
    massa: "19,100",
    ploshad: "24,330",
    Ix: "359,820",
    Wx: "39,740",
    Iy: "359,820",
    Wy: "39,740"
  },
  {
    typeUgolok: "125×125×12",
    massa: "22,680",
    ploshad: "28,890",
    Ix: "422,320",
    Wx: "47,060",
    Iy: "422,320",
    Wy: "47,060"
  },
  {
    typeUgolok: "125×125×14",
    massa: "26,200",
    ploshad: "33,370",
    Ix: "481,760",
    Wx: "54,170",
    Iy: "481,760",
    Wy: "54,170"
  },
  {
    typeUgolok: "125×125×16",
    massa: "29,650",
    ploshad: "37,770",
    Ix: "538,560",
    Wx: "61,090",
    Iy: "538,560",
    Wy: "61,090"
  },
  {
    typeUgolok: "140×140×9",
    massa: "19,410",
    ploshad: "24,720",
    Ix: "465,720",
    Wx: "45,550",
    Iy: "465,720",
    Wy: "45,550"
  },
  {
    typeUgolok: "140×140×10",
    massa: "21,450",
    ploshad: "27,330",
    Ix: "512,290",
    Wx: "50,320",
    Iy: "512,290",
    Wy: "50,320"
  },
  {
    typeUgolok: "140×140×12",
    massa: "25,500",
    ploshad: "32,490",
    Ix: "602,490",
    Wx: "59,660",
    Iy: "602,490",
    Wy: "59,660"
  },
  {
    typeUgolok: "150×150×10",
    massa: "23,020",
    ploshad: "29,330",
    Ix: "634,760",
    Wx: "58,070",
    Iy: "634,760",
    Wy: "58,070"
  },
  {
    typeUgolok: "150×150×12",
    massa: "27,390",
    ploshad: "34,890",
    Ix: "747,480",
    Wx: "68,900",
    Iy: "747,480",
    Wy: "68,900"
  },
  {
    typeUgolok: "150×150×15",
    massa: "33,820",
    ploshad: "43,080",
    Ix: "908,380",
    Wx: "84,660",
    Iy: "908,380",
    Wy: "84,660"
  },
  {
    typeUgolok: "150×150×18",
    massa: "40,110",
    ploshad: "51,090",
    Ix: "1060,080",
    Wx: "99,860",
    Iy: "1060,080",
    Wy: "99,860"
  },
  {
    typeUgolok: "160×160×10",
    massa: "24,670",
    ploshad: "31,430",
    Ix: "774,240",
    Wx: "66,190",
    Iy: "774,240",
    Wy: "66,190"
  },
  {
    typeUgolok: "160×160×11",
    massa: "27,020",
    ploshad: "34,420",
    Ix: "844,210",
    Wx: "72,440",
    Iy: "844,210",
    Wy: "72,440"
  },
  {
    typeUgolok: "160×160×12",
    massa: "28,350",
    ploshad: "37,390",
    Ix: "912,890",
    Wx: "78,620",
    Iy: "912,890",
    Wy: "78,620"
  },
  {
    typeUgolok: "160×160×14",
    massa: "33,970",
    ploshad: "43,570",
    Ix: "1046,470",
    Wx: "90,770",
    Iy: "1046,470",
    Wy: "90,770"
  },
  {
    typeUgolok: "160×160×16",
    massa: "38,520",
    ploshad: "49,070",
    Ix: "1175,190",
    Wx: "102,640",
    Iy: "1175,190",
    Wy: "102,640"
  },
  {
    typeUgolok: "160×160×18",
    massa: "43,010",
    ploshad: "54,790",
    Ix: "1290,240",
    Wx: "114,240",
    Iy: "1290,240",
    Wy: "114,240"
  },
  {
    typeUgolok: "160×160×20",
    massa: "47,440",
    ploshad: "60,400",
    Ix: "1418,850",
    Wx: "125,600",
    Iy: "1418,850",
    Wy: "125,600"
  },
  {
    typeUgolok: "180×180×11",
    massa: "30,470",
    ploshad: "38,800",
    Ix: "1216,440",
    Wx: "92,470",
    Iy: "1216,440",
    Wy: "92,470"
  },
  {
    typeUgolok: "180×180×12",
    massa: "33,120",
    ploshad: "42,190",
    Ix: "1316,620",
    Wx: "100,410",
    Iy: "1316,620",
    Wy: "100,410"
  },
  {
    typeUgolok: "180×180×15",
    massa: "40,960",
    ploshad: "52,180",
    Ix: "1607,360",
    Wx: "123,740",
    Iy: "1607,360",
    Wy: "123,740"
  },
  {
    typeUgolok: "180×180×18",
    massa: "48,660",
    ploshad: "61,990",
    Ix: "1884,070",
    Wx: "146,360",
    Iy: "1884,070",
    Wy: "146,360"
  },
  {
    typeUgolok: "180×180×20",
    massa: "53,720",
    ploshad: "68,430",
    Ix: "2061,110",
    Wx: "161,070",
    Iy: "2061,110",
    Wy: "161,070"
  },
  {
    typeUgolok: "200×200×12",
    massa: "36,970",
    ploshad: "47,100",
    Ix: "1822,780",
    Wx: "124,610",
    Iy: "1822,780",
    Wy: "124,610"
  },
  {
    typeUgolok: "200×200×13",
    massa: "39,920",
    ploshad: "50,850",
    Ix: "1960,770",
    Wx: "134,440",
    Iy: "1960,770",
    Wy: "134,440"
  },
  {
    typeUgolok: "200×200×14",
    massa: "42,800",
    ploshad: "54,600",
    Ix: "2097,000",
    Wx: "144,170",
    Iy: "2097,000",
    Wy: "144,170"
  },
  {
    typeUgolok: "200×200×16",
    massa: "48,650",
    ploshad: "61,980",
    Ix: "2362,570",
    Wx: "163,370",
    Iy: "2362,570",
    Wy: "163,370"
  },
  {
    typeUgolok: "200×200×18",
    massa: "54,400",
    ploshad: "69,300",
    Ix: "2620,640",
    Wx: "182,220",
    Iy: "2620,640",
    Wy: "182,220"
  },
  {
    typeUgolok: "200×200×20",
    massa: "60,080",
    ploshad: "76,540",
    Ix: "2871,470",
    Wx: "200,730",
    Iy: "2871,470",
    Wy: "200,730"
  },
  {
    typeUgolok: "200×200×24",
    massa: "71,260",
    ploshad: "90,780",
    Ix: "3350,660",
    Wx: "236,770",
    Iy: "3350,660",
    Wy: "236,770"
  },
  {
    typeUgolok: "200×200×25",
    massa: "74,020",
    ploshad: "94,290",
    Ix: "3466,210",
    Wx: "245,590",
    Iy: "3466,210",
    Wy: "245,590"
  },
  {
    typeUgolok: "200×200×30",
    massa: "87,560",
    ploshad: "111,540",
    Ix: "4019,600",
    Wx: "288,570",
    Iy: "4019,600",
    Wy: "288,570"
  },
  {
    typeUgolok: "220×220×14",
    massa: "47,400",
    ploshad: "60,380",
    Ix: "2814,360",
    Wx: "175,180",
    Iy: "2814,360",
    Wy: "175,180"
  },
  {
    typeUgolok: "220×220×16",
    massa: "53,830",
    ploshad: "68,580",
    Ix: "3175,440",
    Wx: "198,710",
    Iy: "3175,440",
    Wy: "198,710"
  },
  {
    typeUgolok: "250×250×16",
    massa: "61,550",
    ploshad: "78,400",
    Ix: "4717,100",
    Wx: "258,430",
    Iy: "4717,100",
    Wy: "258,430"
  },
  {
    typeUgolok: "250×250×18",
    massa: "68,860",
    ploshad: "87,720",
    Ix: "5247,239",
    Wx: "288,820",
    Iy: "5247,239",
    Wy: "288,820"
  },
  {
    typeUgolok: "250×250×20",
    massa: "76,110",
    ploshad: "96,960",
    Ix: "5764,870",
    Wx: "318,760",
    Iy: "5764,870",
    Wy: "318,760"
  },
  {
    typeUgolok: "250×250×22",
    massa: "83,310",
    ploshad: "106,120",
    Ix: "6270,319",
    Wx: "348,260",
    Iy: "6270,319",
    Wy: "348,260"
  },
  {
    typeUgolok: "250×250×25",
    massa: "93,970",
    ploshad: "119,710",
    Ix: "7006,389",
    Wx: "391,720",
    Iy: "7006,389",
    Wy: "391,720"
  },
  {
    typeUgolok: "250×250×28",
    massa: "104,500",
    ploshad: "133,120",
    Ix: "7716,858",
    Wx: "434,250",
    Iy: "7716,858",
    Wy: "434,250"
  },
  {
    typeUgolok: "250×250×30",
    massa: "111,440",
    ploshad: "141,960",
    Ix: "8176,519",
    Wx: "462,110",
    Iy: "8176,519",
    Wy: "462,110"
  },
  {
    typeUgolok: "250×250×35",
    massa: "128,510",
    ploshad: "163,710",
    Ix: "9281,049",
    Wx: "530,110",
    Iy: "9281,049",
    Wy: "530,110"
  }
]



let lang2 = localStorage.getItem("lang") || "uz";
let active = "length";
let activeGost = "NoGost";
function calcView(){
  if(lang2=='uz'){
    calculatorName.textContent="Ugolok";
    calcNoGostBtn.textContent=" O'lcham bo'yicha";
    calcGostBtn.textContent="ГОСТ bo'yicha";
    calcByLength.textContent="Uzunligi bo'yicha";
      calcByWeight.textContent="Vazni bo'yicha";
      if(active=="length"){
        labelLength.textContent = "Uzunligi, m";
        labelDiametr.textContent="Tomoni A, mm"
        labelWeight.textContent="Qalinligi S, mm"
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
        labelDiametr.style="display:block;"
        diametr.style="display:block;"
        weight.style="display:block;"
      }else{
        selectGostLabel.textContent="Ugolok turini tanlang";
        selectGostBox.style="display:block";
        labelWeight.style="display:none;"
        labelDiametr.style="display:none;"
        diametr.style="display:none;"
        weight.style="display:none;"
      }
      
  }else{
    calcNoGostBtn.textContent="По размеру";
    calcGostBtn.textContent="По ГОСТу";
    calculatorName.textContent="Уголок";
    calcByLength.textContent="По длине";
    calcByWeight.textContent="По весу";
    if (active=="weight") {
      labelLength.textContent = "Вес: кг";
    lengthOfArmature.value = "1000";
    result.parentNode.children[2].textContent = "Длина, м.";
    result.textContent = result.textContent.slice(0, -2) + " м"; 
    }else{
      labelDiametr.textContent="Сторона A, мм."
      labelLength.textContent = "Длина, м.";
      labelWeight.textContent = "Толщина S, мм.";
      lengthOfArmature.value = "1";
      result.parentNode.children[2].textContent = "ВЕС УГОЛКА: кг";
      result.textContent = result.textContent.slice(0, -2) + " кг";
    }
    if(activeGost=="NoGost"){
      selectGostBox.style="display:none";
      labelWeight.style="display:block;"
      labelDiametr.style="display:block;"
      diametr.style="display:block;"
      weight.style="display:block;"
    }else{
      selectGostLabel.textContent="Выберите сортамент";
      selectGostBox.style="display:block";
      labelWeight.style="display:none;"
      labelDiametr.style="display:none;"
      diametr.style="display:none;"
      weight.style="display:none;"
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
  calculatorArmature(+diametr.value, +lengthOfArmature.value,+weight.value, active,activeGost);
});
calcGostBtn.addEventListener("click", (e) => {
  calcNoGostBtn.classList.remove("active-calc-btn");
  calcGostBtn.classList.add("active-calc-btn");
  activeGost = "Gost";
  calcView();
  calculatorArmature(+diametr.value, +lengthOfArmature.value,+weight.value, active,activeGost);
});
calcNoGostBtn.addEventListener("click", (e) => {
  calcNoGostBtn.classList.add("active-calc-btn");
  calcGostBtn.classList.remove("active-calc-btn");
  activeGost = "NoGost";
  calcView();
  calculatorArmature(+diametr.value, +lengthOfArmature.value,+weight.value, active,activeGost);
});
calcByWeight.addEventListener("click", (e) => {
  calcByLength.classList.remove("active-calc-btn");
  calcByWeight.classList.add("active-calc-btn");
  active = "weight";
  calcView();
  calculatorArmature(+diametr.value, +lengthOfArmature.value,+weight.value, active,activeGost);
});
diametr.addEventListener("input", (e) => {
  calculatorArmature(+e.target.value, +lengthOfArmature.value,+weight.value, active,activeGost);
});
selectGost.addEventListener("input", (e) => {
  calculatorArmature(+diametr.value, +lengthOfArmature.value,+weight.value, active,activeGost);
});
lengthOfArmature.addEventListener("input", (e) => {
  calculatorArmature(+diametr.value, +e.target.value,+weight.value, active,activeGost);
});
weight.addEventListener("input", (e) => {
    calculatorArmature(+diametr.value, +lengthOfArmature.value,+e.target.value, active,activeGost);
  });
calculatorArmature(+diametr.value, +lengthOfArmature.value,+weight.value, active,activeGost);
function calculatorArmature(d, l,s, active,gost) {
 if(gost=="NoGost"){
  if (active == "length") {
    const m = p*(2*d-s)*s*l*0.000001;
    result.textContent = m.toFixed(3) + " kg";
  } else {
    const m = l / (( p*(2*d-s)*s)*0.000001);
    if (m.toString().startsWith("I")) {
      result.textContent = "0.000 m";
    } else {
      result.textContent = Math.round(m) + " ,m";
    }
  }
 }else{
  const gostType=selectGost.value;
  const selectedUgolok = dataUgolok.filter(ugolok => {
    if( ugolok.typeUgolok.endsWith(gostType) &&gostType!=""){
      ugolok.massa=ugolok.massa.replace(",",".") ;
       return ugolok
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
