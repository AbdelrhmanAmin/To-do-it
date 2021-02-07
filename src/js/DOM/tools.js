const getParam = () => {
  const url = new URL(window.location.href);
  return url.search.toString().replace(/[^A-Za-z]+/g, ' ');
};
export default getParam;
