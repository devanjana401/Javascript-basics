const now = new Date();

const day = now.toLocaleString('en-US', { weekday: 'long' });
const month = now.toLocaleString('en-US', { month: 'long' });
const year = now.getFullYear();

const formattedDate = `${day}, ${month}, ${year}`;
console.log(formattedDate);
