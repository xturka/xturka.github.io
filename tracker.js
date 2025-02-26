async function openRedirectAndCaptureURL() {
    // Yeni bir sekme aç ve cutt.ly URL'sini yükle
    const newTab = window.open("https://cutt.ly/le6JAfIP", "_blank");

    // 3 saniye bekleyerek yönlendirmenin tamamlanmasını sağla
    setTimeout(() => {
        try {
            // Yeni sekmenin URL'sini al
            const redirectedURL = newTab.location.href;
            console.log("Gerçek yönlendirme URL'si:", redirectedURL);

            // Sonucu HTML'e yaz
            document.getElementById("redirected-url").innerHTML = `<a href="${redirectedURL}" target="_blank">${redirectedURL}</a>`;

            // Kullanıcı fark etmeden sekmeyi kapat
            newTab.close();
        } catch (error) {
            console.error("Tarayıcı güvenlik kısıtlaması nedeniyle URL alınamadı.");
            document.getElementById("redirected-url").innerText = "Bağlantı alınamadı!";
        }
    }, 3000);
}

// Sayfa yüklendiğinde çalıştır
openRedirectAndCaptureURL();