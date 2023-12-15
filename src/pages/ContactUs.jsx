import { useEffect } from "react";
import Header from "../components/Header";

function ContactUs() {
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) window.location.href = "/login";
  });
  return (
    <>
      <Header />
    </>
  );
}

export default ContactUs;
