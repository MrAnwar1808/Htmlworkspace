


function sendReminderNotification() {
    setTimeout(() => {
       
        const reminderMessage = document.getElementById('reminderMessage');
        reminderMessage.textContent = "Reminder: Your meeting starts now!";
        console.log("Reminder: Your meeting starts now!");
    }, 5000); 
}


let heartbeatInterval;

function startHeartbeatCheck() {
  
    heartbeatInterval = setInterval(function(){
        console.log("Checking user status..."); 
        const heartbeatStatus = document.getElementById('heartbeatStatus');
        heartbeatStatus.textContent = "Checking user status..."; 
    }, 3000); 
}


function stopHeartbeatCheck() {
    setTimeout(() => {

        clearInterval(heartbeatInterval); 
        console.log("System check completed");
        const heartbeatStatus = document.getElementById('heartbeatStatus');
        heartbeatStatus.textContent = "System check completed";

        // setTimeout(() => {
        //     console.log("Restarting heartbeat check...");
        //     startHeartbeatCheck(); 
        //     stopHeartbeatCheck(); 
        // }, 2000);

    }, 15000); 
}


window.onload = function() {
    
    sendReminderNotification();
    startHeartbeatCheck();
    stopHeartbeatCheck();
};
