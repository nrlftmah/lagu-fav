const dataLagu = [
    ["Mangu", "Fourtwnty", "mangu.jpg"],
    ["Slalu Ada di Nadi", "B.C.L", "jumbo.jpg"],
    ["Lesung Pipi", "Raim LaOde", "lesungpipi.jpg"]
];

const songsContainer = document.getElementById("songs");

dataLagu.forEach(([judul, artis, gambar]) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="img/${gambar}" alt="${judul}">
        <h2>${judul}</h2>
        <p>${artis}</p>
    `;
    songsContainer.appendChild(card);
});