dayjs.extend(dayjs_plugin_relativeTime);

const currentDate = dayjs();

const movingDay = dayjs('2024-09-01');

let dayNumber;

if (currentDate.isBefore(movingDay)) {

    dayNumber = `days left: ${movingDay.diff(currentDate, 'day')}`;
} else {

    dayNumber = `days after it was done: ${currentDate.diff(movingDay, 'day')}`;
}

document.querySelector('.content').innerHTML = `
${dayNumber}
`