/* Start Timer*/
document.addEventListener("DOMContentLoaded", () => {
    const btn_stop_start = document.querySelector(".stop_start");
    const btn_stop_start_icon = document.querySelector(".stop_start i");
    const ptimer = document.querySelector("#Ptimer");
    const rotate_left = document.querySelector(".fa-rotate-left");
    const rotate_right = document.querySelector(".fa-rotate-right");
    const audio = document.getElementById('hiddenAudio');
    
    
    let intervalId = null; // للتحكم في التايمر
    let isRunning = false; // لمعرفة حالة التايمر (يعمل أو متوقف)
  
    function updateTimerDisplay(minutes, seconds) {
        const min = String(minutes).padStart(2, "0");
        const sec = String(seconds).padStart(2, "0");
        ptimer.innerHTML = `<span contenteditable="true">${min}</span>:<span contenteditable="true" class="s">${sec}</span>`;
    }
    
    function getTime() {
        const [minutes, seconds] = ptimer.textContent.split(":").map(Number);
        return { minutes, seconds };
    }
    
    function setTime(minutes, seconds) {
        updateTimerDisplay(minutes, seconds);
    }
    
    function startTimer() {
    intervalId = setInterval(() => {
    let { minutes, seconds } = getTime();
    
    if (seconds === 0) {
      if (minutes === 0) {
          clearInterval(intervalId);
          isRunning = false;
          btn_stop_start_icon.classList.remove("fa-pause");
          btn_stop_start_icon.classList.add("fa-play");
          audio.play();  // لتشغيل الصوت
          return;
      }
      minutes--;
      seconds = 59;
    } else {
        seconds--;
    }
      setTime(minutes, seconds);
    }, 1000);
    }
    
    
    btn_stop_start.onclick = function () {
    if (isRunning) {
        clearInterval(intervalId);
        isRunning = false;
        btn_stop_start_icon.classList.remove("fa-pause");
        btn_stop_start_icon.classList.add("fa-play");
    } else {
        isRunning = true;
        btn_stop_start_icon.classList.remove("fa-play");
        btn_stop_start_icon.classList.add("fa-pause");
        startTimer();
    }
    };
    
    rotate_left.onclick = function () {
      let { minutes, seconds } = getTime();
      seconds += 10;
      if (seconds >= 60) {
          minutes += Math.floor(seconds / 60);
          seconds = seconds % 60;
      }
      setTime(minutes, seconds);
    };
    
    rotate_right.onclick = function () {
      let { minutes, seconds } = getTime();
      if (seconds < 10 && minutes > 0) {
          minutes--;
          seconds += 50;
      } else if (seconds >= 10) {
          seconds -= 10;
      } else {
          minutes = 0;
          seconds = 0;
      }
      setTime(minutes, seconds);
    };
    let { minutes, seconds } = getTime();
    updateTimerDisplay(minutes || 0, seconds || 0);
    });
  /* End Timer*/
  