const container = document.querySelector('.menu');
const tampilkan = document.querySelector('.tampil');
container.addEventListener('click', function (e) {
// cek apakah yang di-klik adalah tombol
if (e.target.className == 'tombol') {
switch (e.target.value) {
  case "1":
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {if (this.readyState == 4 && this.status == 200) {tampilkan.innerHTML =this.responseText;}};
    xhttp.open("GET", "konten_D/D_P1.html", true);
    xhttp.send();
    break;
  case "2" :
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {if (this.readyState == 4 && this.status == 200) {tampilkan.innerHTML =this.responseText;}};
    xhttp.open("GET", "konten_D/D_P2.html", true);
    xhttp.send();
    break;
  case "3":
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {if (this.readyState == 4 && this.status == 200) {tampilkan.innerHTML =this.responseText;}};
    xhttp.open("GET", "konten_D/D_P3.html", true);
    xhttp.send();
    break;
  case "4":
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {if (this.readyState == 4 && this.status == 200) {tampilkan.innerHTML =this.responseText;}};
    xhttp.open("GET", "konten_D/D_P4.html", true);
    xhttp.send();
    break;
  case "5":
    day = "Friday";
    break;
  case "6":
    day = "Saturday";
}
}
});
