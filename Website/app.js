if(document.querySelector('.theme-button')) {
    toggleTheme();
}
if(document.querySelector('.special-bg-btn')) {
    toggleSpBG();
}

function toggleTheme() {
    var themeswitcher = document.querySelector('.theme-button');    
    themeswitcher.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');
    });
}

function toggleSpBG() {
    var secretbgswitcher = document.querySelector('.special-bg-btn');
    secretbgswitcher.addEventListener('click', function() {
        document.body.classList.toggle('special-background');
        document.body.classList.toggle('special-background2');
    });
}
