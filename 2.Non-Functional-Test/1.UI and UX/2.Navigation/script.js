document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const breadcrumbContainer = document.getElementById('breadcrumb');
    
    // Define a mapping of path segments to user-friendly labels
    const pathLabels = {
        '': 'Home',
        'services': 'Services',
        'software testing': 'Software Testing',
        'web development': 'Web Development',
        'mobile app': 'Mobile App',
        'about': 'About',
        'contact': 'Contact'
        // Add more mappings as needed
    };

    // Function to create breadcrumb items
    function createBreadcrumbs(pathArray) {
        return pathArray.map((item, index) => {
            const path = pathArray.slice(0, index + 1).join('/');
            const label = pathLabels[item] || item.replace(/-/g, ' '); // Use label from mapping or clean up item
            if (index === pathArray.length - 1) {
                return `<span>${label}</span>`;
            } else {
                return `<a href="${path}.html">${label}</a> &gt;`;
            }
        }).join(' ');
    }

    // Get the current path
    const currentPath = window.location.pathname.split('/').filter(part => part.length > 0);

    // Handle home page separately
    if (currentPath.length === 0 || (currentPath.length === 1 && currentPath[0] === './index.html')) {
        breadcrumbContainer.innerHTML = '<span>Home</span>';
    } else {
        const pathArray = currentPath.map(part => decodeURIComponent(part.replace('.html', '')));
        breadcrumbContainer.innerHTML = createBreadcrumbs(pathArray);
    }
});
