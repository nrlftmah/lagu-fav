const dataLagu = [
    ["Mangu", "Fourtwnty", "mangu.jpg", "8K Likes", "8K Views"],
    ["Slalu Ada di Nadi", "B.C.L", "jumbo.jpg", "1.5K Likes", "2.3K Views"],
    ["Lesung Pipi", "Raim LaOde", "lesungpipi.jpg", "2.4K Likes", "5.4K Views"]
];

const songsContainer = document.getElementById("songs");

dataLagu.forEach(([judul, artis, gambar, likes, views]) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="img/${gambar}" alt="${judul}">
        <h2>${judul}</h2>
        <p>${artis}</p>
        <div class="stats">
            <span>${likes}</span> • <span>${views}</span>
        </div>
    `;
    songsContainer.appendChild(card);
});
