(function() {
    'use strict';

    const _log = console.log;
    console.log = function() {};
    console.error = function() {};
    console.warn = function() {};

    Object.defineProperty(document, 'hasFocus', {
        value: () => true,
        configurable: false,
        writable: false
    });

    Object.defineProperty(document, 'visibilityState', {
        value: "visible",
        configurable: false,
        writable: false
    });

    window.focus = function() {};
    window.blur = function() {};

    const origAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function(type, listener, options) {
        if (type === 'visibilitychange' || type === 'blur' || type === 'focus') {
            return;
        }
        return origAddEventListener.apply(this, arguments);
    };

    const iframe = document.createElement('iframe');
    iframe.src = 'https://example.com'; 
    iframe.style.position = 'fixed';
    iframe.style.top = '0px';
    iframe.style.left = '0px';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.zIndex = '-1';
    iframe.style.border = 'none';
    iframe.style.opacity = '0.01';
    iframe.allow = "fullscreen; display-capture";
    document.documentElement.appendChild(iframe);

    _log("SEB Lockdown bypassed.");
})();