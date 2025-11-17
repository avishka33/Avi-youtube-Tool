// Function to update the displayed values and calculate the watch time
function calculateWatchTime() {
    // 1. Get Values from Sliders
    const videos = parseInt(document.getElementById('videos').value);
    const avgViews = parseInt(document.getElementById('avgViews').value);
    const avgLength = parseInt(document.getElementById('avgLength').value);
    const retention = parseInt(document.getElementById('retention').value); // This is a percentage (e.g., 50)

    // 2. Update Displayed Values next to sliders
    document.getElementById('videosValue').textContent = videos;
    document.getElementById('avgViewsValue').textContent = avgViews;
    document.getElementById('avgLengthValue').textContent = avgLength;
    document.getElementById('retentionValue').textContent = retention + '%';

    // 3. Perform the Calculation
    // Total Minutes = Videos * AvgViews * AvgLength * (Retention / 100)
    const totalMinutes = videos * avgViews * avgLength * (retention / 100);
    
    // Total Hours = Total Minutes / 60
    const totalHours = totalMinutes / 60;

    // 4. Display the Result
    const totalHoursElement = document.getElementById('totalHours');
    const goalMessageElement = document.getElementById('goalMessage');
    const requiredGoal = 4000;

    // Display the hours, rounded to two decimal places
    totalHoursElement.textContent = totalHours.toFixed(2);

    // 5. Update the Goal Message based on 4000 hours
    if (totalHours >= requiredGoal) {
        goalMessageElement.textContent = `ඔබට ${requiredGoal} නැරඹුම් පැය ඉලක්කය ඉක්මවා ඇත!`;
        goalMessageElement.className = 'goal-achieved'; // Green text
    } else {
        const remainingHours = requiredGoal - totalHours;
        goalMessageElement.textContent = `ඔබට තවත් ${remainingHours.toFixed(2)} පැය අවශ්‍යයි.`;
        goalMessageElement.className = 'goal-not-achieved'; // Red text
    }
}

// Initial calculation when the page loads
document.addEventListener('DOMContentLoaded', calculateWatchTime);
