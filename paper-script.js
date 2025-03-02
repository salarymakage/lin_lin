document.addEventListener('DOMContentLoaded', () => {
    const paperStack = document.getElementById('paper-stack');
    const pages = document.querySelectorAll('.paper-page');
    let currentPageIndex = 0;

    function updatePages() {
        pages.forEach((page, index) => {
            if (index <= currentPageIndex) {
                page.classList.add('slide-down');
                page.style.pointerEvents = 'none';
            } else {
                page.classList.remove('slide-down');
                page.style.pointerEvents = index === currentPageIndex + 1 ? 'auto' : 'none';
                page.style.zIndex = pages.length - index;
            }
            const prevArrow = page.querySelector('.prev-arrow');
            const nextArrow = page.querySelector('.next-arrow');
            if (prevArrow) prevArrow.style.display = currentPageIndex > 0 ? 'block' : 'none';
            if (nextArrow) nextArrow.style.display = currentPageIndex < pages.length - 1 ? 'block' : 'none';
        });
    }

    updatePages();

    paperStack.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('cat-btn')) return;

        if (target.classList.contains('next-arrow') && currentPageIndex < pages.length - 1) {
            currentPageIndex++;
            updatePages();
        } else if (target.classList.contains('prev-arrow') && currentPageIndex > 0) {
            currentPageIndex--;
            updatePages();
        }
        // Removed the else condition that allowed clicking anywhere to go to next page
    });
});