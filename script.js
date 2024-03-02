try {
    dayjs.extend(dayjs_plugin_relativeTime);

    const currentDate = dayjs();
    const movingDay = dayjs('2024-09-01');

    if (currentDate.isBefore(movingDay)) {
        changeOne = 'will occur';
        changeTwo = 'will be';
        changeThree = 'move';
        changeFour = 'will open';
        changeFive = 'am eagerly anticipating this';

        dayNumber = movingDay.diff(currentDate, 'day');
        messageContent = `Days left: ${dayNumber}`;
    } else {
        changeOne = 'occurred';
        changeTwo = 'was';
        changeThree = 'moved';
        changeFour = 'opened';
        changeFive = 'eagerly anticipated that';

        dayNumber = currentDate.diff(movingDay, 'day');
        messageContent = `Days after: ${dayNumber}`;
    }

    document.querySelector('.content').innerHTML = `
    <h1>Moving Day Counter</h1>
    <p>
        On September 1, 2024, a significant moment ${changeOne} in my life. It ${changeTwo} the day I ${changeThree} out from my parents' home. This ${changeFour} a new chapter in my life, and since I enjoy changes and challenges, I ${changeFive} date.
    </p>
    <hr>
    <p class="message-content">${messageContent}</p>
    `;
} catch (error) {
    document.querySelector('body').innerHTML = '<p style="color: red; margin: 0; padding: 0;">An error occurred. Please try again.</p>';
}
