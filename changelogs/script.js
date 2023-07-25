const changelogs = document.querySelectorAll('.changelog');

// Dodaj efekty po najechaniu na changelog
changelogs.forEach(changelog => {
    changelog.addEventListener('mouseover', () => {
        changelog.style.transform = 'scale(1.05)';
    });

    changelog.addEventListener('mouseout', () => {
        changelog.style.transform = 'scale(1)';
    });
});