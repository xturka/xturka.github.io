async function simulateClickAndGetRedirectedURL() {
    const newWindow = window.open("https://cutt.ly/le6JAfIP", "_blank");

    setTimeout(() => {
        try {
            const redirectedUrl = newWindow.location.href;
            console.log("Gerçek yönlendirme URL'si:", redirectedUrl);
            document.getElementById("redirected-url").innerHTML = `<a href="${redirectedUrl}" target="_blank">${redirectedUrl}</a>`;
            newWindow.close();
        } catch (error) {
            console.log("Tarayıcı güvenlik kısıtlamaları nedeniyle yönlendirme URL’si alınamadı.");
            document.getElementById("redirected-url").innerText = "Bağlantı alınamadı!";
        }
    }, 3000);
}

// Sayfa yüklendiğinde çalıştır
simulateClickAndGetRedirectedURL();