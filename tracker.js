async function getLatestSite() {
    try {
        const response = await fetch("https://cutt.ly/le6JAfIP", {
            method: "HEAD",
            redirect: "follow" // Yönlendirmeleri takip et
        });

        // En güncel yönlendirme URL'sini al
        const latestSite = response.url;
        console.log("Güncel site:", latestSite);

        // Bunu sitene ekleyebilirsin
        document.getElementById("latest-site").innerText = latestSite;
    } catch (error) {
        console.error("Hata:", error);
    }
}

// Sayfa yüklendiğinde en güncel siteyi çek
getLatestSite();