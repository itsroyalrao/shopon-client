import { useEffect } from "react";
import Header from "../components/Header";

function Home() {
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

export default Home;
