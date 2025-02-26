async function getHeaders() {
    try {
        const response = await fetch("https://cutt.ly/le6JAfIP", { method: "HEAD" });

        // Headers'ları kontrol et
        console.log("Headers:", response.headers);

        // Belirli bir başlığı almak için
        const corsPolicy = response.headers.get("access-control-allow-origin");

        if (corsPolicy) {
            console.log("CORS Policy:", corsPolicy);
            document.getElementById("cors-info").innerText = `CORS Policy: ${corsPolicy}`;
        } else {
            document.getElementById("cors-info").innerText = "CORS başlığı alınamadı!";
        }

    } catch (error) {
        console.error("Hata:", error);
        document.getElementById("cors-info").innerText = "Bağlantı hatası!";
    }
}

// Sayfa yüklendiğinde çalıştır
getHeaders();