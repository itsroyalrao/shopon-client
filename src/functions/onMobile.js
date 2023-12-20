function onMobile() {
  const onMobile = /Mobi|Android/i.test(navigator.userAgent);
  return onMobile;
}

function url() {
  // return `http://localhost:3000`;
  // return     `https://shopon-backend-production.up.railway.app`
  // return `https://shopon-0ez5.onrender.com`;
  return `https://shopon.up.railway.app`;
}

export { onMobile, url };
