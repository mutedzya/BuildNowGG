document.addEventListener('DOMContentLoaded', () => {
    // Grab all filter buttons and tutorial cards
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');

    // Add click events to the filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove 'active' styling from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add 'active' styling to the clicked button
            btn.classList.add('active');

            // Find out which category was clicked
            const filterValue = btn.getAttribute('data-filter');

            // Loop through all cards to show/hide them based on the category
            cards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Simple alert for the hero button
    const ctaBtn = document.querySelector('.cta-btn');
    ctaBtn.addEventListener('click', () => {
        window.scrollTo({
            top: document.querySelector('.content').offsetTop,
            behavior: 'smooth'
        });
    });
});
