// Tempat Upload
const setup = [
    ["Judul Anime", "Kimi No Nawa"],
    ["Jenis Anime", "Tv"],
    ["Deskripsi Anime", "Gtw anjirrrrrrrrrrrrrrrrrrrrrrrr"],
    ["Total Episode", "10"],
    ["Genre Anime", "Hentai"]
];
setTimeout(function() {
    var inisi = document.querySelector(".loading")
    inisi.classList.add("none")
}, 000)

const judulAnime = document.querySelectorAll('#judulAnime')
judulAnime.forEach(function(text) {
    text.textContent = setup[0][1]
})
const jenisAnime = document.querySelectorAll('.jenis-anime')
jenisAnime.forEach(function(text) {
    text.textContent = setup[1][1]
})
const bannerAnime = document.querySelectorAll('#bannerAnime')
bannerAnime.forEach(function(text) {
    text.src = "../assets/"+ setup[0][1].toLowerCase().replace(/\s/g, "-") +".jpg"
})
const deskAnime = document.querySelectorAll('#deskAnime')
deskAnime.forEach(function(text) {
    text.textContent = setup[2][1]
})
const epsCount = document.querySelectorAll('#epsCount')
epsCount.forEach(function(text) {
    text.textContent = setup[3][1]
})
const genreAnime = document.querySelectorAll('#genreAnime')
genreAnime.forEach(function(text) {
    text.textContent = setup[4][1]
})