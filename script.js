const dataLagu = [
    ["Akulah Dia", "Drive", "akulahdia.jpg", "10K Likes", "11.5K Views", "akulahdia.mp3"],
    ["Just A Friend To You", "Meghan Trainor", "friend.jpg", "9.2K Likes", "15K Views", "friend.mp3"],
    ["Hari Bersamanya", "Sheila On 7", "bersamanya.jpg", "13.1K Likes", "20K Views", "bersamanya.mp3"],
    ["Mangu", "Fourtwnty", "mangu.jpg", "8K Likes", "8K Played", "mangu.mp3"],
    ["Slalu Ada di Nadi", "B.C.L", "jumbo.jpg", "1.5K Likes", "2.3K Played", "jumbo.mp3"],
    ["Lesung Pipi", "Raim LaOde", "lesungpipi.jpg", "2.4K Likes", "5.4K Played", "lesungpipi.mp3"]
];

const songsContainer = document.getElementById("songs");

dataLagu.forEach(([judul, artis, gambar, likes, played]) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="img/${gambar}" alt="${judul}">
        <h2>${judul}</h2>
        <p>${artis}</p>
        <div class="stats">
            <span>${likes}</span> • <span>${played}</span>
        </div>
        <audio id="audio-${judul}" src="audio/${audio}"></audio>
        <button onclick="document.getElementById('audio-${judul}').play()">Play</button>
        <button onclick="document.getElementById('audio-${judul}').pause()">Pause</button>
    `;
    `;
    songsContainer.appendChild(card);
});
