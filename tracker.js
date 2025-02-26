async function getRedirectedURL() {
    try {
        const proxyUrl = "https://api.allorigins.win/get?url=";
        const trackerUrl = encodeURIComponent("https://cutt.ly/le6JAfIP");

        const response = await fetch(proxyUrl + trackerUrl);
        const data = await response.json();

        console.log("Cutt.ly yönlendirme sayfası HTML içeriği:", data.contents);

        // Sayfanın HTML içeriğini DOM olarak işle
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.contents, "text/html");

        // Meta Refresh etiketini bul
        const metaRefresh = doc.querySelector("meta[http-equiv='refresh']");
        if (metaRefresh) {
            const redirectUrl = metaRefresh.getAttribute("content").split("=")[1]; // URL'yi al
            document.getElementById("redirected-url").innerHTML = `<a href="${redirectUrl}" target="_blank">${redirectUrl}</a>`;
            return;
        }

        document.getElementById("redirected-url").innerText = "Yönlendirme adresi bulunamadı!";
    } catch (error) {
        console.error("Hata:", error);
        document.getElementById("redirected-url").innerText = "Bağlantı alınamadı!";
    }
}

// Sayfa yüklendiğinde çalıştır
getRedirectedURL();