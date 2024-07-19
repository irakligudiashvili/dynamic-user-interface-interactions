const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');

    toggle.addEventListener('click', () => {
        dropdown.classList.toggle('visible');
    })

    document.addEventListener('click', (e) => {
        if(!dropdown.contains(e.target)){
            dropdown.classList.remove('visible');
        }
    })
})