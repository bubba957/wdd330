
const currentDate = new Date();
const date = currentDate.toLocaleDateString();
console.log(date);

document.querySelector('.todays-date').innerHTML = date;