async function getAnnouncement() {
    try {
        const proxyUrl = "https://api.allorigins.win/get?url=";
        const trackerUrl = encodeURIComponent("https://cutt.ly/le6JAfIP");

        const response = await fetch(proxyUrl + trackerUrl);
        const data = await response.json();  // JSON formatında cevabı al

        // Gelen HTML içeriğini konsolda inceleyelim
        console.log("Gelen içerik:", data.contents);

        // Sayfanın HTML içeriğini DOM olarak işle
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.contents, "text/html");

        // İçeriği düz metin olarak al
        const pageText = doc.body.innerText;

        // "güncel adresimiz" içeren satırı bul
        const regex = /üyemiz, güncel adresimiz (.+?) 'dur/i;
        const match = pageText.match(regex);

        if (match) {
            const latestSite = match[1]; // Güncel site adresi
            document.getElementById("announcement").innerText = `Güncel adres: ${latestSite}`;
        } else {
            document.getElementById("announcement").innerText = "Adres bulunamadı!";
        }

    } catch (error) {
        console.error("Hata:", error);
        document.getElementById("announcement").innerText = "Bağlantı alınamadı!";
    }
}

// Sayfa yüklendiğinde çalıştır
getAnnouncement();