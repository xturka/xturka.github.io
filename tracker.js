async function getRedirectedURL() {
    try {
        const proxyUrl = "https://api.allorigins.win/raw?url="; // CORS Proxy
        const trackerUrl = "https://cutt.ly/le6JAfIP";

        const response = await fetch(proxyUrl + trackerUrl, {
            method: "HEAD", // HTTP başlıklarını al
            redirect: "follow" // Yönlendirmeleri takip et
        });

        const redirectedURL = response.url; // Gerçek yönlendirme adresini al
        console.log("Gerçek yönlendirme URL'si:", redirectedURL);

        // Sonucu HTML'e yaz
        document.getElementById("redirected-url").innerHTML = `<a href="${redirectedURL}" target="_blank">${redirectedURL}</a>`;

    } catch (error) {
        console.error("Hata:", error);
        document.getElementById("redirected-url").innerText = "Bağlantı alınamadı!";
    }
}

// Sayfa yüklendiğinde çalıştır
getRedirectedURL();