window.addEventListener('scroll', function() {
    let $scroll = document.documentElement.scrollTop;
    const $long = document.getElementById('long');

    let r = parseInt(255);
    let g = parseInt(20);
    let b = parseInt(20);

    $long.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
    
    /* red, orange, yellow */
    if($scroll > 100 && $scroll < 2000) {
        r = parseInt(255);
        g = parseInt($scroll/7);
        b = parseInt(20);
    
        $long.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';  
    } 
    /* green */
    else if($scroll >= 2000 && $scroll < 3000) {
        r = parseInt(390-$scroll/12);
        g = parseInt(255);
        b = parseInt(20);
    
        $long.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
    } 
    /* sky */
    else if($scroll >= 3000 && $scroll < 3900) {
        r = parseInt(340-$scroll/15);
        g = parseInt(255-$scroll/100);
        b = parseInt(($scroll-2950)/3);
        
        
        $long.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
    } 
    /* blue */
    else if($scroll >= 3900 && $scroll < 4800) {
    r = parseInt(20);
    g = parseInt(1200-$scroll/4);
    b = parseInt(255);

    $long.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
    } 
    /* violet */
    else if($scroll >= 4800) {
        r = parseInt(($scroll-4600)/5);
        g = parseInt(1200-$scroll/4);
        b = parseInt(255);
    
        $long.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
    }
})