let isMove = false;

function onMove() {
    isMove = true;
}

if (typeof (Storage) !== "undefined") {
    const wasMove = localStorage.getItem("is-move") === 'true';

    const loadingOverlay = document.querySelector('.loading-overlay');

    if (loadingOverlay) {
        loadingOverlay.style.display = wasMove ? 'none' : 'flex';
    }

    window.addEventListener('beforeunload', function () {
        localStorage.setItem("is-move", isMove);
    });
};

