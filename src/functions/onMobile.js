export default function onMobile() {
  const onMobile = /Mobi|Android/i.test(navigator.userAgent);
  return onMobile;
}
