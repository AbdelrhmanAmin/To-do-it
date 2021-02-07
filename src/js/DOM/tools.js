const getParam = () => {
  const url = new URL(window.location.href);
  return url.search.toString().replace(/[^a-zA-Z0-9 ]/g, '');
};
export default getParam;
