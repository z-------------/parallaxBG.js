var parallaxBG = {};

parallaxBG.init = function(elements, speed) {
    parallaxBG.speed = speed || 6;
    parallaxBG.elemns = elements;
    for (var i=0; i<elements.length; i++) {
        elements[i].style.backgroundPositionY = "50%";
    }
    window.addEventListener("scroll", parallaxBG.do);
};

parallaxBG.do = function() {
    for (i=0; i<parallaxBG.elemns.length; i++) {
        var scrElem = parallaxBG.elemns[i];
        if ((scrElem.offsetTop <= window.scrollY + window.innerHeight) && (scrElem.offsetTop + scrElem.offsetHeight >= window.scrollY)) {
            scrElem.style.backgroundPositionY = "calc(50% - " + ((scrElem.offsetTop + scrElem.offsetHeight / 2) - (window.scrollY + window.innerHeight / 2)) / parallaxBG.speed + "px)";
        }
    }
};