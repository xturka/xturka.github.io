async function getRedirectUrl() {
    try {
        const proxyUrl = "https://api.allorigins.win/get?url="; // CORS Proxy
        const trackerUrl = encodeURIComponent("https://cutt.ly/le6JAfIP");

        const response = await fetch(proxyUrl + trackerUrl);
        const data = await response.json();

        console.log("Cutt.ly yönlendirme sayfası HTML içeriği:", data.contents);

        // Sayfanın HTML içeriğini DOM olarak işle
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.contents, "text/html");

        // Eğer sayfada meta refresh ile yönlendirme varsa, onu al
        const metaRefresh = doc.querySelector("meta[http-equiv='refresh']");
        if (metaRefresh) {
            const redirectUrl = metaRefresh.getAttribute("content").split("=")[1]; // URL'yi al
            document.getElementById("redirected-url").innerHTML = `<a href="${redirectUrl}" target="_blank">${redirectUrl}</a>`;
            return;
        }

        // Eğer meta refresh yoksa, og:url içeriğine bak
        const ogUrl = doc.querySelector("meta[property='og:url']");
        if (ogUrl) {
            const redirectUrl = ogUrl.getAttribute("content");
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
getRedirectUrl();