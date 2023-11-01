document.addEventListener("DOMContentLoaded", function() {
    const timeDisplay = document.getElementById("time");
    const alarmTime = document.getElementById("alarmTime");
    const setAlarmButton = document.getElementById("setAlarm");
    const alarmSound = document.getElementById("alarmSound");
    let alarmTimeout;

    setAlarmButton.addEventListener("click", function() {
        const currentTime = new Date();
        const alarmTimeValue = new Date(alarmTime.value);
        
        if (alarmTimeValue > currentTime) {
            const timeDifference = alarmTimeValue - currentTime;
            alarmTimeout = setTimeout(() => {
                playAlarm();
            }, timeDifference);
            timeDisplay.textContent = "Alarm set for " + alarmTimeValue.toLocaleTimeString();
        } else {
            alert("Please select a future time for the alarm.");
        }
    });

    function playAlarm() {
        alarmSound.play();
        timeDisplay.textContent = "Wake up!";
        setAlarmButton.disabled = true;
    }
});
