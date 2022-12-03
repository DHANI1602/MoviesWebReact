const Save = (e) => {
  let item = JSON.parse(localStorage.getItem('movie'));
  if (Array.isArray(item)) {
    item.push(e);
  } else {
    item = [e];
  }
  localStorage.setItem('movie', JSON.stringify(item));
  return e;
};
