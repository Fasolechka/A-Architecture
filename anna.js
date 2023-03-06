function onMove() {
    localStorage.setItem("should-show", 'false');
}

if (typeof (Storage) !== "undefined") {
    const shouldShow = (localStorage.getItem("should-show") || 'true') === 'true';
    localStorage.setItem("should-show", 'true');

    const loadingOverlay = document.querySelector('.loading-overlay');

    if (loadingOverlay) {
        loadingOverlay.style.display = shouldShow ? 'flex' : 'none';
    }
};

