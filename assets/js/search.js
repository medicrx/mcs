// Pagination variables
let currentPage = 1;
let totalPages = 1;
const categoriesPerPage = 6;
let isSearching = false;
let lastPageBeforeSearch = 1; // keep track of last page

// Initialize pagination
function initPagination() {
    const articles = document.querySelectorAll('.articles');
    totalPages = Math.ceil(articles.length / categoriesPerPage);

    // Set data-page attributes if not set
    articles.forEach((article, index) => {
        if (!article.dataset.page) {
            article.dataset.page = Math.floor(index / categoriesPerPage) + 1;
        }
    });

    showPage(1);
    setupPaginationEvents();
}

// Show specific page
function showPage(page) {
    if (isSearching) return; // Don't paginate during search

    const articles = document.querySelectorAll('.articles');
    articles.forEach(article => {
        const articlePage = parseInt(article.dataset.page);
        article.style.display = articlePage === page ? 'block' : 'none';

        // reset list visibility when switching pages
        const liElements = article.querySelectorAll('li');
        for (const li of liElements) {
            li.style.display = "block";
        }
    });

    currentPage = page;
    updatePaginationControls();
}

// Update pagination button states
function updatePaginationControls() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageInfo = document.getElementById('pageInfo');

    if (!prevBtn || !nextBtn || !pageInfo) return;

    pageInfo.textContent = `Page ${currentPage} sur ${totalPages}`;

    // Update previous button
    prevBtn.disabled = currentPage === 1;
    prevBtn.style.opacity = currentPage === 1 ? '0.5' : '1';
    prevBtn.style.cursor = currentPage === 1 ? 'not-allowed' : 'pointer';

    // Update next button
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.style.opacity = currentPage === totalPages ? '0.5' : '1';
    nextBtn.style.cursor = currentPage === totalPages ? 'not-allowed' : 'pointer';
}

// pagination event listeners
function setupPaginationEvents() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                showPage(currentPage - 1);
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                showPage(currentPage + 1);
            }
        });
    }
}

// search function with pagination
function searchFunction() {
    const input = document.getElementById('mySearchInput');
    if (!input) return;

    const filter = input.value.toUpperCase();
    const articles = document.querySelectorAll('.articles');
    const paginationControls = document.querySelector('.pagination-controls');

    if (filter === '') {
        // Reset search and pagination
        isSearching = false;
        if (paginationControls) {
            paginationControls.style.display = 'flex';
        }
        // Reset all articles list
        for (const article of articles) {
            const liElements = article.querySelectorAll('li');
            for (const li of liElements) {
                li.style.display = "block";
            }
        }
        // Restore to last page before search
        showPage(lastPageBeforeSearch);
    } else {
        if (!isSearching) {
            lastPageBeforeSearch = currentPage; // remember current page before search
        }
        isSearching = true;

        if (paginationControls) {
            paginationControls.style.display = 'none';
        }

        for (const article of articles) {
            article.style.display = 'block'; // Show all articles for search

            const ul = article.querySelector('.searchable-ul');
            if (!ul) continue;

            const li = ul.querySelectorAll('li');
            let hasVisibleItems = false;

            for (const liElement of li) {
                const a = liElement.querySelector("a");
                if (a && a.innerHTML.toUpperCase().includes(filter)) {
                    liElement.style.display = "block";
                    hasVisibleItems = true;
                } else {
                    liElement.style.display = "none";
                }
            }
            article.style.display = hasVisibleItems ? 'block' : 'none';
        }
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize pagination
    initPagination();

    // Setup search
    const searchInput = document.getElementById('mySearchInput');
    if (searchInput) {
        searchInput.addEventListener('input', searchFunction);
        searchInput.addEventListener('keyup', searchFunction);
    }
});
