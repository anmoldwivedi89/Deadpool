// Utility to split text into spans
function splitTextIntoSpans(selector) {
    var elements = document.querySelectorAll(selector);
    elements.forEach(function (elem) {
        var text = elem.textContent;
        var splitText = text.split("");
        var storage = "";
        splitText.forEach(function (char) {
            if (char === " ") {
                storage += `<span class="letter">&nbsp;</span>`;
            } else {
                storage += `<span class="letter">${char}</span>`;
            }
        });
        elem.innerHTML = storage;
    });
}

// Navbar Animations & Logic
gsap.to('nav', {
    top: '0px',
    duration: 1.2,
    ease: "power3.out"
});

const searchIcon = document.querySelector('#search-icon');
const searchOverlay = document.querySelector('#search-overlay');
const closeSearch = document.querySelector('#close-search');

const userIcon = document.querySelector('#user-icon');
const userModal = document.querySelector('#user-modal');
const closeUser = document.querySelector('#close-user');

const menuBtn = document.querySelector('#menu-btn');
const menuOverlay = document.querySelector('#menu-overlay');
const closeMenu = document.querySelector('#close-menu');

// Search Toggle
if (searchIcon) {
    searchIcon.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        document.querySelector('#search-input').focus();
    });
}
if (closeSearch) {
    closeSearch.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
    });
}

// User Modal Toggle
if (userIcon) {
    userIcon.addEventListener('click', () => {
        userModal.classList.add('active');
    });
}
if (closeUser) {
    closeUser.addEventListener('click', () => {
        userModal.classList.remove('active');
    });
}

// Menu Toggle
if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        menuOverlay.classList.add('active');
    });
}
if (closeMenu) {
    closeMenu.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
    });
}

// Close on outside click
window.addEventListener('click', (e) => {
    if (e.target == userModal) userModal.classList.remove('active');
    if (e.target == searchOverlay) searchOverlay.classList.remove('active');
    if (e.target == menuOverlay) menuOverlay.classList.remove('active');
});

/* <=============================== Global Animations ======================================= > */

// Split all major headings
splitTextIntoSpans('.subpage-hero h1');
splitTextIntoSpans('.herobox-mainheading');
splitTextIntoSpans('.heros-names');

// Home Herobox Reveal
if (document.querySelector('.herobox')) {
    gsap.to('.red-circle', {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out"
    });

    gsap.to('.character', {
        bottom: '0%',
        scale: 1,
        duration: 1.5,
        ease: "expo.out",
        from: { scale: 0.8, opacity: 0 }
    });

    gsap.to('.herobox-mainheading .letter', {
        x: 0,
        opacity: 1,
        transform: 'rotateY(0deg)',
        duration: 1.5,
        stagger: 0.03,
        ease: "expo.out",
        from: { x: 150, opacity: 0, transform: 'rotateY(90deg)' }
    });

    gsap.to('.herobox-content-container .heros-names .letter', {
        x: 0,
        opacity: 1,
        transform: 'rotateY(0deg)',
        duration: 1.2,
        stagger: 0.04,
        ease: "back.out(1.7)",
        from: { x: -80, opacity: 0, transform: 'rotateY(90deg)' }
    });

    gsap.to('.herobox .hero-slider', {
        bottom: '30%',
        opacity: 1,
        duration: 1,
        delay: 0.5
    });
}

// Subpage Hero Animation (Level Matched with Home)
if (document.querySelector('.subpage-hero h1')) {
    gsap.to('.subpage-hero h1 .letter', {
        y: 0,
        opacity: 1,
        transform: 'rotateY(0deg) scale(1)',
        duration: 1.5,
        stagger: 0.08,
        ease: "expo.out",
        from: {
            y: 150,
            opacity: 0,
            transform: 'rotateY(180deg) scale(0.5)'
        }
    });

    gsap.to('.subpage-hero .red-bg', {
        scale: 2,
        opacity: 0.8,
        duration: 3,
        ease: "power2.inOut",
        from: { scale: 0.5, opacity: 0 }
    });

    // Parallax Effect on Scroll
    gsap.to('.subpage-hero h1', {
        y: 200,
        scrollTrigger: {
            trigger: '.subpage-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });
}

// 3D Grid Reveal for Cast & Stats
if (document.querySelector('.cast-card, .stat-card')) {
    gsap.to('.cast-card, .stat-card', {
        autoAlpha: 1,
        y: 0,
        rotationX: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.5,
        ease: "power4.out",
        from: {
            y: 100,
            rotationX: -45,
            opacity: 0
        }
    });
}

/* <=============================== Herobox ======================================= > */
// Header & Grid Entrance
if (document.querySelector('.top-bar')) {
    gsap.to('.top-bar', {
        top: '5%',
        opacity: 1,
        duration: 1,
        ease: "power2.out"
    })
}

if (document.querySelector('.grid')) {
    gsap.to('.grid', {
        top: '8%',
        opacity: 1,
        duration: 1
    })
}

if (document.querySelector('.slider-container')) {
    gsap.to('.slider-container', {
        left: '-600px',
        duration: 10,
        repeat: -1,
        ease: 'none'
    })
}


/* <=============================== Section 1 ======================================= > */

gsap.to('.marvel-studio', {
    top: '8%',
    duration: 1,
    opacity: 1,
    scrollTrigger: {
        trigger: '.section-1',
        start: 'top 80%'
    }
})

gsap.to('.date-status', {
    top: '8%',
    duration: 1,
    opacity: 1,
    filter: 'blur(0px)',
    scrollTrigger: {
        trigger: '.section-1',
        start: 'top 80%'
    }
})

gsap.to('.section1-right-top-description', {
    top: '8%',
    duration: 1,
    opacity: 1,
    filter: 'blur(0px)',
    scrollTrigger: {
        trigger: '.section-1',
        start: 'top 80%'
    }
})

gsap.to('.card-container', {
    top: '50%',
    transform: 'translate(-50%, -50%)',
    duration: 1,
    scrollTrigger: {
        trigger: '.section-1',
        start: 'top 40%'
    }
})

gsap.to('.card-container .card:nth-child(1)', {
    transform: 'rotate(5deg)',
    duration: 1,
    scrollTrigger: {
        trigger: '.section-1',
        start: 'top 40%'
    }
})

gsap.to('.card-container .card:nth-child(2)', {
    transform: 'rotate(15deg)',
    duration: 1,
    scrollTrigger: {
        trigger: '.section-1',
        start: 'top 40%'
    }
})

gsap.to('.card-container .card:nth-child(3)', {
    transform: 'rotate(-15deg)',
    duration: 1,
    scrollTrigger: {
        trigger: '.section-1',
        start: 'top 40%'
    }
})

gsap.to('.rating', {
    left: '60px',
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        trigger: '.section-1',
        start: 'top 40%'
    }
})

gsap.to('.socials', {
    right: '60px',
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        trigger: '.section-1',
        start: 'top 40%'
    }
})
gsap.to('.slider-left-indicator', {
    left: '0px',
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        trigger: '.section-1',
        start: 'top 40%'
    }
})

