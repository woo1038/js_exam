window.addEventListener('scroll', function() {
    let a = document.documentElement.scrollTop;
    
    let r = parseInt(255);
    let g = parseInt(20);
    let b = parseInt(20);

    document.getElementById('long').style.background = 
    'rgb(' + r + ',' + g + ',' + b + ')';
    
    /* red, orange, yellow */
    if(a > 100 && a < 2000) {
        r = parseInt(255);
        g = parseInt(a/7);
        b = parseInt(20);
    
        document.getElementById('long').style.background = 
        'rgb(' + r + ',' + g + ',' + b + ')';
        console.log(a);   
    } /* green */
    else if(a >= 2000 && a < 3000) {
        r = parseInt(390-a/12);
        g = parseInt(255);
        b = parseInt(20);
    
        document.getElementById('long').style.background = 
        'rgb(' + r + ',' + g + ',' + b + ')';
    } /* sky */
    else if(a >= 3000 && a < 3900) {
        r = parseInt(340-a/15);
        g = parseInt(255-a/100);
        b = parseInt((a-2950)/3);
        
        
        document.getElementById('long').style.background = 
        'rgb(' + r + ',' + g + ',' + b + ')';
    } /* blue */
    else if(a >= 3900 && a < 4800) {
    r = parseInt(20);
    g = parseInt(1200-a/4);
    b = parseInt(255);

    document.getElementById('long').style.background = 
    'rgb(' + r + ',' + g + ',' + b + ')';
    } /* violet */
    else if(a >= 4800) {
        r = parseInt((a-4600)/5);
        g = parseInt(1200-a/4);
        b = parseInt(255);
    
        document.getElementById('long').style.background = 
        'rgb(' + r + ',' + g + ',' + b + ')';
        }
})