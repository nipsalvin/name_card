// Dynamic copyright year
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('#footer .copyright');
    if (copyrightElement) {
        copyrightElement.innerHTML = `&copy; ${currentYear} Alvin Mwaniki`;
    }
}

// Initialize when DOM is loaded
if ('addEventListener' in window) {
    window.addEventListener('load', function() { 
        document.body.className = document.body.className.replace(/\bis-loading\b/, ''); 
        updateCopyrightYear();
    });
    document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
}