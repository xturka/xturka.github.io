async function getRedirectUrl() {
    try {
        const proxyUrl = "https://api.allorigins.win/raw?url="; // Alternatif Proxy
        const trackerUrl = "https://cutt.ly/le6JAfIP";

        const response = await fetch(proxyUrl + trackerUrl, {
            method: "HEAD",
            redirect: "follow",
        });

        console.log("Gerçek yönlendirme URL'si:", response.url);

        document.getElementById("redirected-url").innerHTML = `<a href="${response.url}" target="_blank">${response.url}</a>`;

    } catch (error) {
        console.error("Hata:", error);
        document.getElementById("redirected-url").innerText = "Bağlantı alınamadı!";
    }
}

// Sayfa yüklendiğinde çalıştır
getRedirectUrl();