async function getRedirectedURL() {
    try {
        const trackerUrl = "https://cutt.ly/le6JAfIP"; // Cutt.ly tracker URL'si

        const response = await fetch(trackerUrl, {
            method: "HEAD", // Sadece başlıkları kontrol et
            redirect: "follow" // Yönlendirmeleri otomatik olarak takip et
        });

        const redirectedURL = response.url; // Gerçek yönlendirme URL'si
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