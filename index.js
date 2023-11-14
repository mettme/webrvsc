var navTrig = document.getElementById('navTrig');
var navBar = document.getElementById('navBar');
var navOverlay = document.getElementById('navOverlay');
var aboutNavTrig = document.getElementById('aboutNavTrig');
var eventsNavTrig = document.getElementById('eventsNavTrig');

var introGap = document.getElementById('introGap');

var navOpacity = 0;

let navShow = true;

window.addEventListener('scroll', function() {
    let scrollValue = window.scrollY;

    introGap.style.opacity = scrollValue * 0.0017;
})

navTrig.addEventListener('click', function() {
    if (navShow == false) {
        navBar.style.transform = 'translateX(-100%)';
        navOverlay.style.backdropFilter = 'blur(0px)';
        navOverlay.style.pointerEvents = 'none';
        return navShow = true;
    } else {
        navBar.style.transform = 'translateX(0%)';
        navOverlay.style.backdropFilter = 'blur(24px)';
        navOverlay.style.pointerEvents = 'all';
        return navShow = false;
    }
});

aboutNavTrig.addEventListener('click', function() {
    if (navShow == false) {
        navBar.style.transform = 'translateX(-100%)';
        navOverlay.style.backdropFilter = 'blur(0px)';
        navOverlay.style.pointerEvents = 'none';
        return navShow = true;
    } else {
        navBar.style.transform = 'translateX(0%)';
        navOverlay.style.backdropFilter = 'blur(24px)';
        navOverlay.style.pointerEvents = 'all';
        return navShow = false;
    }
})

eventsNavTrig.addEventListener('click', function() {
    if (navShow == false) {
        navBar.style.transform = 'translateX(-100%)';
        navOverlay.style.backdropFilter = 'blur(0px)';
        navOverlay.style.pointerEvents = 'none';
        return navShow = true;
    } else {
        navBar.style.transform = 'translateX(0%)';
        navOverlay.style.backdropFilter = 'blur(24px)';
        navOverlay.style.pointerEvents = 'all';
        return navShow = false;
    }
})