async function getLatestSite() {
    try {
        const proxyUrl = "https://api.allorigins.win/get?url=";
        const trackerUrl = encodeURIComponent("https://cutt.ly/le6JAfIP");

        const response = await fetch(proxyUrl + trackerUrl);
        const data = await response.json();  // JSON formatında cevabı al

        // Sayfanın HTML içeriğini al
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.contents, "text/html");

        // Meta Refresh etiketini bul
        const metaRefresh = doc.querySelector("meta[http-equiv='refresh']");
        if (metaRefresh) {
            const redirectUrl = metaRefresh.getAttribute("content").split("=")[1];  // URL'yi al
            document.getElementById("latest-site").innerHTML = `<a href="${redirectUrl}" target="_blank">${redirectUrl}</a>`;
            return;
        }

        // Eğer meta refresh yoksa, `og:url` içeriğine bak
        const ogUrl = doc.querySelector("meta[property='og:url']");
        if (ogUrl) {
            const redirectUrl = ogUrl.getAttribute("content");
            document.getElementById("latest-site").innerHTML = `<a href="${redirectUrl}" target="_blank">${redirectUrl}</a>`;
            return;
        }

        // Eğer hiçbir yönlendirme bulunamazsa hata ver
        document.getElementById("latest-site").innerText = "Bağlantı bulunamadı!";

    } catch (error) {
        console.error("Hata:", error);
        document.getElementById("latest-site").innerText = "Bağlantı alınamadı!";
    }
}

// Sayfa yüklendiğinde çalıştır
getLatestSite();