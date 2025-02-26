async function getLatestSite() {
    try {
        const proxyUrl = "https://api.allorigins.win/get?url=";
        const trackerUrl = encodeURIComponent("https://cutt.ly/le6JAfIP");

        const response = await fetch(proxyUrl + trackerUrl);
        const data = await response.json();

        // Response içindeki URL'yi bul
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.contents, "text/html");
        const metaRefresh = doc.querySelector("meta[http-equiv='refresh']");

        if (metaRefresh) {
            const redirectUrl = metaRefresh.getAttribute("content").split("=")[1];
            document.getElementById("latest-site").innerHTML = `<a href="${redirectUrl}" target="_blank">${redirectUrl}</a>`;
        } else {
            document.getElementById("latest-site").innerText = "Bağlantı alınamadı!";
        }

    } catch (error) {
        console.error("Hata:", error);
        document.getElementById("latest-site").innerText = "Bağlantı alınamadı!";
    }
}

// Sayfa yüklendiğinde çalıştır
getLatestSite();