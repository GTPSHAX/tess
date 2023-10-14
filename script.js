// Tempat Upload
const judul = [
    ["Kimi No Nawa","Movie"],
    ["Tensura The Movie Guren no Kizuna","Movie"],
    ["One Piece Movie Film Red","Movie"],
    ["Suzume no Tojimari","Movie"],
    ["Josee to Tora to Sakana-tachi","Movie"],
    ["Tenki no ko","Movie"],
    ["Black Clover Movie Mahou Tei no Ken","Movie"],
    ["Sword Art Online Movie 2","Movie"]
];
const judulOn = [
    ["Tes","Ep.03"],
    ["Tes","Ep.03"],
]
setTimeout(function() {
    var inisi = document.querySelector(".loading")
    inisi.classList.add("none")
}, 5000)
const target = document.getElementById("anime-list");
for (let i = 0; i < judul.length; i++) {
    const cik = document.createElement("li");
    cik.classList.add("anime-list");
    target.appendChild(cik);

    const linkElement = document.createElement("a");
    linkElement.setAttribute("id", "anime-link");
    cik.appendChild(linkElement);
        

    const animeCardElement = document.createElement("div");
    animeCardElement.classList.add("anime-card");
    linkElement.appendChild(animeCardElement);

    const coverAnimeElement = document.createElement("div");
    coverAnimeElement.classList.add("cover-anime");
    animeCardElement.appendChild(coverAnimeElement);

    const jenisAnimeElement = document.createElement("div");
    jenisAnimeElement.classList.add("jenis-anime");
    jenisAnimeElement.textContent = judul[i][1];
    coverAnimeElement.appendChild(jenisAnimeElement);

    const imgElement = document.createElement("img");
    imgElement.setAttribute("alt", "cover-anime");
    coverAnimeElement.appendChild(imgElement);
    

    const h5Element = document.createElement("h5");
    h5Element.setAttribute("class","judul-anime");
    h5Element.textContent = judul[i][0];
    animeCardElement.appendChild(h5Element); 
};
const target2 = document.querySelector("#Ongoing #anime-list");
for (let i = 0; i < judulOn.length; i++) {
    const cik = document.createElement("li");
    cik.classList.add("anime-list");
    target2.appendChild(cik);

    const linkElement = document.createElement("a");
    linkElement.setAttribute("id", "anime-link");
    cik.appendChild(linkElement);
        

    const animeCardElement = document.createElement("div");
    animeCardElement.classList.add("anime-card");
    linkElement.appendChild(animeCardElement);

    const coverAnimeElement = document.createElement("div");
    coverAnimeElement.classList.add("cover-anime");
    animeCardElement.appendChild(coverAnimeElement);

    const jenisAnimeElement = document.createElement("div");
    jenisAnimeElement.classList.add("jenis-anime");
    jenisAnimeElement.textContent = judulOn[i][1];
    coverAnimeElement.appendChild(jenisAnimeElement);

    const imgElement = document.createElement("img");
    imgElement.setAttribute("alt", "cover-anime");
    imgElement.src = "./assets/Kimi-No-Nawa.jpg"
    coverAnimeElement.appendChild(imgElement);
    

    const h5Element = document.createElement("h5");
    h5Element.setAttribute("class","judul-anime2");
    h5Element.textContent = judulOn[i][0];
    animeCardElement.appendChild(h5Element);
};



const arraySearchs = [
    "Jujutsu Kaisen","One Piece","One Punch Man","Masukkan Judul Anime"
];
let arraySearch = "Masukkan Judul Anime";
let numbering = 0;
let i = 0;
let tanda = 0;
const targetPlaceholder = document.getElementById('search-box');

function changeSearchText() {
    if (tanda == 1) {
        targetPlaceholder.placeholder = arraySearch.substring(0, numbering);
        numbering--;
        if (numbering == 0) {
            if (i >= 4) {
                i = 0;
            };
            arraySearch = arraySearchs[i]; i++;
            tanda = 0;
        };
    } else {
        numbering = (numbering + 1) % (arraySearch.length + 1);
        targetPlaceholder.placeholder = arraySearch.substring(0, numbering);
        if (targetPlaceholder.placeholder == arraySearch) {
            tanda = 1;
        };
    };
};
setInterval(changeSearchText, 200);
const btnNavLinks = document.querySelectorAll('.btn-nav');
btnNavLinks[0].classList.add("btn-aktif");
btnNavLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        const targetOffset = targetElement.offsetTop;

        btnNavLinks.forEach(function(btn) {
            btn.classList.remove("btn-aktif");
        });

        link.classList.add("btn-aktif");

        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
        });
    });
});

const animeList = document.querySelectorAll(".judul-anime");
document.getElementById("search-box").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      searchAnime();
    };
  });
  
  document.getElementById("search").addEventListener("click", function () {
    searchAnime();
  });
  
  function searchAnime() {
    const searchValue = document.getElementById("search-box").value;
    
  
    const searchResults = document.getElementById("search-results");
    const animeListContainer = document.getElementById("anime-list");
  
    searchResults.innerHTML = "";
    animeListContainer.style.display = "none";
  
    let foundResults = false;  
    
    const jenisAnimes = document.querySelectorAll(".jenis-anime")
    let aa = 0
    animeList.forEach(function (anime) {
        if (anime.textContent.toLowerCase().includes(searchValue.toLowerCase())) {
            foundResults = true;
    
            const li = document.createElement("li");
            li.classList.add("anime-list");
    
            const a = document.createElement("a");
            var linknya = anime.textContent.toLowerCase().replace(/\s/g, '-')
            a.href = "./" + linknya + "/index.html";
    
            const animeCard = document.createElement("div");
            animeCard.classList.add("anime-card");
            
            
            
            
            
            const coverAnime = document.createElement("div");
            coverAnime.classList.add("cover-anime");
            animeCard.appendChild(coverAnime);
            const h5 = document.createElement("h5");
            h5.textContent = anime.textContent;

            
            for (let i = 0; i < judul.length; i++) {
                if (i > judul.length) {

                }
                if (judul[i][0] == h5.textContent && i <= judul.length) {
                    aa = i;
                };
            };
            jenisAnime = document.createElement("div");
                    jenisAnime.classList.add("jenis-anime");
                    jenisAnime.textContent = judul[aa][1];
                    coverAnime.appendChild(jenisAnime);
    
            const bannerAnime = document.createElement("img");
            bannerAnime.setAttribute("alt", "cover-anime");
            bannerAnime.src = "./assets/" + anime.textContent.replace(/\s/g, "-") + ".jpg";
            coverAnime.appendChild(bannerAnime);
    
            
    
            
            animeCard.appendChild(h5);
    
            a.appendChild(animeCard);
            li.appendChild(a);
            searchResults.appendChild(li);
            
        };
        });
    
    
    if (!foundResults) {
        const notif = document.getElementsByClassName("notif");
        notif[0].classList.add("gas");
        setTimeout(function() {
            notif[0].classList.remove("gas");
        }, 3000);
    };
}

var animeCardElements = document.querySelectorAll(".anime-card");
var link = document.querySelectorAll("#anime-link");

animeCardElements.forEach(function(animeCard, index) {
    var imgElement = animeCard.querySelector("img");
    
    var h5Element = animeCard.querySelector(".judul-anime");
    var judulAnime = h5Element.textContent.toLowerCase().replace(/\s/g, '-');
    var urlGambar = "./assets/" + judulAnime + ".jpg";
    imgElement.src = urlGambar;


    var linkElement = link[index];
    linkElement.href = "./" + judulAnime + "/index.html";
    if (h5Element.textContent != judul[0][0]) {
        
    }
})

