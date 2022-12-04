const Save = (key, e) => {
  let item = JSON.parse(localStorage.getItem(key));
  if (Array.isArray(item)) {
    item.push(e);
  } else {
    item = [e];
  }
  localStorage.setItem(key, JSON.stringify(item));
  return e;
};
export default Save;
