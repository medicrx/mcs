---
    layout: null
---

// Consolidated window load handler
window.addEventListener('load', function() {
    try {
        // Load sw-register script dynamically
        var script = document.createElement('script');
        var firstScript = document.getElementsByTagName('script')[0];
        script.async = true;
        script.src = '{{'sw-register.js'|relative_url}}?v=' + Date.now();
        
        if (firstScript && firstScript.parentNode) {
            firstScript.parentNode.insertBefore(script, firstScript);
        }
        
        // Register service worker if supported
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./service-worker.js', { scope: '.' })
                .then(function() {
                    console.log('SW registered!');
                })
                .catch(function(error) {
                    console.error('SW registration failed!', error);
                });
        }
    } catch (error) {
        console.error('Error during initialization:', error);
    }
});
