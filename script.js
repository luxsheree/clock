const cities = [
{ name: "Los Angeles", timezone: "America/Los_Angeles" },
{ name: "Denver", timezone: "America/Denver" }, // Central Time Zone (CT)
{ name: "New York", timezone: "America/New_York" },
{ name: "Amsterdam", timezone: "Europe/Amsterdam" },
{ name: "London", timezone: "Europe/London" },
{ name: "Tokyo", timezone: "Asia/Tokyo" },
{ name: "India", timezone: "Asia/Kolkata" },
{ name: "Sydney", timezone: "Australia/Sydney" },
{ name: "Auckland", timezone: "Pacific/Auckland" },
{ name: "Moscow", timezone: "Europe/Moscow" },
{ name: "Dubai", timezone: "Asia/Dubai" },
{ name: "Bangkok", timezone: "Asia/Bangkok" },
{ name: "Cape Town", timezone: "Africa/Johannesburg" }, // Johannesburg timezone covers Cape Town as well
{ name: "Rio de Janeiro", timezone: "America/Sao_Paulo" }, // Sao Paulo timezone covers Rio as well
{ name: "Mexico City", timezone: "America/Mexico_City" },
{ name: "Buenos Aires", timezone: "America/Argentina/Buenos_Aires" },
{ name: "Reykjavik", timezone: "Atlantic/Reykjavik" },
{ name: "Cairo", timezone: "Africa/Cairo" },
{ name: "Istanbul", timezone: "Europe/Istanbul" },
{ name: "Beijing", timezone: "Asia/Shanghai" }, // Shanghai timezone covers Beijing as well
{ name: "Seoul", timezone: "Asia/Seoul" },
{ name: "Jakarta", timezone: "Asia/Jakarta" },
{ name: "Honolulu", timezone: "Pacific/Honolulu" },
{ name: "Anchorage", timezone: "America/Anchorage" },
{ name: "Baker Island", timezone: "Pacific/Baker" }, // UTC-12:00
{ name: "Honolulu", timezone: "Pacific/Honolulu" }, // UTC-10:00
{ name: "Anchorage", timezone: "America/Anchorage" }, // UTC-09:00
{ name: "Los Angeles", timezone: "America/Los_Angeles" }, // UTC-08:00
{ name: "Mexico City", timezone: "America/Mexico_City" }, // UTC-06:00
{ name: "New York", timezone: "America/New_York" }, // UTC-05:00
{ name: "Caracas", timezone: "America/Caracas" }, // UTC-04:00
{ name: "Santiago", timezone: "America/Santiago" }, // UTC-04:00 (UTC-03:00 in daylight saving time)
{ name: "St. John's", timezone: "America/St_Johns" }, // UTC-03:30
{ name: "Buenos Aires", timezone: "America/Argentina/Buenos_Aires" }, // UTC-03:00
{ name: "Rio de Janeiro", timezone: "America/Sao_Paulo" }, // UTC-03:00
{ name: "South Georgia", timezone: "Atlantic/South_Georgia" }, // UTC-02:00
{ name: "Noronha", timezone: "America/Noronha" }, // UTC-02:00
{ name: "Praia", timezone: "Atlantic/Cape_Verde" }, // UTC-01:00
{ name: "Reykjavik", timezone: "Atlantic/Reykjavik" }, // UTC+00:00
{ name: "London", timezone: "Europe/London" }, // UTC+00:00 (UTC+01:00 in daylight saving time)
{ name: "Amsterdam", timezone: "Europe/Amsterdam" }, // UTC+01:00
{ name: "Cape Town", timezone: "Africa/Johannesburg" }, // UTC+02:00
{ name: "Cairo", timezone: "Africa/Cairo" }, // UTC+02:00
{ name: "Istanbul", timezone: "Europe/Istanbul" }, // UTC+03:00
{ name: "Moscow", timezone: "Europe/Moscow" }, // UTC+03:00
{ name: "Dubai", timezone: "Asia/Dubai" }, // UTC+04:00
{ name: "Kabul", timezone: "Asia/Kabul" }, // UTC+04:30
{ name: "Karachi", timezone: "Asia/Karachi" }, // UTC+05:00
{ name: "India", timezone: "Asia/Kolkata" }, // UTC+05:30
{ name: "Kathmandu", timezone: "Asia/Kathmandu" }, // UTC+05:45
{ name: "Dhaka", timezone: "Asia/Dhaka" }, // UTC+06:00
{ name: "Yangon", timezone: "Asia/Yangon" }, // UTC+06:30
{ name: "Bangkok", timezone: "Asia/Bangkok" }, // UTC+07:00
{ name: "Jakarta", timezone: "Asia/Jakarta" }, // UTC+07:00
{ name: "Beijing", timezone: "Asia/Shanghai" }, // UTC+08:00
{ name: "Tokyo", timezone: "Asia/Tokyo" }, // UTC+09:00
{ name: "Seoul", timezone: "Asia/Seoul" }, // UTC+09:00
{ name: "Adelaide", timezone: "Australia/Adelaide" }, // UTC+09:30
{ name: "Sydney", timezone: "Australia/Sydney" }, // UTC+10:00
{ name: "Lord Howe Island", timezone: "Australia/Lord_Howe" }, // UTC+10:30
{ name: "Vanuatu", timezone: "Pacific/Efate" }, // UTC+11:00
{ name: "Norfolk Island", timezone: "Pacific/Norfolk" }, // UTC+11:00
{ name: "Auckland", timezone: "Pacific/Auckland" }, // UTC+12:00
{ name: "Chatham Islands", timezone: "Pacific/Chatham" }, // UTC+12:45
{ name: "Apia", timezone: "Pacific/Apia" }, // UTC+13:00
{ name: "Kiritimati", timezone: "Pacific/Kiritimati" }, // UTC+14:00

    // Add more cities as needed
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

function updateClocks() {
    shuffleArray(cities); // Shuffle the cities array
    const clocksContainer = document.getElementById('clocksContainer');
    clocksContainer.innerHTML = ''; // Clear existing clocks

    // Change '4' to however many clocks you want to display
    cities.slice(0, 20).forEach(city => {
        const time = new Date().toLocaleTimeString('en-US', { timeZone: city.timezone });
        const clockHTML = `
        <div class="clock">
        <div class="city-name">${city.name}</div>
        <div class="city-time">${time}</div>
    </div>
        `;
        clocksContainer.innerHTML += clockHTML;
    });
}

// Initial update and set interval for live updating
updateClocks();
setInterval(updateClocks, 1000); // Update every second
;
