---
    layout: null
---

    window.onload = function () {
        var script = document.createElement('script');
        var firstScript = document.getElementsByTagName('script')[0];
        script.async = true;
        script.src = '{{'sw-register.js'|relative_url}}?v=' + Date.now();
        firstScript.parentNode.insertBefore(script, firstScript);

    };

// Only trigger if service workers are supported in browser.
if ('serviceWorker' in navigator) {
    // Wait until window is loaded before registering.
    window.addEventListener('load', () => {
        // Register the service worker with base scope.
        navigator.serviceWorker.register('./service-worker.js', { scope: '.' })
            // Debugging.
            .then(() => console.log('SW registered!'))
            .catch((error) => console.error('SW registration failed!', error));
    });
}
