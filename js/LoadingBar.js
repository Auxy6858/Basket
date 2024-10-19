window.onload = () => {
    const loadingBar = document.getElementById("loading-bar");
    let width = 0;
    
    const loadingInterval = setInterval(() => {
        if (width >= 100){
            clearInterval(loadingInterval);
            document.getElementById("loading-bar-container").style.display = "none";
        } else {
            width--;
            loadingBar.style.width = width + "%";
        }
    }, 50);
};