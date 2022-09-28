function addToDb(time) {
    localStorage.setItem('break-time', time);
}

function getFromDb() {
    const time = localStorage.getItem('break-time');
    return time;
}

export { addToDb, getFromDb }