export const formatDate = (date: Date) =>
  new Date(date).toLocaleString('en-GB', {
    month: 'long',
    weekday: 'long',
    day: 'numeric',
    year: 'numeric'
  });