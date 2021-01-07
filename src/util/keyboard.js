import hotkeys from "hotkeys-js" ; // 2.6k

const observerMap = {}

export function addKeyObserver(key, callback) {
    if(!observerMap[key]) {
        observerMap[key] = [];
        hotkeys(key, () => executeCallbacks(key));
    }
    observerMap[key].push(callback);
}

export function removeKeyObserver(key, callback) {
    // 콜백이 아닌것만 모아서 제거를 하겠다
    observerMap[key] = observerMap[key].filter(item => item !== callback);
}

function executeCallbacks(key) {
    for(const ob of observerMap[key]) {
        ob();
    }
}

// 외부 키 이벤트 라이브러리
// hotkeys(key, () => {});