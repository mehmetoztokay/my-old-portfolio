//Index Page*
var indexLinks = document.querySelector('.nav-links-container');
var lineSymbol = document.querySelector('.my-icon');
var indexInfo = document.querySelector('.index-info');
var lineSymbolDisplay = lineSymbol.style.display;
if (lineSymbol) {
    lineSymbol.addEventListener('click', () => {
        lineSymbol.style.display = 'none';
        indexLinks.style.display = 'flex';
        indexInfo.style.opacity = '0';
    });
}


if (lineSymbol) {
    var body = document.querySelector('body');
    body.addEventListener('click', (e) => {
        if (!(e.target.className === 'my-icon' || e.target.className === 'nav-links-container' || indexLinks.style.display == 'flex')) {
            indexInfo.classList.add('index-info-active')
        }
    });
    setTimeout(() => {
        if (indexInfo.className == 'index-info') {
            indexInfo.classList.add('index-info-active')
        }
    }, 8000);
}

