

function getCurrentDateTime() {
    var now = new Date();
    var day = now.toLocaleDateString('en-US', { weekday: 'long' });
    var date = now.getDate();
    var month = now.toLocaleDateString('en-US', { month: 'long' });
    var year = now.getFullYear();
    var hours = now.getHours() % 12 || 12;
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    var ampm = hours >= 12 ? 'PM' : 'AM';

    var dateTime = `${day}, ${date} ${month} ${year} ${hours}:${minutes}:${seconds} ${ampm}`;
    return dateTime;
}

function showDateTime() {
    var dateTime = getCurrentDateTime();
    document.getElementById('datetime').textContent = dateTime;
    setTimeout(showDateTime, 1000);
}

