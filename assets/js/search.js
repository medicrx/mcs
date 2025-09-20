function searchFunction() {
    const input = document.getElementById('mySearchInput');
    if (!input) return;

    const filter = input.value.toUpperCase();
    const articles = document.querySelectorAll('.articles');

    for (const article of articles) {
        const ul = article.querySelector('.searchable-ul');
        if (!ul) continue;

        const li = ul.querySelectorAll('li');
        let hasVisibleItems = false;

        for (const liElement of li) {
            const a = liElement.querySelector("a");
            if (a && (filter === '' || a.innerHTML.toUpperCase().includes(filter))) {
                liElement.style.display = "block";
                hasVisibleItems = true;
            } else {
                liElement.style.display = "none";
            }
        }

        article.style.display = hasVisibleItems || filter === '' ? 'block' : 'none';
    }
}

// Add event listener when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('mySearchInput');
    if (searchInput) {
        searchInput.addEventListener('input', searchFunction);
        searchInput.addEventListener('keyup', searchFunction);
    }
});
