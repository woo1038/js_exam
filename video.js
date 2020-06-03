/* ============== 전역 변수 ============ */
const $video = document.getElementById('video');
const $play = document.getElementById('btn_play');
const $pause = document.getElementById('btn_pause');
const $stop = document.getElementById('btn_stop');
const $mute = document.getElementById('btn_mute');
const $vm = document.getElementById('btn_vm');
const $volumeslider = document.getElementById('volumeslider');
const $vmup = document.getElementById('btn_vmup');
const $vmdown = document.getElementById('btn_vmdown');
const $full = document.getElementById('btn_fullscreen');
const $timeCurrent = document.getElementById('current_time');
const $timeTotal = document.getElementById('total_time');
const $progress = document.getElementById('progress');
const $progressBar = document.getElementById('bar');
$video.volume = 1;


/* ================ 함수 ================ */

// 재생 일시정지 함수
function playPause() {
    if($video.paused) {
        $video.play();
        $play.style.display = 'none';
        $pause.style.display = 'inline-block';
    }else {
        $video.pause();
        $play.style.display = 'inline-block';
        $pause.style.display = 'none';
    }
}


// 정지 함수
function stopPlayer() {
    if($video.play)
    {
        $play.style.display = 'inline-block';
        $pause.style.display = 'none';
    }
    $video.pause();
    $video.currentTime = 0;
}


// 음소거 및 볼륨있음 함수
function soundPlayer() {
    if($video.muted === false)
    {
        $mute.style.display = 'none';
        $vm.style.display = 'inline-block';
        $volumeslider.value = 0;
        $video.muted = true;
    }else if($video.muted === true) {
        $mute.style.display = 'inline-block';
        $vm.style.display = 'none';        
        $volumeslider.value = $video.volume * 10;
        $video.muted = false;
    }
}


// 볼륨Bar 함수
function setvolume() {
    $video.volume = $volumeslider.value / 10;
}


// 볼륨 Up & Down 함수
function soundUpDown(sound) {
    if(sound === 'UP') {
        if($video.volume >= 1) {
            return false;
        }else {
            $volumeslider.value++;
            $video.volume = $volumeslider.value / 10;
        }
    }
    else if(sound === 'DOWN'){
        if($video.volume <= 0) {
            return false;
        }else {
            $volumeslider.value--;
            $video.volume = $volumeslider.value / 10;
        }
    }
}


//전체화면 함수
function fullScreen() {
    if ($video.requestFullscreen) {
        $video.requestFullscreen();
    } else if ($video.mozRequestFullScreen) {
        /* Firefox */
        $video.mozRequestFullScreen();
    } else if ($video.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        $video.webkitRequestFullscreen();
    } else if ($video.msRequestFullscreen) {
        /* IE/Edge */
        $video = window.top.document.body; //To break out of frame in IE
        $video.msRequestFullscreen();
    }
}


//재생시간함수
function playTime() {
    //video 총 재생시간
    $video.addEventListener('durationchange', function() {
        let $duration = $video.duration;
        let $duration_min = Math.floor($duration / 60);
        let $duration_sec = Math.floor($duration - ($duration_min * 60));
        if ($duration_min < 10) {
            $duration_min = "0" + $duration_min;
        }
        if ($duration_sec < 10) {
            $duration_sec = "0" + $duration_sec;
        }
        let durationTotal = $duration_min + ":" + $duration_sec;
        $timeTotal.innerHTML = durationTotal;
    });
    
    // video 현재 재생 시간
    $video.addEventListener('timeupdate', function() {
        if($video.duration === $video.currentTime) {
            $play.style.display = "inline-block";
            $pause.style.display = 'none';
        }
        let $current = $video.currentTime;
        let $current_min = Math.floor($current / 60);
        let $current_sec = Math.floor($current - ($current_min * 60));
        if($current_min < 10) {
            $current_min = "0" + $current_min;
        }
        if($current_sec < 10) {
            $current_sec = "0" + $current_sec;
        }
        let $currentTotal = $current_min + ":" + $current_sec;
        $timeCurrent.innerHTML = $currentTotal;
    });
}


// progress bar
function progressPlayer() {
    $video.addEventListener('timeupdate', function() {
        let $max = Math.floor($video.duration);
        let $current = Math.floor($video.currentTime);
        let $percent = 100 * ($current / $max);
        $progressBar.style.width = $percent + '%';        
    });
}




/* =============== 실행 함수 ============== */
playTime();
progressPlayer();



/* ============== 버튼 이벤트 ============== */

// 재생
$play.addEventListener('click', playPause);


//일시정지
$pause.addEventListener('click', playPause);


//정지
$stop.addEventListener('click', stopPlayer);


//음소거
$mute.addEventListener('click', soundPlayer);


//볼륨있음
$vm.addEventListener('click', soundPlayer);


//slider
$volumeslider.addEventListener('change', setvolume);


// 볼륨 업
$vmup.addEventListener('click', function() {
    soundUpDown('UP');
});


// 볼륨 다운
$vmdown.addEventListener('click', function() {
    soundUpDown('DOWN');
});


// 전체 화면
$full.addEventListener('click', fullScreen);


// progress bar seek(진행률 클릭 이벤트)
$progress.addEventListener('click', function() {
    let $seekTotal = parseInt(this.offsetWidth);    // progress bar 길이
    let $seekX = event.offsetX;                     // progress bar 클릭 위치
    let $seekPercent = 100 * ($seekX / $seekTotal); // progress bar 전체에서 클릭위치 percent
    $progressBar.style.width = $seekPercent + '%';  
    let $seekMove = ($seekPercent / 100) * Math.floor($video.duration);
    $video.currentTime = $seekMove;
});