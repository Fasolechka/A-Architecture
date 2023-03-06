let isMove = false;

function onMove() {
    isMove = true;
}

const wasMove = localStorage.getItem("is-move") === 'true';

const loadingOverlay = document.querySelector('.loading-overlay');

if (loadingOverlay) {
    loadingOverlay.style.display = wasMove ? 'none' : 'flex';
}

document.getElementById('debug').innerHTML = JSON.stringify({
    wasMove,
    isMove,
    loadingOverlay,
    typeOfStorage: typeof (Storage),
});

window.addEventListener('beforeunload', function () {
    localStorage.setItem("is-move", isMove);
});