gsap.to('.slider-right-indicator', {
    right: '0px',
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        trigger: '.section-1',
        start: 'top 40%'
    }
})

gsap.to('.left-section1-content', {
    top: '52%',
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        trigger: '.section-1',
        start: 'top 20%'
    }
})

var sectionOneFooterHeadings = document.querySelectorAll('.section-1FooterHeading');

sectionOneFooterHeadings.forEach(function (sectionOneFooterElement) {
    var sectionOneFooterElementText = sectionOneFooterElement.textContent.split('')
    var sectionOneFooterStorage = ''
    sectionOneFooterElementText.forEach(function (sectionOneFooterElementLetters) {
        sectionOneFooterStorage += `<span>${sectionOneFooterElementLetters}</span>`
    })
    sectionOneFooterElement.innerHTML = sectionOneFooterStorage
})


gsap.to('.section-1 .section-1FooterHeading span', {
    left: '0px',
    transform: 'rotateY(0deg)',
    duration: 1,
    opacity: 1,
    scrollTrigger: {
        trigger: '.section-1',
        start: 'top 10%'
    },
    stagger: 0.04
})

gsap.to('.section-1 p.section-1footer-date', {
    left: '60px',
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        trigger: '.section-1',
        start: 'top 10%'
    }
})


/* <=============================== Section 2 ======================================= > */

gsap.to('.section2-counting', {
    top: '5%',
    duration: 1,
    opacity: 1,
    scrollTrigger: {
        trigger: '.section-2',
        start: 'top 80%'
    }
})

gsap.to('.section-2 h1.section-2-mainHeading', {
    scale: 1,
    duration: 1,
    opacity: 1,
    scrollTrigger: {
        trigger: '.section-2',
        start: 'top 80%'
    }
})

gsap.to('.left-users', {
    left: '0px',
    duration: 1,
    opacity: 1,
    scrollTrigger: {
        trigger: '.section-2',
        start: 'top 80%'
    }
})

gsap.to('.mid-arrows', {
    scale: 1,
    duration: 1,
    opacity: 1,
    scrollTrigger: {
        trigger: '.section-2',
        start: 'top 70%'
    }
})


gsap.to('.right-cd', {
    right: '0px',
    duration: 1,
    opacity: 1,
    scrollTrigger: {
        trigger: '.section-2',
        start: 'top 80%'
    }
})
gsap.to('.left-section2-content', {
    scale: 1,
    filter: 'blur(0px)',
    duration: 1,
    opacity: 1,
    scrollTrigger: {
        trigger: '.section-2',
        start: 'top 40%'
    }
})

gsap.to('.card-img', {
    top: '80%',
    duration: 1,
    opacity: 1,
    scrollTrigger: {
        trigger: '.section-2',
        start: '20% 40%'
    }
})

gsap.to('.left-footer-image', {
    top: '0px',
    duration: 1,
    scrollTrigger: {
        trigger: '.section-2',
        start: 'top 40%'
    }
})

gsap.to('.right-footer-image', {
    top: '0px',
    duration: 1,
    scrollTrigger: {
        trigger: '.section-2',
        start: 'top 40%'
    }
})

gsap.to('.deadpool-character', {
    bottom: '0%',
    duration: 1,
    opacity: 1,
    scrollTrigger: {
        trigger: '.section-2',
        start: '20% 20%'
    }
})


gsap.to('.deadpool-character', {
    top: '146.5%',
    left: '35%',
    scale: 1.8,
    duration: 1,
    scrollTrigger: {
        trigger: '.footer',
        start: 'top 50%',
        end: 'bottom 100%',
        scrub: 1
    },
})

gsap.to('.footer-content', {
    scale: 1,
    opacity: 1,
    filter: 'blur(0px)',
    duration: 1,
    scrollTrigger: {
        trigger: '.footer',
        start: 'top 50%',
        end: 'bottom 100%',
    },
})
