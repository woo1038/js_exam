const $satrt_btn = document.querySelector('.start_btn');
const $stop_btn = document.querySelector('.stop_btn');
const $re_btn = document.querySelector('.re_btn');
$satrt_btn.textContent = 'start';
$stop_btn.textContent = 'stop';
$re_btn.textContent = 're';

let box = document.querySelector(".red");
let pos = 0;
let a = false;

$satrt_btn.addEventListener('click', function() {
    a = false;
    setInterval(function() {
        if(!a) {
            if(pos === 399){
                clearInterval();
            }else {
                pos++;
                box.style.width = pos + 'px';
                box.style.height = pos + 'px';
                console.log(pos);
                
            }
        }
    }, 5);
});

$stop_btn.addEventListener('click', function(b) {
        b.preventDefault();
        a = true;
});


$re_btn.addEventListener('click', function () {
    a = false;
    setInterval(function () {
        if (!a) {
            if (pos === 1) {
                clearInterval();
            } else {
                pos--;
                box.style.width = pos + 'px';
                box.style.height = pos + 'px';
            }
        }
    }, 5);
})
