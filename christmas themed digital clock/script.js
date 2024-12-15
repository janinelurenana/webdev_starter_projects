function updateClock() {  
    const now = new Date();  
    let hours = now.getHours();  
    const minutes = String(now.getMinutes()).padStart(2, '0');  
    const seconds = String(now.getSeconds()).padStart(2, '0');  
    const ampm = hours >= 12 ? 'PM' : 'AM';
 
    hours = hours % 12;  
    hours = hours ? String(hours).padStart(2, '0') : '12';   

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;  
    document.getElementById('clock').textContent = timeString;  
}  
  
setInterval(updateClock, 1000);    
updateClock();
