const getParam = () => {
  const url = new URL(window.location.href);
  return url.search.toString().replace(/[^A-Za-z]+/g, ' ');
};
export const formatDate = (date) => {
  date = new Date(date);
  const monthNames = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct',
    'Nov', 'Dec',
  ];
  return `${date.getDate()} ${monthNames[date.getMonth()]}, ${date.getFullYear()}`;
};
export default getParam;
