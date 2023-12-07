export default function onLaptop() {
  const onLaptop = /Mobi|Android/i.test(navigator.userAgent);
  return onLaptop;
}
