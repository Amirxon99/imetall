let i = 0;
const images = [];
const slideTime = 6000; // 6 seconds

images.push('./assets/img/banner/banner1.webp');
images[1] = './assets/img/banner/banner2.webp';
images[2] = './assets/img/banner/banner3.webp';

const hero=document.getElementById("hero")
function changePicture() {
   hero.style.backgroundImage = "linear-gradient(180deg,#31312F,rgba(5,17,46,.5)),url(" + images[i] + ")";
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture();