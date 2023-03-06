function getLogs() {
    return localStorage.getItem("logs") || '';
}
function writeLog(message) {
    localStorage.setItem("logs", getLogs() + ';' + message);
}

function clearLogs() {
    localStorage.setItem("logs", '');
    document.getElementById('debug').innerHTML = '';
}

let isMove = false;

function onMove() {
    writeLog('onMove()');
    isMove = true;
}

if (typeof (Storage) !== "undefined") {
    const wasMove = localStorage.getItem("is-move") === 'true';
    writeLog(`was move = ${wasMove}`);

    const loadingOverlay = document.querySelector('.loading-overlay');

    if (loadingOverlay) {
        writeLog(`changed style: ${wasMove ? 'none' : 'flex'}`);
        loadingOverlay.style.display = wasMove ? 'none' : 'flex';
    }

    window.addEventListener('beforeunload', function () {
        writeLog(`beforeunload: isMove = ${isMove}`);
        localStorage.setItem("is-move", isMove);
    });

    window.addEventListener('popstate', function () {
        writeLog(`popstate: isMove = ${isMove}`);
        localStorage.setItem("is-move", isMove);
    });
};

const debugElement = document.getElementById('debug');
if (debugElement) {
    debugElement.innerHTML = getLogs();
}
