const judul = document.getElementById("judul");
const H4 = document.querySelector("h3");
const H4Text = document.querySelector("h3#text");
const myButton = document.getElementById("button");
const myButton2 = document.getElementById("button2");
const myImg = document.querySelector("div", "img");

function change() {
  judul.innerHTML = "LUCKY FEBRIAN";
  myImg.innerHTML =
    '<img src="foto2.jpg" alt="Foto Saya" title="ini saya" style="border-radius: 0%; width: 175px;">';
  H4Text.innerHTML =
    "Seorang UI/UX desainer dengan pengalaman lebih dari 10 tahun. Mempunyai kemampuan berbahasa dengan 3 bahasa asing. Mempunyai skill figma, HTNL, CSS, dan javascript";
}

function change2() {
  judul.innerHTML = "FARID ANFASHA";
  myImg.innerHTML =
    '<img src="Foto3.jpeg" alt="Foto Saya" title="ini saya" style="border-radius: 0%; width: 175px;">';
  H4Text.innerHTML =
    "eorang fullstack programmer dengan pengalaman lebih dari 20 tahun. Mempunyai software house yang tersebar di seluruh indonesia. Dia juga merupakan bos sawit";
}

myButton.addEventListener("click", change);
myButton2.addEventListener("click", change2);
