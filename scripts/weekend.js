// Britney Amaro
// This script generates a simple calendar and displays events using arrays

// Array holding event data (date + event name)
const events = [
    { date: "2026-05-01", title: "Jazz Night" },
    { date: "2026-05-02", title: "Taste of Italy Night" },
    { date: "2026-05-03", title: "Karaoke Night" },
    { date: "2026-05-04", title: "Photography Tour" },
    { date: "2026-05-05", title: "Yoga Session/HITT Session" },
    { date: "2026-05-06", title: "Murder Mystery Night" },
    { date: "2026-05-07", title: "Argentinian Grill Night" },
    { date: "2026-05-08", title: "Jazz Night" },
    { date: "2026-05-09", title: "Taste of Italy Night" },
    { date: "2026-05-10", title: "Karaoke Night" },
    { date: "2026-05-11", title: "Photography Tour" },
    { date: "2026-05-12", title: "Yoga Session/HITT Session" },
    { date: "2026-05-13", title: "Murder Mystery Night" },
    { date: "2026-05-14", title: "Argentinian Grill Night" },
    { date: "2026-05-15", title: "Jazz Night" },
    { date: "2026-05-16", title: "Taste of Italy Night" },
    { date: "2026-05-17", title: "Karaoke Night" },
    { date: "2026-05-18", title: "Photography Tour" },
    { date: "2026-05-19", title: "Yoga Session/HITT Session" },
    { date: "2026-05-20", title: "Murder Mystery Night" },
    { date: "2026-05-21", title: "Argentinian Grill Night" },
    { date: "2026-05-22", title: "Jazz Night" },
    { date: "2026-05-23", title: "Taste of Italy Night" },
    { date: "2026-05-24", title: "Karaoke Night" },
    {date: "2026-05-25", title: "Photography Tour" },
    {date: "2026-05-26", title: "Yoga Session/HITT Session" },
    {date: "2026-05-27", title: "Murder Mystery Night" },
    {date: "2026-05-28", title: "Argentinian Grill Night" },
    {date: "2026-05-29", title: "Jazz Night" },
    {date: "2026-05-30", title: "Taste of Italy Night" },
    {date: "2026-05-31", title: "Karaoke Night" }
];

// Get calendar container
const calendar = document.getElementById("calendar");

// function makes calendar
function generateCalendar() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let html = "<table class='calendar-table'>";
    html += "<tr><th colspan='7'>Calendar</th></tr>";
    html += "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>";

    let date = 1;

    for (let i = 0; i < 6; i++) {
        html += "<tr>";

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                html += "<td></td>";
            } else if (date > daysInMonth) {
                break;
            } else {
                let currentDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;

                // Check if event exists for this date
                let eventText = "";
                events.forEach(event => {
                    if (event.date === currentDate) {
                        eventText = `<br><small>${event.title}</small>`;
                    }
                });

                html += `<td><strong>${date}</strong>${eventText}</td>`;
                date++;
            }
        }

        html += "</tr>";
    }

    html += "</table>";
    calendar.innerHTML = html;
}

// Run the calendar function
generateCalendar();